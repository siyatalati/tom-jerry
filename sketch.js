var canvas,bg;
var together;
var cat,catimg1,catimg2;
var mouse,mouseimg1,mouseimg2;

function preload() {
    //load the images here
  bg=loadImage("images/garden.png");
  catimg1=loadAnimation("images/catimg1.png");
  catimg2=loadAnimation("images/catimg2.png","images/catimg3.png");
  catimg=loadAnimation("images/catimg4.png");
  mouseimg1=loadAnimation("images/mouseimg1.png");
  mouseimg2=loadAnimation("images/mouseimg2.png","images/mouseimg3.png");
  mouseimg3=loadAnimation("images/mouseimg4.png")


}

function setup(){
    createCanvas(1000,800);

    cat=createSprite(870,600);
    cat.addAnimation("catRunning",catImg1);
    cat.scale=0.2;

    mouse=createSprite(200,800);
    mouse.addAnimation("mouseStanding",mouseimg2);
    mouse.scale=0.15;


}

function draw() {

    background(255);

      if(cat.x-mouse.x<(cat.width-mouse.width)/2);

      cat.velocity=0;
      cat.addAnimation("catlastImage",catimg3);
      cat.x=300;
      cat.scale=0.2;
      cat.changeAnimation("catLastImage");
      mouse.addAnimation("mouseLastImage",mouseimg3);
      mouse.scale=0.15;
      mouse.changeAnimation("mouseLastImage");

    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
    cat.velocity=-5;
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseteasing",mouseimg2);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseTeasing");
}

}
