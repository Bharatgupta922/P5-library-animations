/// <reference path="./p5.global-mode.d.ts" />

let x = 800;
let y = 400;
let extraCanvas;
function setup() {
    createCanvas(1525, 725);
    extraCanvas = createGraphics(1525, 725);
    extraCanvas.clear();
    background(0);
}
function draw() {
    background(0);

    x += random(-5, 5);
    y += random(-5, 5);

    if (mouseIsPressed) {
        extraCanvas.fill(255, 150);
        extraCanvas.noStroke();
        extraCanvas.ellipse(mouseX, mouseY, 60, 60);
    }
    image(extraCanvas, 0, 0);
    fill(255, 0, 0);
    stroke(255);
    rectMode(CENTER);
    rect(x, y, 30, 30);
}