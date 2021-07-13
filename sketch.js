var player, playerImg, blueghost, blueghostImg,bg;
var redghost, reghostImg, yellowghost, yellowghostImg;
var edges;


function preload(){
bg = loadImage("spacebg.png")
blueghostImg = loadImage("blueghost.png")
playerImg = loadImage("pacman.png")
redghostImg = loadImage("redghost.png")
yellowghostImg = loadImage("yellowghost.png")
}

function setup() {
  createCanvas(1000,650);
  player = createSprite(455,150, 50, 50);
  player.addImage(playerImg)
  player.scale = 0.09
  blueghost = createSprite(300, 70, 50, 50);
  blueghost.addImage(blueghostImg)
  blueghost.scale = 0.027
  redghost = createSprite(700, 230, 50, 50);
  redghost.addImage(redghostImg)
  redghost.scale = 0.10
  yellowghost = createSprite(200, 550, 50, 50);
  yellowghost.addImage(yellowghostImg)
  yellowghost.scale = 0.10
  wall1 = createSprite(500,150,30,100)
  wall2 = createSprite(300,150,30,100)
  wall3 = createSprite(400,110,230,30)
  wall4 = createSprite(500,190,200,30)
  wall5 = createSprite(300,300,30,200)
  wall6 = createSprite(425,400,300,30)
  wall7 = createSprite(500,150,30,100)
  wall8 = createSprite(560,360,30,100)
  wall9 = createSprite(595,310,100,30)
  wall10 = createSprite(630,400,30,160) 
  wall11 = createSprite(495,490,300,30)
  wall12 = createSprite(640,190,270,30)
  wall13 = createSprite(760,390,30,370)
  wall14 = createSprite(675,590,200,30)
  wall15 = createSprite(465,590,620,30)  
  wall16 = createSprite(150,455,30,300)
  wall17 = createSprite(150,160,30,300) 
  wall18 = createSprite(400,27,500,30)
  wall19 = createSprite(470,27,670,30)
  wall20 = createSprite(800,62,30,100)
  wall21 = createSprite(820,110,70,30)
  wall22 = createSprite(850,295,30,400)
  wall23 = createSprite(815,500,100,30)
}

function draw() {
  background(bg);  

  edges = createEdgeSprites();
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-3
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+3
  }

  if(keyDown(UP_ARROW)){
    player.y = player.y-3
  }

  if(keyDown(DOWN_ARROW)){
    player.y = player.y+3
  }

  redghost.y = redghost.y +3
  redghost.x = redghost.x -2

  yellowghost.y = yellowghost.y -2.5
  yellowghost.x = yellowghost.x +1

  blueghost.x = blueghost.x +1.5
  blueghost.y = blueghost.y +1.5


  player.bounceOff(edges)
  redghost.bounceOff(edges)
  blueghost.bounceOff(edges)
  yellowghost.bounceOff(edges)

  redghost.bounce(yellowghost);
  redghost.bounce(blueghost);
  blueghost.bounceOff(yellowghost);
  

  player.collide(wall1)
  player.collide(wall2)
  player.collide(wall3)
  player.collide(wall4)
  player.collide(wall5)
  player.collide(wall6)
  player.collide(wall7)
  player.collide(wall8)
  player.collide(wall9)
  player.collide(wall10)
  player.collide(wall11)
  player.collide(wall12)
  player.collide(wall13)
  player.collide(wall14)
  player.collide(wall15)
  player.collide(wall16)
  player.collide(wall17)
  player.collide(wall18)
  player.collide(wall19)
  player.collide(wall20)
  player.collide(wall21)
  player.collide(wall22)
  player.collide(wall23)

  redghost.collide(wall1)
  redghost.collide(wall2)
  redghost.collide(wall3)
  redghost.collide(wall4)
  redghost.collide(wall5)
  redghost.collide(wall6)
  redghost.collide(wall7)
  redghost.collide(wall8)
  redghost.collide(wall9)
  redghost.collide(wall10)
  redghost.collide(wall11)
  redghost.collide(wall12)
  redghost.collide(wall13)
  redghost.collide(wall14)
  redghost.collide(wall15)
  redghost.collide(wall16)
  redghost.collide(wall17)
  redghost.collide(wall18)
  redghost.collide(wall19)
  redghost.collide(wall20)
  redghost.collide(wall21)
  redghost.collide(wall22)
  redghost.collide(wall23)

  blueghost.collide(wall1)
  blueghost.collide(wall2)
  blueghost.collide(wall3)
  blueghost.collide(wall4)
  blueghost.collide(wall5)
  blueghost.collide(wall6)
  blueghost.collide(wall7)
  blueghost.collide(wall8)
  blueghost.collide(wall9)
  blueghost.collide(wall10)
  blueghost.collide(wall11)
  blueghost.collide(wall12)
  blueghost.collide(wall13)
  blueghost.collide(wall14)
  blueghost.collide(wall15)
  blueghost.collide(wall16)
  blueghost.collide(wall17)
  blueghost.collide(wall18)
  blueghost.collide(wall19)
  blueghost.collide(wall20)
  blueghost.collide(wall21)
  blueghost.collide(wall22)
  blueghost.collide(wall23)

  yellowghost.collide(wall1)
  yellowghost.collide(wall2)
  yellowghost.collide(wall3)
  yellowghost.collide(wall4)
  yellowghost.collide(wall5)
  yellowghost.collide(wall6)
  yellowghost.collide(wall7)
  yellowghost.collide(wall8)
  yellowghost.collide(wall9)
  yellowghost.collide(wall10)
  yellowghost.collide(wall11)
  yellowghost.collide(wall12)
  yellowghost.collide(wall13)
  yellowghost.collide(wall14)
  yellowghost.collide(wall15)
  yellowghost.collide(wall16)
  yellowghost.collide(wall17)
  yellowghost.collide(wall18)
  yellowghost.collide(wall19)
  yellowghost.collide(wall20)
  yellowghost.collide(wall21)
  yellowghost.collide(wall22)
  yellowghost.collide(wall23)




  drawSprites();

}