import {header} from "./Header.js"
import {main} from "./Main.js"

class App{
    constructor(){}
    create(){
        this.element=document.createElement('div')
        this.element.classList.add('app')
        return this.element
    }
    render(){
        this.element.appendChild(header)
        this.element.appendChild(main)
        document.body.appendChild(this.element)
    }
    init(){
        this.create()
        this.render()
    }  
}
export default new App().init()