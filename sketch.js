const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var score =0;
var count=0;
var gameState = "play";

function preload(){
  re = loadImage("re.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + width/10) {
     divisions.push(new Divisions(k, height-height/6, 10,height/3));
   }

    for (var j = width/10.66666; j <=width; j=j+width/16) 
    {
    
       plinkos.push(new Plinko(j,height-height+height/10.6666));
    }

    for (var j = width/16; j <=width-10; j=j+width/16) 
    {
    
       plinkos.push(new Plinko(j,height-height+height/4.5714));
    }

     for (var j = width/10.66666; j <=width; j=j+width/16) 
    {
    
       plinkos.push(new Plinko(j,height-height+height/2.9090909));
    }

     for (var j = width/16; j <=width-10; j=j+width/16) 
    {
    
       plinkos.push(new Plinko(j,height-height+height/2.13333));
    }
}


function draw() {
  background("black");
  
  Engine.update(engine);
  //Render.run(render);
  ground.display();
 
  if(gameState === "play"){
  for (var i = 0; i < plinkos.length; i++) {
   plinkos[i].display();
  }}
  
  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
  }
  if(gameState === "play"){
  if(particle!=null) {
    particle. display(); 
    if(particle.body.position.y > height-height+height/1.14285714) {
    
    if(particle.body.position.x > width-width && particle.body.position.x < width-width+width/10 ||particle.body.position.x > width-width/10 && particle.body.position.x < width ) {
      score = score + 100;     
    } 
    if(particle.body.position.x > width-width+width/10 && particle.body.position.x < width-width+width/5||particle.body.position.x > width-width+width/1.25 && particle.body.position.x < width-width+width/1.1111111  ) {
      score = score + 200;     
    } 
    if(particle.body.position.x > width-width+width/5 && particle.body.position.x < width-width+width/3.33333333||particle.body.position.x > width-width+width/1.428571 && particle.body.position.x < width-width+width/1.25  ) {
      score = score + 300;     
    } 
    if(particle.body.position.x > width-width+width/3.33333333 && particle.body.position.x < width-width+width/2.5||particle.body.position.x > width-width+width/1.667 && particle.body.position.x < width-width+width/1.428571  ) {
      score = score + 400;     
    } 
    if(particle.body.position.x > width-width+width/2.5 && particle.body.position.x < width-width+width/1.6667) {
      score = score + 500;             
    } 
    particle = null;
    }
  }
    if( count >= 5)
    {gameState = "end"; } 
    }
  
  if(gameState === "end"){
    textSize(width/16);
    fill("yellow");
    text("GAME OVER",width-width+width/4,250);
    textSize(width/32);
    text("wanna retry,touch any where on screen",width-width+width/4,height-height+height/4)
  } 
  textSize(width/50)
  text("Score : "+score,width-width+width/40,height-height+height/26.666);
  text("Chance Left : "+ (5-count),width-width/5,height-height+height/26)
  textSize(width/32) 
  text("100",width-width+width/40,height-height/3);
  text("200",width-width+width/8,height-height/3);
  text("300",width-width+width/4.444,height-height/3);
  text("400",width-width+width/3.076923,height-height/3);
  text("500",width-width+width/2.3529,height-height/3);
  text("500",width-width+width/1.904761,height-height/3);
  text("400",width-width+width/1.6,height-height/3);
  text("300",width-width+width/1.37931,height-height/3);
  text("200",width-width+width/1.212121,height-height/3);
  text("100",width-width+width/1.0810810,height-height/3);
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,width/80,width/80);
  }  
  if(gameState === "end"){
    gameState="play"
    count = 0
    score = 0
  }
}

