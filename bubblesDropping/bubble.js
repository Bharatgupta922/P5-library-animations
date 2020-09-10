
function Bubbles(x, y) {

    this.x = x;
    this.y = y;
    this.dia = 48;
    this.lifespan = 255;
    this.col = color(255);
    this.changeColor = function () {
        this.col = color(random(0, 255), random(0, 255), random(0, 255) , this.lifespan--);
    }
    this.intersect = function (other) {
        var d = dist(this.x, this.y, other.x, other.y);
        if (d < this.dia) {
            return true;
        }
        else {
            return false;
        }
    }
    this.display = function () {
        noStroke();
        // stroke(255);
        strokeWeight(2);
        fill(this.col, this.lifespan);
        // noFill();
        ellipse(this.x, this.y, this.dia, this.dia);
    }

    this.isFinished = function () {
        return this.lifespan < 0;
    }

    this.update = function () {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
        --this.lifespan;
    }

}