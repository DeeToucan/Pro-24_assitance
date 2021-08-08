
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var p;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	p = new PAPER(width/2,height/2);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  p.display();
  drawSprites();
 
}



