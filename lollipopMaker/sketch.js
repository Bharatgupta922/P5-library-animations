/// <reference path="./p5.global-mode.d.ts" />

function setup() {
    createCanvas(1525, 725);


}
function draw() {

    background(50);
    lollipop(100, 100, 50);
    lollipop(200, 200, 100);
    lollipop(500, 150, 180);
    lollipop(700, 250, 250);
    // console.log(ellipse(100,200,30));        
}
function lollipop(x, y, diameter) {
    fill(0, 200, 255);
    rect(x - 10, y, 20, 150);
    fill(255, 0, 200);
    ellipse(x, y, diameter, diameter);
}