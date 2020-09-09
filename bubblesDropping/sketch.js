/// <reference path="./p5.global-mode.d.ts" />


var bubbles = [];

function setup() {
    createCanvas(1525, 725);
for(var i = 0 ; i <40 ; ++i)
    bubbles[i] = {
        x: random(0,width),
        y: random(0,height),
        display: function () {
            noStroke();
            // stroke(255);
            strokeWeight(2);
            fill(random(0,255),0, random(0,255));
            // noFill();
            ellipse(this.x, this.y, 24,24);
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
print(bubbles);

}
function draw() {
    background(0);
for(var i = 0 ; i < bubbles.length ; ++i){
    bubbles[i].display();
    bubbles[i].move();
}
    // ball.bounce();
}