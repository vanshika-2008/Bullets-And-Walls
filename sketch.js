var wall,thickness;
thickness =random(22,83);

var bullet,speed,weight;
speed = random(223,321);
weight = random(30,52);

function setup() {
  createCanvas(1600,400);
   bullet = createSprite(50,230,15,10);
   bullet.shapeColor = "white";
   bullet.velocityX = 5;

   wall =createSprite(1000,200,thickness,height/2);
   wall.shapeColor = "blue";
}

function draw() {
  background("black");
  if (collided(bullet,wall))
   {
     bullet.velocityX = 0;
     var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
     if (damage>10) {
       wall.shapeColor = color(255,0,0);
     }

    if (damage<10) {
      wall.shapeColor = color(0,255,0);
    }

    
  }  
  drawSprites();
}

function collided(lbullet,lwall) {
  bulletRightEdge = lbullet.x+lbullett.width;
  wallLeftEdge = lwall.x;
 if (bulletRightEdge>=wallLeftEdge)
  {
     return true;
 }
    return false;
}

