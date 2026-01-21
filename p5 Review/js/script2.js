"use strict";
//establish variables
const width = 400;
const height = 400;
const Ewidth = 100;
const Eheight = 100;
const Ex = 100;
const Ey = 100;
const colorR = 200;
const colorG = 100;
const colorB = 120;
//canvas? better believe it!
function setup() {
    console.log("go")
    createCanvas(width, height);
}
// draw ellipses using drawellipse function
function draw() {
    drawEllipse(Ex, Ey, Ewidth, Eheight, colorR, colorG, colorB);
    drawEllipse(Ex * 2, Ey * 2, Ewidth * 2, Ewidth * 2, colorR + 50, colorG + 50, colorB - 100);
    drawEllipse(Ex * 3, Ey * 3, Eheight * 3, Ewidth * 3, colorR - 20, colorG + 100, colorB + 50);
}
//draws ellipses using ellipse and fill function, pushing and popping to allow for different params (colors here) each time
function drawEllipse(x, y, w, h, r, g, b) {
    push();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();

}