/// <reference path="./p5.global-mode.d.ts" />


var bubbles = [];

function setup() {
    createCanvas(1536, 727);
}
function draw() {
    background(0);
    for (var i = bubbles.length -1 ; i >=0 ; --i) {
        bubbles[i].update();
        bubbles[i].display();
        for(var j = 0 ; j < bubbles.length - 1 ; ++j){
            if(i!=j && bubbles[i].intersect(bubbles[j])){
                bubbles[i].changeColor();
                bubbles[j].changeColor();
            }
        }
        if(bubbles[i].isFinished()){
        bubbles.splice(i,1);
        }

    }
    // ball.bounce();
    // if (bubbles.length > 50) {
    //     bubbles.splice(0, 1);
    // }
}

function mousePressed() {
    var b = new Bubbles(mouseX,mouseY);
    bubbles.push(b);
}
    function keyPressed() {
        bubbles.splice(0, 1);
    }