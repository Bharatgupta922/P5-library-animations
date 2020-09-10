
function Bubbles(x, y) {

    this.x = x;
    this.y = y;
    this.dia = 48;
    this.lifespan = 255;

    this.display = function () {
        noStroke();
        // stroke(255);
        strokeWeight(2);
        fill(255 , this.lifespan);
        // noFill();
        ellipse(this.x, this.y, this.dia, this.dia);
    }

    this.isFinished = function(){
        return this.lifespan < 0;
    }

    this.update = function () {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
        --this.lifespan;
    }
    
}