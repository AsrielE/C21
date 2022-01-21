const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var rightWall;
var top_wall;
var bouncy;
var up;
var right;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  rightWall = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var bouncy_options = {
    restitution:0.99,
  }
  bouncy = Bodies.circle(200,200,20,bouncy_options)
  World.add (world,bouncy)
  up = createImg("up.png")
  up.position(40,50)
  up.size(50,50)
  up.mouseClicked(vForce)
  right = createImg("right.png")
  right.position(330,50)
  right.size(50,50)
  right.mouseClicked(hForce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  rightWall.show();
  Engine.update(engine);
  ellipse(bouncy.position.x,bouncy.position.y,20,20)
}
function hForce(){
  Matter.Body.applyForce(bouncy,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
  Matter.Body.applyForce(bouncy,{x:0,y:0},{x:0,y:-0.05})
}