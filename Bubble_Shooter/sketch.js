
var blueImg, blueBall, redImage, redBall, greenImg, greenBall, orangeImg, orangeBall;
var bgImg;
var blueGroup, redGroup, greenGroup, orangeGroup;

function preload(){
    blueImg= loadImage("blue_ball1.png");
redImage= loadImage("red_ball.png");
bgImg= loadImage("bg.png");
}

function setup(){
createCanvas(550,650);

blueGroup= new Group();
redGroup= new Group();
greenGroup= new Group();
orangeGroup= new Group();

}

function draw(){

    image(bgImg,0,0,width, height);
    drawSprites();
}

function createBlue(){
    blueBall= createSprite(200,200,30,30);
    blueBall.shapeColor= "blue" ;
    //blueBall.addImage(blueImg);  
    //blueBall.scale= 0.5;
    blueGroup.add(blueBall);
}

function createRed(){
    redBall= createSprite(200,100,30,30);
    redBall.shapeColor= "red";
    //red_ball.addImage(redImage);
    redGroup.add(redBall);

}

function createGreen(){
    greenBall= createSprite(150,150,30,30);
    greenBall.shapeColor= "green";
    greenGroup.add(greenBall);

}

function createOrange(){
    orangeBall= createSprite(200,50,30,30);
    orangeBall.shapeColor= "orange";
    orangeGroup.add(orangeBall);
    
}
