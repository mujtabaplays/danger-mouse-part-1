

function preload() {
bg1=loadImage("DangerMouseImages/background.jpg")  
bg2=loadImage("DangerMouseImages/background2.jpg") 
dangerguy1img=loadImage("DangerMouseImages/Dangerfrog1.gif")
dangerguy2img=loadImage("DangerMouseImages/dangerguy2.png")

dangermouse1img=loadImage("DangerMouseImages/dangermouse1.png")
dangermouse2img=loadImage("DangerMouseImages/dangermouse2.png")
dangermouse3img=loadImage("DangerMouseImages/dangermouse3.png")
}


function setup() {
  createCanvas(1400,700);
  
  bgsprite=createSprite(1,2)
  bgsprite.velocityX=5
  bgsprite.visible=false

  if(frameCount%60===0){
  dangerguy()
  }

  dangerguy2=createSprite(1000, 570, 50, 50);
  dangerguy2.addImage(dangerguy2img)
  dangerguy2.visible=false

  dangermouse=createSprite(420, 550, 50, 50)
  dangermouse.addImage(dangermouse1img)
  dangermouse.scale = 0.3
  
}

function draw() {
  background(bg1); 
  
  
if(keyDown(RIGHT_ARROW)){
 dangermouse.x=dangermouse.x+5 
 
 dangermouse.addImage(dangermouse2img)
 dangermouse.visible = true
}

if(keyDown(LEFT_ARROW)){
 dangermouse.x=dangermouse.x-3
 
 dangermouse.addImage(dangermouse1img)
 
}




  drawSprites();
}

function dangerguy() {
  dangerguy1=createSprite(1100, 570, 50, 50);
  dangerguy1.addImage(dangerguy1img)
 dangerguy1.velocityX=-1
 dangerguy1.velocityY=-1

 if(dangerguy1.y<=40){
  dangerguy1.velocityX=-1
  dangerguy1.velocityY=-1
}
}