const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground; 
var trash1, trash2, trash3;
function preload(){
	
}

function setup() {
	createCanvas(1300, 300);


	engine = Engine.create();
	world = engine.world;
	
	ball = new Ball(100, 100, 18);
	ground = new Ground(650, 275, 1300, 10);

	trash2 = new Trash(1000, 270, 100, 10)
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightgrey");
  ball.display();
  ground.display();
  trash2.display();

  drawSprites();   
};

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 62, y: -80});
	}
}


