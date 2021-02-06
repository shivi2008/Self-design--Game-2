//Check the score commands.
//Create gameStates.
//Create Life.
//Create how much distance coverd.
//Change velocity after five runways- according to score
// Show castle and change background- according to score


var plane, planeImg;
var castle, castleImg;
var bird, birdImg, birdGroup;
var  runway, runwayImg, runwayGroup;
var background, backgroundImg;
var ground;
var  gameOver, gameOverImg;
var score=0;


function preload(){
planeImg= loadImage("Images/Plane.png");
castleImg= loadImage("Images/Castle.png");
birdImg= loadImage("Images/Bird.png");
runwayImg= loadImage("Images/Runway2.png");
backgroundImg= loadImage("Images/Bg6.jpg");
gameOverImg= loadImage("Images/Game Over.jpg")



}

function setup(){
createCanvas(1400,600);
background=createSprite(350,300,150,300);
background.addImage(backgroundImg); 
background.scale= 3;
background.velocityX= -3;

plane= createSprite(120,250,300,120);
plane.addImage(planeImg)
plane.scale=0.5;

birdGroup= new Group();
runwayGroup= new Group();

ground= createSprite(700,575,1400,50)
ground.visible= false;
}


function draw(){
if(background.x <200){
background.x= background.width/2;
}   

if(keyDown("UP_ARROW")){
plane.y= plane.y-5;
}

if(keyDown("DOWN_ARROW")){
plane.y= plane.y+5;
}

if(keyDown("RIGHT_ARROW")){
plane.x=plane.x+5  
}
   
spawnBirdEnemies();
spawnRunways();

if(birdGroup.isTouching(plane)|| ground.isTouching(plane)){
plane.destroy();
}

if(runwayGroup.isTouching(plane)){
score=score+10;
}



drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY);
textSize(20);
fill("red");
text("Score :"+ score,1286,23);
}

function spawnBirdEnemies(){
if(frameCount %80===0){
bird=createSprite(1250,500,120,320);
bird.addImage(birdImg);
bird.scale=0.2;
bird.velocityX= -7;
 
bird.y=Math.round(random(45,358));
bird.lifetime=200;
birdGroup.add(bird);
}    
}

function spawnRunways(){
if(frameCount %400===0){
runway=createSprite(1250,530,80,70);
runway.addImage(runwayImg);
runway.velocityX= -3;
runway.scale=0.5;
runway.rotation=-47;
runway.depth=plane.depth;
plane.depth=plane.depth+1;
runway.lifetime=467;
runwayGroup.add(runway);

}
}