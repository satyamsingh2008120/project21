var ball,thikness
var bullet,speed,weight


function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400,1500)
  thickness = random(20,50)
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "red"
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2)
  
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0
    var damage=0.5 * weight * speed * speed/thickness * thickness* thickness;
    
    if (damage>10){
    wall.shapeColor = "red"
    }
  
  
  if (damage<10){
   wall.sapeColor =  "green"
  }
  }
  
  
 
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

