"use strict";
// instantiate variables
const height = 600;
const unit = width / 20;
const displayText = {
    content: "text",
    color: "white",
    textSize: 28,
    x: width / 2,
    y: width / 2,
}

//canvas and... shiiiit background too? no way!
function setup() {
    console.log("go");
    createCanvas(width, height);
    background('black');
}
// displays text from objects as well as using for loops to display numbers in sequence (using the same text paramaters since there's no push or pop)
function draw() {
    fill(displayText.color);
    textSize(displayText.textSize);
    text(displayText.content, displayText.x, displayText.y);
    for (let i = 0; i < 10; i++) {
        text(i, unit * i, unit);
    }
    for (let i = 15; i > 0; i--) {
        text(i, 0, height - unit * (i + 3));
    }

}
