/// <reference path="./p5.global-mode.d.ts" />

function setup() {
    createCanvas(1525, 725);
    background(255, 255, 51);
}
function draw() {
    noStroke();
    fill(238, 130, 238, 100);
    ellipse(mouseX, mouseY, 25, 25);
}
