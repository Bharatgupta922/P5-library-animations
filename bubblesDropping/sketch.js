/// <reference path="./p5.global-mode.d.ts" />


var bubbles = [];

function setup() {
    createCanvas(1536, 727);
    for(var i = 0 ; i < 100; ++i){
        var x = random(width);
        var y = random(height);
        bubbles.push(new Bubbles(x,y));
    }
}
function draw() {
    background(0);
    for (var i = 0; i < bubbles.length; ++i) {
        bubbles[i].display();
        bubbles[i].move();
    }
    // ball.bounce();
    // if (bubbles.length > 50) {
    //     bubbles.splice(0, 1);
    // }
}

function mousePressed() {
    for (var i = 0; i < bubbles.length; ++i) {
        bubbles[i].clicked();
    }
}
    function keyPressed() {
        bubbles.splice(0, 1);
    }