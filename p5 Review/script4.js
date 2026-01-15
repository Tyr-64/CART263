"use strict";
const width = 400;
const height = 400;
let rectColor = {
    oneR : 20,
    oneG : 50,
    oneB : 150,
    oneW : 1,
    twoR : 10,
    twoG : 30,
    twoB : 130,
    twoW : 1,
    threeR : 40,
    threeG : 40,
    threeB : 240,
    thWee : 1,
}

function setup() {
    console.log("go")
    createCanvas(width, height);
}

function draw() {
    drawRectangle(width * 0, 0, width / 3, height, rectColor.oneR * rectColor.oneW,rectColor.oneG * rectColor.oneW,rectColor.oneB * rectColor.oneW);
    drawRectangle(width * .33, 0, width / 3, height, rectColor.twoR * rectColor.twoW, rectColor.twoG * rectColor.twoW, rectColor.twoB * rectColor.twoW);
    drawRectangle(width * .66, 0, width / 3, height, rectColor.threeR * rectColor.thWee, rectColor.threeG * rectColor.thWee, rectColor.threeB * rectColor.thWee);
    if(mouseX < width * .33 && mouseY < height){
        rectColor.oneW = 100;
        rectColor.twoW = 1;
        rectColor.thWee = 1;
    }
    else if(mouseX < width * .66  && mouseY < height){
        rectColor.oneW = 1;
        rectColor.twoW = 100;
        rectColor.thWee = 1;
    }
    else if(mouseX < width  && mouseY < height){
        rectColor.oneW = 1;
        rectColor.twoW = 1;
        rectColor.thWee = 100;
    }
    else{
        rectColor.oneW = 1;
        rectColor.twoW = 1;
        rectColor.thWee = 1;
    }
}

function drawRectangle(x,y,w,h,r,g,b){
    push();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}
