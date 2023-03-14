var ball
var ground


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20)
	leftSide = new Ground(1100,60,20,120)
	rightSide = new Ground(1200,60,20,120)

	var balls_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = bodies.circle(200,100,20,balls_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  leftSide.show()
  rightSide.show()
  drawSprites();
 
}


function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
	}
}



