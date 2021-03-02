
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
//var mango1;
var world,boy;
var stones, attach;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;	

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1050,170,30);
	mango2=new Mango(1000,260,30);
	mango3=new Mango(970,80,30);
	mango4=new Mango(1050,100,30);
	mango5=new Mango(1200,200,30);
	mango6=new Mango(1200,130,30);
	mango7=new Mango(950,180,30);
	mango8=new Mango(1130,140,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stones = new Stone(250, 440, 40);

	attach = new Throw(stones.body, {x:250,y:445});
	
	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(230);
  //Add code for displaying text here!
  fill("black");
  textSize(18);
text("Press Space to get a second chance", 50, 30);
  
 
  image(boy, 200, 340, 200, 300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  groundObject.display();

  stones.display();
  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);

}
function mouseDragged()
{
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
	attach.fly();
}
function detectCollision(lstone,lmango)
{
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;	
	if(lstone.body.position.x - lmango.body.position.x < lmango.diameter + lstone.diameter 
		&& lmango.body.position.x - lstone.body.position.x < lmango.diameter + lstone.diameter
		&& lstone.body.position.y - lmango.body.position.y < lmango.diameter + lstone.diameter
		&& lmango.body.position.y - lstone.body.position.y < lmango.diameter + lstone.diameter)
		{
			Matter.Body.setStatic(lmango.body, false);
		}
}
function keyPressed()
{
	if(keyCode===32)
	{
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}