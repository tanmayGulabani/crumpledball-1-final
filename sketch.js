const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3,ground;
function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,600,1200,20);
   dustbin=new Dustbin(450,350,70,80);
   
   
   
   
   
  paper = new Paper(200,575,25);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  

  
 paper.display();
}
function keyPressed() {
   if(keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-120})
   }if(keyCode === DOWN_ARROW) {
      Matter.Body.applyForce(paper.body,paper.body.position,{x:-100,y:-100})
   }

}