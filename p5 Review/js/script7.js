"use strict";
//as if the variables couldnt get any more snooty. friggin math functions? jesus
const width = 500;
const height = 500;
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
// scale param determines the grid size, always fitting in width and height of canvas (assuming square)
const scale = 12;
let isSquare = false;
//you're completely off your rocker man. what's even going on. ellipseMode? what the hell is that? at least we have canvas to give us solace.
function setup() {
    console.log("go");
    createCanvas(width, height);
    ellipseMode(CORNER);
    //okay actually the ellipsemode is important it sets the circle's creation point to its corner, making it work the same as squares. makes everything a lot easier.
}
// draws background then uses nested for loop to draw grid. fill color is updated every frame for changes
function draw() {
    background('black');
    push()
    fill(r, g, b);
    for (let i = 0; i <= scale; i++) {
        if (isSquare == false) {
            circle(i * (width / scale), (height / scale), width / scale);
        }
        else {
            square(i * (width / scale), (height / scale), width / scale);
        }
        for (let n = 0; n <= scale; n++) {
            if (isSquare == false) {
                circle(i * (width / scale), n * (height / scale), width / scale);
            }
            else {
                square(i * (width / scale), n * (height / scale), width / scale);
            }
        }
    }
    pop();
}
//if the spacebar is pressed you dont even wanna KNOW what happens
function keyTyped() {
    if (keyCode === 32) {
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        //(it makes a new random color.. not.. uhh. sorry to dissapoint. not THAT crazy i guess.)
    }
}
// heyyy this fella got an upgrade. got a bit more going on with the switching on AND off, but nothing super involved. not too shabby, not too shabby
function mouseClicked() {
    if (isSquare == false) {
        isSquare = true;
    }
    else if (isSquare == true) {
        isSquare = false;
    }
}