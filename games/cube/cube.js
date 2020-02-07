class Cube {
    constructor(x, y) {
        this.x = x; //300;
        this.y = y; //height/2;
        this.gravity = 1;
        this.velocity = 0;
        this.R = 255;
        this.G = 255;
        this.B = 255;
        this.show = function () {
            fill(this.R, this.G, this.B);
            rect(this.x, this.y, 50, 50);
        };
        this.up = function () {
            this.velocity += -this.gravity * 10;
        };
        this.left = function () {
            this.x -= 10;
        };
        this.right = function () {
            this.x += 10;
        };
        this.changeColor = function (R, G, B) {
            this.R = R;
            this.G = G;
            this.B = B;
        };
        this.update = function () {
            this.velocity += this.gravity;
            this.y += this.velocity;
            if (this.y > 300) {
                this.y = 300;
                this.velocity = 0;
            }
            if (this.y < 0) {
                this.velocity = 0;
                this.y = 0;
            }
            if (this.x < 0) {
                this.x = 600;
                this.velocity = 0;
            }
            if (this.x >= width) {
                this.x = 0;
                this.velocity = 0;
            }
        };
    }
}
