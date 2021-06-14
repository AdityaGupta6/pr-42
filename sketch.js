var spaceImg,spacecraftImg,issImg;
var iss,spacecraft;
var hasDocked= false
function preload() {
  spaceImg=loadImage("spacebg.jpg");
  issImg=loadImage("iss.png")
spacecraftImg1= loadAnimation("spacecraft1.png");
spacecraftImg2= loadAnimation("spacecraft2.png");
spacecraftImg3= loadAnimation("spacecraft3.png");
spacecraftImg4= loadAnimation("spacecraft4.png");
}

function setup() {
  createCanvas(1400,700);
 
  iss=createSprite(750,350,50,50);
  iss.addImage(issImg);
  
  spacecraft=createSprite(717,490,50,50);
  spacecraft.addAnimation("spacecraft1",spacecraftImg1);
  spacecraft.addAnimation("spacecraft2",spacecraftImg2);
  spacecraft.addAnimation("spacecraft3",spacecraftImg3);
  spacecraft.addAnimation("spacecraft4",spacecraftImg4);
  spacecraft.scale=0.15
}

function draw() {
  background(spaceImg);  
  if (!hasDocked) {
     spacecraft.x = Math.round(random(675,680));
    
    if (keyCode===37) {
    spacecraft.changeAnimation("spacecraft3",spacecraftImg3)
    spacecraft.x -=5;
  }
  if (keyCode===39) {
    spacecraft.changeAnimation("spacecraft4",spacecraftImg4)
    spacecraft.x +=5;
  }
  if (keyCode===38) {
    
    spacecraft.y -=2;8
  }
  if (keyCode===40) {
    spacecraft.changeAnimation("spacecraft2",spacecraftImg2)
  }
 if (spacecraft.x>=680&&spacecraft.y<=690 &&spacecraft.y<=435&&spacecraft.y>=400) {
   hasDocked=true
 }

  }
if(hasDocked){
  textSize(45)
  fill ("grey")
text ("Docking successfully",550,600)

  
}
  drawSprites();
}