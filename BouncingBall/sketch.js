/// <reference path="./p5.global-mode.d.ts" />

var ball = {
    x: 300,
    y: 200,
    xspeed: 10,
    yspeed: -10
};

function setup() {
    createCanvas(1525, 725);
}
function draw() {
    background(0);

    display();
    move();
    bounce();
}
function move() {
    ball.x += ball.xspeed;
    ball.y += ball.yspeed;
}
function bounce() {
    if (ball.x > width || ball.x < 0) {
        ball.xspeed *= -1;
    }
    if (ball.y > height || ball.y < 0) {
        ball.yspeed *= -1;
    }
}

function display() {
    noStroke();
    // stroke(255);
    strokeWeight(2);
    fill(random(0, 255), 0, random(0, 255));
    ellipse(ball.x, ball.y, 24, 24);
}