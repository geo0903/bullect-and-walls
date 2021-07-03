var bullet, wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed = random(120,220);
  weight = random(30,50);
  thickness =random(20,80)

  bullet =createSprite(50, 200, 20, 20);
  bullet.velocityX=speed;
bullet.shapeColor="white"
  
  wall =createSprite(1550, 200, thickness,height/2)
 wall.shapeColor="grey";

}

function draw() {
  background("black");  
if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;
  if(deformation>180){
   bullet.shapeColor="red";

  }
  if(deformation<180 && deformation>100){
   bullet.shapeColor="yellow";
  }
  if(deformation<100){
    bullet.shapeColor="green"
  }
}
  drawSprites();
}
function hasCollided(bullect,wall){
  bullectRightEdge=bullect.x + bullect.width;
  wallLeftEdge=wall.x;
  if(bullectRightEdge>=wallLeftEdge){
    return true;
  }
return false;
}