/// <reference path="./p5.global-mode.d.ts" />


var bubbles = [];

function setup() {
    createCanvas(1525, 725);
for(var i = 0 ; i <40 ; ++i)
    bubbles[i] = new Bubbles();
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


function Bubbles(){
this.x = random(0,width);
this.y = random(0,height);

this.display = function(){
    noStroke();
    // stroke(255);
    strokeWeight(2);
    fill(random(0,255),0, random(0,255));
    // noFill();
    ellipse(this.x, this.y, 24,24);
}
this.move = function(){
    this.x += random(-1,1);
    this.y += random(-1,1);
}
}