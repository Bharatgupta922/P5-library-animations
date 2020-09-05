/// <reference path="./p5.global-mode.d.ts" />


function setup() {
    createCanvas(900, 900);
    background(250, 250, 100);
}
function draw() {
    noStroke();
    fill(150, 0, 200, 255);
    ellipse(mouseX, mouseY, 25, 25);
}
function mousePressed() {
    background(250, 250, 100);
}