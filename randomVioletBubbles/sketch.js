/// <reference path="./p5.global-mode.d.ts" />

var spot = {
    x: 100,
    y: 50,
    size: 14,
};
var col = {
    r: 255,
    g: 0,
    b: 0
};

function setup() {
    createCanvas(1525, 725);
    background(0);
}
function draw() {
    noStroke();
    spot.x = random(0, width);
    spot.y = random(0, height);
    col.r = random(100, 255);
    col.g = 0;
    col.b = random(100, 190);
    spot.size = random(0, 20);

    fill(col.r, col.g, col.b, 180);
    ellipse(spot.x, spot.y, spot.size, spot.size);
}