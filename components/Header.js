class Header{
    constructor(){
        this.data=[
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
        let navigation=document.createElement('nav'),
            springLogo=document.createElement('a'),
            logoImg=document.createElement('img'),
            navList=document.createElement('ul'),
            burgerMenu=document.createElement('div'),
            burgerSpan=document.createElement('span')
        
        springLogo.setAttribute('href', '#')
        logoImg.setAttribute('src', './img/spring-logo.svg')
        logoImg.setAttribute('alt', 'Spring')

        springLogo.classList.add('spring-logo')
        navList.classList.add('nav-list')
        burgerMenu.classList.add('nav_burger-menu')

        springLogo.insertAdjacentElement('afterbegin', logoImg)
        navigation.insertAdjacentElement('afterbegin', springLogo)
        navigation.insertAdjacentElement('beforeend', navList)
        burgerMenu.appendChild(burgerSpan)
        navigation.insertAdjacentElement('beforeend', burgerMenu)

        this.element.appendChild(navigation)
        this.addNav()
        this.burgerMenu()
        return this.element
    }
    addNav(){
        this.data.forEach((elem)=>{
            let navItem=document.createElement('li')
            navItem.innerHTML= !!elem.list && elem.list.length>0 
                ? `${elem.title} <i class="fa-solid fa-angle-down"></i> <ul class="nav-list__drop"></ul>` 
                : `<a href="#">${elem.title}</a>`
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
        this.element.querySelector('.nav-list').addEventListener('click', (elem)=>{
            this.element.querySelectorAll('.nav-list')[0].childNodes.forEach((e)=>{
                if (e !== elem.target.closest('li')){ e.classList.remove('active-drop') }
            })
            elem.target.closest('li').classList.toggle('active-drop')
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
}
const header = new Header().create()
export {header}