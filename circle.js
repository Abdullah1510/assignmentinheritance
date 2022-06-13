import { Shape } from "./shape.js";
export class Circle extends Shape{
    constructor(r){
        super(r)
            this.radius=r
    }

    calculateArea(){
        let area=Math.PI*this.radius*this.radius
        console.log(Math.round(area));
    }
}