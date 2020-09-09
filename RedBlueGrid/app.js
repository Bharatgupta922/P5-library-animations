/// <reference path="./p5.global-mode.d.ts" />

var quadri = {
    x: 0,
    y: 100,
    diameter: 18
};
var r = 0, b = 0;
var col = 0;
function setup() {
    createCanvas(900, 900);
}
function draw() {
    // noStroke();
    stroke(255, 255, 255);
    r = map(mouseX, 0, 900, 0, 255);
    b = map(mouseY, 0, 900, 255, 0);
    background(r, 0, b);
    fill(255, 255, 255, 0);
    rect(mouseX, mouseY, quadri.diameter, quadri.diameter);
}
function mousePressed() {
    background(250, 250, 100);
}
