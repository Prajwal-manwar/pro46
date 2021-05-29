
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, groundImg;

function preload() {
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ground = new Ground(400, 770, 800, 450);


	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
 
}



