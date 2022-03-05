
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var caixa1;
var caixa2;
var caixa3;
var chao;

var engine;
var world;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    
	var opition1 = {
	restution: 0.6,
    friction: 0.02,
    frictionAir:0.2

	}
    
	var opition2 = {
    restution: 0.5,
	friction: 0.03,
	frictionAir:0.3

	}
    
	var option4 = {
    isStatic: true


	}

    caixa1 = Bodies.circle(400, 350, 30, opition1);
    World.add(world,caixa1);
    
	caixa2 = Bodies.circle(340, 300, 30, opition2);
    World.add(world,caixa2);

    caixa3 = Bodies.rectangle(440, 400, 30, 30, opition2);
    World.add(world,caixa3);

    chao = Bodies.rectangle(400, 700, 800, 7, option4);
    World.add(world,chao);
    rectMode(CENTER);
    ellipseMode(RADIUS);

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
Engine.update(engine);

rect(chao.position.x,chao.position.y , 800 , 7);
rect(caixa3.position.x,caixa3.position.y, 30 , 30);
ellipse(caixa2.position.x,caixa2.position.y , 30 );
ellipse(caixa1.position.x,caixa1.position.y,30);

}



