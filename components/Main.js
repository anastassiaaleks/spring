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

        let mainInfo=document.createElement('div'),
            mainTitle=document.createElement('h1'),
            mainP=document.createElement('p'),
            mainSection=document.createElement('div'),
            projectsContainer=document.createElement('div'),
            projectsSearch=document.createElement('div'),
            searchInput=document.createElement('input'),
            searchButton=document.createElement('button'),
            projectsList=document.createElement('div')

        mainInfo.classList.add('main__info')
        mainSection.classList.add('projects-section')
        projectsSearch.classList.add('projects-search')
        searchInput.classList.add('search-input')
        searchButton.classList.add('del-btn')
        projectsList.classList.add('projects-list')

        searchInput.setAttribute('type', 'text')
        searchInput.setAttribute('placeholder', 'Search...')

        mainTitle.insertAdjacentText('afterbegin', 'Projects')
        mainP.insertAdjacentText('afterbegin', 'From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design.')
        searchButton.insertAdjacentText('afterbegin', 'x')

        mainInfo.insertAdjacentElement('afterbegin', mainTitle)
        mainInfo.insertAdjacentElement('beforeend', mainP)
        mainSection.insertAdjacentElement('afterbegin', projectsContainer)
        projectsContainer.insertAdjacentElement('afterbegin', projectsSearch)
        projectsContainer.insertAdjacentElement('beforeend', projectsList)
        projectsSearch.appendChild(searchInput)
        projectsSearch.appendChild(searchButton)

        this.element.insertAdjacentElement('afterbegin', mainInfo)
        this.element.insertAdjacentElement('beforeend', mainSection)

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
            let project=document.createElement('div'),
                projectImgDiv=document.createElement('div'),
                projectImg=document.createElement('img'),
                projectDescription=document.createElement('div'),
                descriptionTitle=document.createElement('h3'),
                descriptionP=document.createElement('p')


            project.classList.add('project-list__item')
            projectImgDiv.classList.add('project-list__img')
            projectDescription.classList.add('project-list__description')

            projectImg.setAttribute('src', `${elem.img}`)

            descriptionTitle.insertAdjacentText('afterbegin', `${elem.title}`)
            descriptionP.insertAdjacentText('afterbegin', `${elem.description}`)

            projectImgDiv.appendChild(projectImg)
            projectDescription.appendChild(descriptionTitle)
            projectDescription.appendChild(descriptionP)

            project.appendChild(projectImgDiv)
            project.appendChild(projectDescription)

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