const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot;

function preload()
{
	bgImg=loadImage("bg.png")	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	engine = Engine.create();
	world = engine.world; 
  
   g1=new Ground(500,600,1000,10);
   g2=new Ground(1200,500,150,1);
  
	box1=new Box(750,570);
	box2=new Box(750,550);
	box3=new Box(750,400);
	box4=new Box(750,400);
	box5=new Box(750,450);
	box6=new Box(750,300);
  
	box7=new Box(670,570);
	box8=new Box(670,550);
	box9=new Box(670,500);
	box10=new Box(670,400);
	box11=new Box(670,450);
	box12=new Box(670,300);
	box13=new Box(670,250);
	box14=new Box(670,200);
  
	box15=new Box(900,570);
	box16=new Box(900,550);
	box17=new Box(900,500);
	box18=new Box(900,450);
	box19=new Box(900,400);
	
	box21=new Box(820,570)
	box22=new Box(820,550);
	box23=new Box(820,500);
	box24=new Box(820,400);
	box25=new Box(820,450);
	box26=new Box(820,300);
	box27=new Box(820,250);
  box28=new Box(820,200);
  
  monster=new Monster(1200,400,150,150)

	hero  =new Hero(250,250,500,200);
	//slingshot = new Chain(this.hero,{x: 100, y: 200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  Engine.update(engine);

  g1.display();
  g2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  monster.display();

  hero.display();
  //slingShot.display();
    
  drawSprites();
 
}

//function mouseDragged(){Matter.Body.setPosition(this.hero,{x:mouseX,y:mouseY}); }function mouseReleased(){
//	slingshot.fly();}function keyPressed(){	if(keyCode === 32){slingshot.attach(this.hero);}}

function mouseDragged(){
  Matter.body.setPosition(this.hero,{x: mouseX, y: mouseY})
}