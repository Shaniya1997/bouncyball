class box{

constructor(x,y,width,height){
    this.box =Bodies.rectangle(x,y,width,height,{restitution : 1});
    this.width =width;
    this.height=height;
    World.add(world,this.box);

}



display(){
    
    push();
    translate(this.box.position.x,this.box.position.y);
    rotate(angle);
    rectMode(CENTER)
    fill("red");
    rect(0,0,this.width,this.height)
    pop();
}







}