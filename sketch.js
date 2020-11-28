var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(100,200,50,50);
  car.velocityX = 7;
  car.shapeColor = "yellow";
  wall = createSprite(600,200,50,100);
  wall.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,car) || isTouching(movingRect,wall) || isTouching(movingRect,fixedRect)){
    textSize(30);
    text("THEY ARE TOUCHING",300,300);
  }
  else{
    textSize(30);
    text("THEY ARE NOT TOUCHING",300,300);
  }
  bounceOff(car, wall);

  drawSprites();
}
