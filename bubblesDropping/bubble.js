
function Bubbles(x, y) {
    this.x = x;
    this.y = y;
    this.dia = 48;
    this.col = color(255, 100);

    this.display = function () {
        // noStroke();
        stroke(255);
        strokeWeight(2);
        fill(this.col);
        // noFill();
        ellipse(this.x, this.y, this.dia, this.dia);
    }
    this.clicked = function () {
        var d = dist(mouseX, mouseY, this.x, this.y);
        if (d < (this.dia / 2)) {
            this.col = color(255, 0, 180);
        }

    }
    this.move = function () {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
    }
}