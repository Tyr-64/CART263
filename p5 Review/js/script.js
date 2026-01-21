"use strict";
const width = 600;
const height = 600;
let counter = 0;
let click;
let square = {
    one : {
        w: width/10,
        h: height/10,
        x: width/10,
        y: height/10,
        sR: 250,
        sG: 94,
        sB: 3,
    },
    two : {
        w: width/10,
        h:  height/10,
        x: (width/10)*3,
        y: (width/10)*3,
        sR: 250,
        sG: 5,
        sB: 5,
    }
}
let ellipse = {
    x: width/2,
    y: height/2,
    radius: width/12,
    eR: 255,
    eG: 255,
    eB: 255,
    alpha: 15,
}


function setup() {
    console.log("go");
    createCanvas(width, height);


}

function draw() {
    background('black');
    displaySquare(square.one.x,square.one.y,square.one.w,square.one.h,square.one.sR,square.one.sG,square.one.sB);
    //squareCollision();
    squareInteract();

    for(let i = 1; i <= counter; i++){
        drawCircle(ellipse.x,ellipse.y,ellipse.radius * i, ellipse.alpha * i, ellipse.eR,ellipse.eG,ellipse.eB);
    }
    click = false;

}

function displaySquare(x,y,w,h,r,g,b){
    push();
    fill(r,g,b);
    rect(x, y, w, h);
    pop();
}

function squareCollision() {
    if(mouseX > square.one.x && mouseX < (square.one.x*2) && mouseY > square.one.y && mouseY < (square.one.y*2)){
        return true;
    }
    else{
        return false;
    }
}

function squareInteract() {
    if (squareCollision() === true){
        square.one.sR = 252;
        square.one.sG = 161;
        square.one.sB = 3;
    }
    else if (squareCollision() === false){
        square.one.sR = 250;
        square.one.sG = 94;
        square.one.sB = 3;
    }
    if (squareCollision() === true && click === true) {
        counter++;
    }
    if(counter > 10){
        counter = 0;
    }
}

function drawCircle(x,y,radius,alpha,r,g,b){
    push();
    fill(r,g,b,alpha);
    circle(x,y,radius);
    pop();
}

function mouseClicked(){
    click = true;
}