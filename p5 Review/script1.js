"use strict";
let width = 400;
let height = 400;
let Ewidth = 100;
let Eheight = 100;
let Ex = 100;
let Ey = 100;
let colorR = 200;
let colorG = 100;
let colorB = 120;

function setup() {
    console.log("go")
    createCanvas(width, height);
}

function draw() {
    drawEllipse(Ex, Ey, Ewidth, Eheight, colorR, colorG, colorB);
    drawEllipse(Ex * 2, Ey * 2, Ewidth * 2, Ewidth * 2, colorR + 50, colorG + 50, colorB - 100);
    drawEllipse(Ex * 3, Ey * 3, Eheight * 3, Ewidth * 3, colorR - 20, colorG + 100, colorB + 50);
}

function drawEllipse(x,y,w,h,r,g,b){
    push();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();

}