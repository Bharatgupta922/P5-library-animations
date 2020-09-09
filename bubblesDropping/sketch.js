/// <reference path="./p5.global-mode.d.ts" />


var bubbles = [];

function setup() {
    createCanvas(1525, 725);

    bubbles[0] = {
        x: 300,
        y: 200,
        display: function () {
            // noStroke();
            stroke(255);
            strokeWeight(2);
            fill(random(0, 255), 0, random(0, 255));
            ellipse(this.x, this.y, 24, 24);
        },
        move: function () {
            this.x += random(-1,1);
            this.y += random(-1,1);
        }
        // bounce: function () {
        //     if (this.x > width || this.x < 0) {
        //         this.xspeed *= -1;
        //     }
        //     if (this.y > height || this.y < 0) {
        //         this.yspeed *= -1;
        //     }
        // }
    };
    

}
function draw() {
    background(0);

    ball.display();
    ball.move();
    // ball.bounce();
}