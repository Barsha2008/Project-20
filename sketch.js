var cat1,cat2,cat3,cat4
var garden
var mouse1,mouse2,mouse3,mouse4
function preload() {
    //load the images here
    garden=loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat4=loadAnimation("images/cat4.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse4=loadAnimation("images/mouse4.png")

    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
mouse=createSprite(200,600)
}

function draw() {

    background("garden");
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x <(cat.width - mouse.width)/2){



}
    drawSprites();
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW(){
        mouse.addAnimation("mouseTeasing" , mouseing2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDely=25
    }

if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseing2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDely=25
}
  //For moving and changing animation write code here


}
