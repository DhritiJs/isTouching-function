var fixedRect,movingRect;
var rect2;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";

  rect2=createSprite(300,100,50,10);
  rect2.shapeColor="blue";
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,rect2)){
   movingRect.shapeColor="red";
   rect2.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    rect2.shapeColor="blue";
  }

  drawSprites();
}


function isTouching(object1,object2){

  if(object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object2.height/2+object1.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2){
     
      return true;
    }
    else{
   return false;
    }


}


