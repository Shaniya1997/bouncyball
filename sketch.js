const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    box1 = new box(200,100,40,30);
    box2 = new box(300,100,50,20);
    box3 = new box(200,000,50,20);
    box4 = new box(350,300,50,50);
    ground1=new ground(390,400);
    ground2=new ground(200,200);
    
}

function draw(){
    background(0);
    Engine.update(engine);
   
   box1.display();
    box2.display();
    ground1.display();
    box3.display();
    ground2.display();
    box4.display();
}