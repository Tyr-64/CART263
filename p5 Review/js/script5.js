"use strict";
// whaaat whaaaaat its variables whaaat
const width = 600;
const height = 600;
let counter = 0;
let click = false;
let square = {
    one: {
        w: width / 10,
        h: height / 10,
        x: width / 10,
        y: height / 10,
        R: 250,
        G: 94,
        B: 3,
    },
    two: {
        w: width / 10,
        h: height / 10,
        x: (width / 10) * 3,
        y: width / 10,
        R: 158,
        G: 5,
        B: 5,
    }
}
const ellipse = {
    x: width / 2,
    y: height / 2,
    radius: width / 12,
    R: 255,
    G: 255,
    B: 255,
    alpha: 15,
}

// what else but canvas?
function setup() {
    console.log("go");
    createCanvas(width, height);


}
// draws background and uses function to draw squares, uses square interact function to handle user inputs and their effects, for loop displays contentric circles, resets click param at end of draw
function draw() {
    background('black');
    displaySquare(square.one.x, square.one.y, square.one.w, square.one.h, square.one.R, square.one.G, square.one.B);
    displaySquare(square.two.x, square.two.y, square.two.w, square.two.h, square.two.R, square.two.G, square.two.B);
    squareInteract();
    for (let i = 1; i <= counter; i++) {
        drawCircle(ellipse.x, ellipse.y, ellipse.radius * i, ellipse.alpha * i, ellipse.R, ellipse.G, ellipse.B);
    }
    click = false;

}
// just pluggin along making squares all day- barely enough time to do anything else!
function displaySquare(x, y, w, h, r, g, b) {
    push();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}
// returns value corresponding to what the mouse is over (including nothing)
function squareCollision() {
    if (mouseX > square.one.x && mouseX < (square.one.x * 2) && mouseY > square.one.y && mouseY < (square.one.y * 2)) {
        return 'leftBox';
    }
    else if (mouseX > square.two.x && mouseX < (square.two.x * 2) && mouseY > square.two.y && mouseY < (square.two.y * 2)) {
        return 'rightBox';
    }
    else {
        return false;
    }
}
// handles most user interactions like increasing and decreasing ring counts, as well as the hover color change behavior on the box buttons
function squareInteract() {
    if (squareCollision() === 'leftBox') {
        square.one.R = 252;
        square.one.G = 161;
        square.one.B = 3;
    }
    else if (squareCollision() === 'rightBox') {
        square.two.R = 255;
        square.two.G = 20;
        square.two.B = 0;
    }
    else if (squareCollision() === false) {
        square.one.R = 250;
        square.one.G = 94;
        square.one.B = 3;
        square.two.R = 158;
        square.two.G = 5;
        square.two.B = 5;
    }
    if (squareCollision() === 'leftBox' && click === true) {
        counter++;
    }
    else if (squareCollision() === 'rightBox' && click === true) {
        counter--;
    }
    if (counter > 10) {
        counter = 0;
    }
}
// draws the circles. discussing a strike with displaySquare. things are getting tense.
function drawCircle(x, y, radius, alpha, r, g, b) {
    push();
    stroke(r, g, b);
    fill(r, g, b, alpha);
    circle(x, y, radius);
    pop();
}
// wow what a simple life this function must live. probably pretty boring ngl.
function mouseClicked() {
    click = true;
}