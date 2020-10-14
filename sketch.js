var bullet,speed,weight;
var wall,thickness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;

 

  if (hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damge>10){
      wall.shapeColor = color(255,0,0);
    }
    if (damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }



  drawSprites();
}

function hasCollided (Lbullet,Lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge){

    return true;
  }
return false;

}