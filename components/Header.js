class Header{
    constructor(){
        this.data=[
            //{title: 'Why Spring <i class="fa-solid fa-angle-down"></i> ', list: ['Overview', 'Microservices', 'Reactive', 'Event Driven', 'Cloud', 'Web Applications', 'Serverless', 'Batch']},
            {title: 'Why Spring', list: ['Overview', 'Microservices', 'Reactive', 'Event Driven', 'Cloud', 'Web Applications', 'Serverless', 'Batch']},
            {title: 'Learn', list: ['Overview', 'Quickstart', 'Guides', 'Blog']},
            {title: 'Projects', list: ['Overview', 'Spring Boot', 'Spring Framework', 'Spring Cloud', 'Spring Cloud Data Flow', 'Spring Data', 'Spring Integration', 'Spring Batch', 'Spring Security', 'View all projects', 'Development Tools', 'Spring Tools 4', 'Spring Initializr <i class="fa-solid fa-arrow-up-right-from-square"></i>']},
            {title: 'Training', list: []},
            {title: 'Support', list: []},
            {title: 'Community', list: ['Overview', 'Events', 'Team']},
        ]
    }
    create(){
        this.element=document.createElement('header')
        this.element.classList.add('header')
        this.element.innerHTML=`
            <nav>
                <a class="spring-logo" href="#"><img src="./img/spring-logo.svg" alt="Spring"></a>
                <ul class="nav-list"></ul>
                <div class="nav_burger-menu">
                    <span></span>
                </div>
            </nav>
        `
        this.addNav()
        this.burgerMenu()
        return this.element
    }
    addNav(){
        this.data.forEach((elem)=>{
            let navItem=document.createElement('li')
            navItem.innerHTML= !!elem.list && elem.list.length>0 ? `${elem.title} <i class="fa-solid fa-angle-down"></i> <ul class="nav-list__drop"></ul>` : `<a href="#">${elem.title}</a>`
            this.element.querySelector('.nav-list').appendChild(navItem)

            elem.list.forEach((e)=>{
                let navItemList=document.createElement('li')
                navItemList.innerHTML=`<a href="#">${e}</a>`
                let navDropList=this.element.querySelectorAll('.nav-list__drop')
                for(let j=0; j<navDropList.length; j++){
                    if (navDropList[j]){ navDropList[j].appendChild(navItemList) }
                }
            })
        })
    }
    burgerMenu(){
        let burgerMenu = this.element.querySelector('.nav_burger-menu')
        let burgerNav = this.element.querySelector('.nav-list')

        burgerMenu.addEventListener('click',function(){
            this.classList.toggle("close")
            burgerNav.classList.toggle("overlay")
        })
    }
    init(){
        return this.create()
    }
}
const header = new Header().init()
export {header}