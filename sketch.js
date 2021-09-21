var bg,bgImg;
var player, shooterImg, shooter_shooting,zombie,zombieImg,enemy1,heart1,heart2,heart3,h1,h2,h3,p,pGroup,p1;
var gameState=0;
var score=0;
var life=3;
var p=70;



function preload(){
  
  shooterImg = loadImage("assets/girlkick.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("Halloweenv.2.0.jpg")

  zombieImg = loadImage("zombie.png")
  
  heart1= loadImage("assets/heart_3.png")
  heart2= loadImage("assets/heart_2.png")
  heart3= loadImage("assets/heart_1.png")
  p1=loadImage("assets/p.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.2
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 1
   player.debug = true
   player.setCollider("rectangle",0,0,120,120)
   player.visible=false
   enemy1=new Group()
   pGroup=new Group()

   h1=createSprite(displayWidth-150,40);
   h1.addImage(heart1)
   h1.scale=0.5

   h2=createSprite(displayWidth-150,40);
   h2.addImage(heart2)
   h2.scale=0.5
   h2.visible=false;

   h3=createSprite(displayWidth-150,40);
   h3.addImage(heart3);
   h3.scale=0.5
   h3.visible=false;


  
}

function draw() {
  background(0);
  drawSprites();

 if(gameState===0)
{if(life===3){
  h1.visible=true
  h2.visible=false
  h3.visible=false
}
if(life===2){
  h1.visible=false
  h2.visible=true
  h3.visible=false
}
if(life===1){
  h1.visible=false
  h2.visible=false
  h3.visible=true
}
if(life===0){
  gameState=1
}
   spawnzombie()
   player.visible=true
  
  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-30
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
   player.x = player.x+30
  }
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y = player.y+30
  }

  //if(keyWentDown("space")){
 
   // player.addImage(shooter_shooting)
   
  //}
  
  //player goes back to original standing image once we stop pressing the space bar
  if(keyWentDown("space")){
    p=createSprite(player.x-20,player.y-30,20,10)
    p.addImage(p1)
    p.scale=0.1
    p.velocityX=0.7;
    pGroup.add(p)
    p=p-1;
    
    
    
    
  }
  if(player.isTouching(enemy1)){
    for(var i=0;i<enemy1.length;i++){
      if(enemy1[i].isTouching(player)){
        enemy1[i].destroy()
        life=life-1
      }
    }
    
    
        }
        
 
 }
 else if(gameState===1){
enemy1.destroyEach()

 }
  //background(0); 
   //textSize(30)
   //text("ZOMBIE ATTACK",450,200)
   //textSize(20)
   //text("PRESS ENTER KEY TO START",150,300)
   //text("USE ALL ARROW KEYS TO ATTACK THE ZOMBIE",170,320)
   //text("YOU HAVE 3 LIFELINES TO SAVE YOURSELF, BEWARE",190,340)
   //if(keyCode===13){
    //gameState=1;
   


 
 


 
   
  
  
  



  //moving the player up and down and making the game mobile compatible using touches






//release bullets and change the image of shooter to shooting position when space is pressed



}
function spawnzombie()
{ if(frameCount %150===0){
  var enemy=createSprite(random(500,1000),random(100,500),40,40)
  enemy.addImage(zombieImg)
  enemy.scale=0.35
  enemy.velocityX=-3
  enemy.lifetime=400
  enemy1.add(enemy)
  

}


}
