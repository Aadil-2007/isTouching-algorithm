var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="orange";

 movingRect=createSprite(200,300,50,50);
 movingRect.shapeColor="orange";

 movingRect.debug=true;
 fixedRect.debug=true;
}

function draw() {
  background("blue");  
  drawSprites();

  movingRect.y=mouseY;
  movingRect.x=mouseX;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2) {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="black";
  }
  else{
    movingRect.shapeColor="orange";
    fixedRect.shapeColor="orange";
  }
}