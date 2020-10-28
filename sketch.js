
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var bobDiameter=50;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


    engine = Engine.create();
    world = engine.world;
	
    bob1=new bob(300,350,50);
    bob2=new bob(350,350,50);
    bob3=new bob(400,350,50);
    bob4=new bob(450,350,50);
    bob5=new bob(500,350,50);
    roof1=new roof(400,100,300,40)
    ground=new roof(200,700,900,20)
    rope1=new rope(bob1.body,roof1.body,-bobDiameter*2,0)
    rope2=new rope(bob2.body,roof1.body,-bobDiameter*1,0)
    rope3=new rope(bob3.body,roof1.body,bobDiameter*0,0)
    rope4=new rope(bob4.body,roof1.body,bobDiameter*1,0)
    rope5=new rope(bob5.body,roof1.body,bobDiameter*2,0)

	  Engine.run(engine);
  
}


function draw() {
  background("white")
  rectMode(CENTER);
  
  bob1.display();
  bob2.display();

  bob3.display();
  bob4.display();

  bob5.display();
  ground.display();

  roof1.display();
  rope1.display();

  rope2.display();
  rope3.display();

  rope4.display();
  rope5.display();

  drawSprites();
 
  if(keyDown("UP_ARROW")){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:100})
  }
}
