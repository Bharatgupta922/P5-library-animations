/// <reference path="./p5.global-mode.d.ts" />

var ball = {
    x: 300,
    y: 200,
    xspeed: 10,
    yspeed: -10,
    display: function () {
        noStroke();
        // stroke(255);
        strokeWeight(2);
        fill(random(0, 255), 0, random(0, 255));
        ellipse(ball.x, ball.y, 24, 24);
    },
    move: function () {
        ball.x += ball.xspeed;
        ball.y += ball.yspeed;
    },
    bounce: function () {
        if (ball.x > width || ball.x < 0) {
            ball.xspeed *= -1;
        }
        if (ball.y > height || ball.y < 0) {
            ball.yspeed *= -1;
        }
    }
};

function setup() {
    createCanvas(1525, 725);
}
function draw() {
    background(0);

    ball.display();
    ball.move();
    ball.bounce();
}