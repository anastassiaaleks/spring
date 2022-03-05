class Main{
    constructor(){}
    create(){
        this.element=document.createElement('main')
        this.element.innerHTML=`
            <div class="main__info">
                <h1>Projects</h1>
                <p>From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design.</p>
            </div>
            <section class="projects-section">
                <div>
                    <div class="projects-list">
                        <div class="project-list__item">
                            <div class="project-list__img">
                                <img src="./img/spring-boot.svg" alt="">
                            </div>
                            <div class="project-list__description">
                                <h3>Spring Boot</h3>
                                <p>Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.</p>
                            </div>
                        </div>
                        <div class="project-list__item">
                            <div class="project-list__img">
                                <img src="./img/spring-framework.svg" alt="">
                            </div>
                            <div class="project-list__description">
                                <h3>Spring Framework</h3>
                                <p>Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.</p>
                            </div>
                        </div>
                        <div class="project-list__item">
                            <div class="project-list__img">
                                <img src="./img/spring-data.svg" alt="">
                            </div>
                            <div class="project-list__description">
                                <h3>Spring Data</h3>
                                <p>Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.</p>
                            </div>
                        </div>
                        <div class="project-list__item">
                            <div class="project-list__img">
                                <img src="./img/spring-cloud.svg" alt="">
                            </div>
                            <div class="project-list__description">
                                <h3>Spring Cloud</h3>
                                <p>Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.</p>
                            </div>
                        </div>
                        <div class="project-list__item">
                            <div class="project-list__img">
                                <img src="./img/spring-data-flow.svg" alt="">
                            </div>
                            <div class="project-list__description">
                                <h3>Spring Cloud Data Flow</h3>
                                <p>Provides an orchestration service for composable data microservice applications on modern runtimes.</p>
                            </div>
                        </div>
                        <div class="project-list__item">
                            <div class="project-list__img">
                                <img src="./img/spring-security.svg" alt="">
                            </div>
                            <div class="project-list__description">
                                <h3>Spring Security</h3>
                                <p>Protects your application with comprehensive and extensible authentication and authorization support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
        return this.element
    }
    init(){
        return this.create()
    }
}
const main = new Main().init()
export {main}