class Ball {
    constructor (x, y, r) {
        this.x = x;
        this.y = y;
        this.size = r;
        this.velocity = 30;

        this.draw = function() {
            ctx.fillStyle = '#0af'; //'#61ec9b';
            ctx.fillRect(this.x += this.velocity, this.y, this.size, this.size);

            return { x: this.x, y: this.y };
        }
    }
}