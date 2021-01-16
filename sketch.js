var speed,car, weight,wall  
  
  function setup() {
  createCanvas(800,400);
  speed=random(50,90)
  weight=random(400,1500)

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed
  car.shapeColor="blue"
  wall=createSprite(700,200,60,300)
  wall.shapeColor="white"
}

function draw() {
  background(0,0,0);  
  if(wall.isTouching(car)){
    car.collide(wall)
    if((speed*weight>50000)){
    wall.shapeColor="red"
    }
    else if (speed*weight>30000){
      wall.shapeColor="yellow"
    }
    else{
      wall.shapeColor="green"
    }
  }
  drawSprites();
}