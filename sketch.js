var rectF ,rectM;

function setup() {
  createCanvas(3000,3000);
  rectF=createSprite(200,200,50,100);
  rectF.shapeColor="deepskyblue";
  rectM=createSprite(400,200,50,150);
  rectM.shapeColor="deepskyblue";
}

function draw() {
  background("Lightgreen");  
  
  rectM.x=World.mouseX;
  rectM.y=World.mouseY;
  
if((rectM.x-rectF.x)<= (rectM.width/2 + rectF.width/2) && (rectF.x-rectM.x)<= (rectM.width/2 + rectF.width/2) && (rectM.y-rectF.y)<= (rectM.height/2 + rectF.height/2) && (rectF.y-rectM.y)<= (rectF.height/2 + rectM.height/2)){
  rectF.shapeColor="red";
  rectM.shapeColor="red";
}
else{
  rectF.shapeColor="deepskyblue";
  rectM.shapeColor="deepskyblue";
}

  drawSprites();
}