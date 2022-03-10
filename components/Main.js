class Main{
    constructor(){
        this.data=[
            {img: "./../img/spring-boot.svg", title: "Spring Boot", description: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."},
            {img: "./../img/spring-framework.svg", title: "Framework", description: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more."},
            {img: "./../img/spring-data.svg", title: "Spring Data", description: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond."},
            {img: "./../img/spring-cloud.svg", title: "Spring Cloud", description: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices."},
            {img: "./../img/spring-data-flow.svg", title: "Spring Cloud Data Flow", description: "Provides an orchestration service for composable data microservice applications on modern runtimes."},
            {img: "./../img/spring-security.svg", title: "Spring Security", description: "Protects your application with comprehensive and extensible authentication and authorization support."},
        ]
    }
    create(){
        this.element=document.createElement('main')
        this.element.innerHTML=`
            <div class="main__info">
                <h1>Projects</h1>
                <p>From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design.</p>
            </div>
            <section class="projects-section">
                <div>
                    <div class="projects-search">
                        <input type="text" class="search-input" placeholder='Search...'>
                        <button class="del-btn">x</button>
                    </div>
                    <div class="projects-list"></div>
                </div>
            </section>
        `
        this.renderProjects()
        this.searchProjects()
        return this.element
    }
    renderProjects(inputData=''){
        let projectsList=this.element.querySelector('.projects-list')
        let newData=this.data.filter((e)=> e.title.toLowerCase().includes(inputData) || e.description.toLowerCase().includes(inputData))
        
        projectsList.innerHTML=''

        if (newData.length===0){ projectsList.innerHTML=`<p>No results</p>` }

        newData.map((elem)=>{
            let project=document.createElement('div')
            project.classList.add('project-list__item')
            project.innerHTML=`
                <div class="project-list__img">
                    <img src=${elem.img} alt="">
                </div>
                <div class="project-list__description">
                    <h3>${elem.title}</h3>
                    <p>${elem.description}</p>
                </div>
            `
            projectsList.appendChild(project)
        })
    }
    searchProjects(){
        let searchInput=this.element.querySelector('.search-input')
        let delBtn=this.element.querySelector('.del-btn')

        searchInput.addEventListener('input', ()=>{
            this.renderProjects(searchInput.value.toLowerCase())
        })
        delBtn.addEventListener('click', ()=>{
            searchInput.value=''
            this.renderProjects()
        })
    }
}
const main = new Main().create()
export {main}