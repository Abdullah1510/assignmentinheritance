export class Shape{
    
   constructor(r){
    this.radius=r;
   }
    drawShape(){

    }
    calculateArea(){
        let area=Math.PI*this.radius*this.radius
        console.log(area);
    }

}
