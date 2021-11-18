var piggyBank,piggyBankImg;
var coin,coinImg,coin2Img;
var count = 0;

// Define Gamestate and constants

function preload(){
  // load images
  piggyBankImg=loadImage("pbank.png");
  coinImg=loadImage("coin.png");
  coin2Img = loadImage("coin2.png");
  restart = loadImage("goldcoin.png");

}
function setup() {
  createCanvas(400, 400);

 
  
  // create piggy bank sprite, add image and scale it

  // create chance sprite, add image, 
  // make its visible property as false and scale it
  
  piggyBank = createSprite(200,300,50,20);
  piggyBank.addImage(piggyBankImg)
  piggyBank.scale =0.5;

  chance=createSprite(330,100,40,40);
  chance.addImage(restart);
  chance.scale=0.1;
  chance.visible = false;

}


function draw() {
  background("lightblue");

    // start with checking game state as PLAY
  
    chance.visible =false;

    //if mouse is pressed over coin change coin image and give it a velocity
    if(condition){
     
      coin.scale=0.03;
      
      //increment count and go to END state 
    }
    //add game state END
    textSize(20);
    fill("black");
    // add text to display number of coins and message
    // display chance sprite to add one more coin
    
    // write if condition to check if mouse is pressed over chance, call reset function
  
 
  drawSprites();
  
}


function reset(){
  // resetting coin image and its position with velocity
  coin.addImage(coinImg);
  coin.scale=0.5;
  coin.x=200;
  coin.y=100;
  coin.velocityY = 0;

  // go to game state PLAY
  gameState=PLAY;
}
