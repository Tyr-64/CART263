"use strict";
const width = 400;
const height = 400;
const Ewidth = 100;
const Eheight = 100;
const Ex = 100;
const Ey = 100;
const colorR = 200;
const colorG = 100;
const colorB = 120;

function setup() {
    console.log("go")
    createCanvas(width, height);
}

function draw() {
    push();
    fill(colorR, colorG, colorB);
    ellipse(Ex, Ey, Ewidth, Eheight);
    pop();
    push();
    fill(colorR + 50, colorG + 50, colorB - 100);
    ellipse(Ex * 2, Ey * 2, Ewidth * 2, Eheight * 2);
    pop();
    push();
    fill(colorR - 20, colorG + 100, colorB + 50);
    ellipse(Ex * 3, Ey * 3, Ewidth * 3, Eheight * 3);
    pop();
}