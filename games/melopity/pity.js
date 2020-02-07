class Pity {
    constructor(x, y, v) {
        this.x = x;
        this.initX = x;
        this.y = y;
        this.size = 30;
        this.velocity = v;

        this.draw = function() {
            ctx.fillStyle = '#fa0'; //'#61ec9b';
            ctx.fillRect(this.x -= this.velocity, this.y, this.size, this.size);
            if (this.x <= 0) {
                this.x = this.initX;
            }
            return {x: this.x, y: this.y, s: this.size};
        }

        this.setX = function(newX) {
            this.x = newX;
            this.velocity = 0;
            console.log(this.x);
        }

        this.reset = function() {
            this.x = x;
            this.velocity = v;
        }
    }
}