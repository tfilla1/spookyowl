class Scene {
    constructor(x,y,h) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = 50;

        this.draw = function () {
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
}