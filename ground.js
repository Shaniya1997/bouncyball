class ground{

constructor(y,width){

    var groundoptions ={isStatic :true}

    this.ground = Bodies.rectangle(200,y,width,20,groundoptions);
    this.width = width;
    World.add(world,this.ground);
}

display(){

    rectMode(CENTER);
    fill("green");
    rect(this.ground.position.x,this.ground.position.y,this.width,20);

}


}