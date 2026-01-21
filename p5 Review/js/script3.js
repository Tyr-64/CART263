"use strict";
//a veritable variable column
const width = 400;
const height = 400;
let Rwidth = 20;
let Rheight = 20;
let oneX = 100;
let oneY = 100;
let twoX = 120;
let twoY = 120;
let threeX = 100;
let threeY = 100;
let colorR = 200;
let colorG = 100;
let colorB = 120;
let lastFrameX = 0;
let lastFrameY = 0;
let colorThreeR = 200;
let colorThreeG = 100;
let colorThreeB = 120;
//canvas? i barely know-as!
function setup() {
    console.log("go")
    createCanvas(width, height);
}
// draws background and all rectangles using function, checks for mouse movements and generates random color if true, moves and resets third rectangle when it hits edge
function draw() {
    background('black');
    drawRectangle(oneX, oneY, Rwidth, Rheight, colorR, colorG, colorB);
    drawRectangle(twoX, twoY, Rwidth, Rheight, colorR, colorG, colorB);
    drawRectangle(threeX, threeY, Rwidth, Rheight, colorThreeR, colorThreeG, colorThreeB);
    threeY += 4;
    if (threeY > width) {
        threeY = 0;
    }
    if (lastFrameX != mouseX || lastFrameY != mouseY) {
        colorThreeR = random(1, 255);
        colorThreeG = random(1, 255);
        colorThreeB = random(1, 255);
        console.log('hmm');
    }
    lastFrameX = mouseX;
    lastFrameY = mouseY;
}
// draws rectangles. tch. amateur stuff.
function drawRectangle(x, y, w, h, r, g, b) {
    push();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}
// moves box one if the mouse is clicked
function mouseClicked() {
    oneX += 10;
    oneY += 5;
}
// if the spacebar is pressed move box two
function keyTyped() {
    if (keyCode === 32) {
        twoX += 5;
        twoY += 10;
    }
}