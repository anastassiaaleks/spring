class Header{
    constructor(){}
    create(){
        this.element=document.createElement('header')
        this.element.classList.add('header')
        this.element.innerHTML=`
        <nav>
            <a class="spring-logo" href="#"><img src="./img/spring-logo.svg" alt="Spring"></a>
            <ul class="nav-list">
                <li>Why Spring <i class="fa-solid fa-angle-down"></i> 
                    <ul class="nav-list__drop">
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Microservices</a></li>
                        <li><a href="#">Reactive</a></li>
                        <li><a href="#">Event Driven</a></li>
                        <li><a href="#">Cloud</a></li>
                        <li><a href="#">Web Applications</a></li>
                        <li><a href="#">Serverless</a></li>
                        <li><a href="#">Batch</a></li>
                    </ul>
                </li>
                <li>Learn <i class="fa-solid fa-angle-down"></i> 
                    <ul class="nav-list__drop">
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Quickstart</a></li>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </li>
                <li>Projects <i class="fa-solid fa-angle-down"></i> 
                    <ul class="nav-list__drop">
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Spring Boot</a></li>
                        <li><a href="#">Spring Framework</a></li>
                        <li><a href="#">Spring Cloud</a></li>
                        <li><a href="#">Spring Cloud Data Flow</a></li>
                        <li><a href="#">Spring Data</a></li>
                        <li><a href="#">Spring Integration</a></li>
                        <li><a href="#">Spring Batch</a></li>
                        <li><a href="#">Spring Security</a></li>
                        <li><a class="nav-list--view-all" href="">View all projects</a></li>
                        <li class="nav-list--dev-tools">Development Tools</li>
                        <li><a href="#">Spring Tools 4</a></li>
                        <li><a href="#">Spring Initializr <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                    </ul>
                </li>
                <li><a href="#">Training</a></li>
                <li><a href="#">Support</a></li>
                <li>Community <i class="fa-solid fa-angle-down"></i> 
                    <ul class="nav-list__drop">
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </li>
            </ul>
            <div class="nav_burger-menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
        `
        return this.element
    }
    init(){
        return this.create()
    }
}
const header = new Header().init()
export {header}