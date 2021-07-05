var canvas;
var music;
var yellow;
var blue;
var pink;
var green;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    blue = createSprite(100,530,190,50);
    blue.shapeColor=rgb(0,0,225);
    yellow = createSprite(300,530,190,50);
    yellow.shapeColor=rgb(255,215,00);
    pink = createSprite(500,530,190,50);
    pink.shapeColor=rgb(255,20,147);
    green = createSprite(700,530,190,50);
    green.shapeColor=rgb(0,255,0);
    box=createSprite(400,250,50,50)
    box.shapeColor=rgb(255,255,255)
    box.velocityX=8;
    box.velocityY=8;
    
}
 
function draw() {
    background(rgb(255,160,100));
    
    if(box.isTouching(yellow)){
    box.shapeColor=rgb(255,215,00);
    box.velocityX=0;
    box.velocityY=0;
    music.stop();
    
    }
    if(box.isTouching(blue)){
    box.shapeColor=rgb(0,0,225);
    music.play();
    }
    if(box.isTouching(pink)){
    box.shapeColor=rgb(255,20,147);
    music.play();
    }
    if(box.isTouching(green)){
    box.shapeColor=rgb(0,255,0);
    music.play();
    }
    edges=createEdgeSprites();
    box.bounceOff(edges);
    box.bounceOff(yellow);
    box.bounceOff(green);
    box.bounceOff(pink);
    box.bounceOff(blue);
drawSprites();
    
}
