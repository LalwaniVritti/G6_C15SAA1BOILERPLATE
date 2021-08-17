var piggyBank,piggyBankImg;
var coin,coinImg,coin2Img;
var count = 0;

// Define Gamestate and constants

function preload(){
  piggyBankImg=loadImage("pbank.png");
  // load images

}
function setup() {
  createCanvas(400, 400);

  coin = createSprite(200,100);
  coin.addImage(coinImg);
  coin.scale=0.5;
  
  // create piggy bank sprite, add image and scale it

  // create chance sprite, add image, 
  // make its visible property as false and scale it

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
