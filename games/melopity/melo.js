class Melo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;

        this.velocity = 30;

        this.draw = function() {
            ctx.fillStyle = '#f0a'; //'#61ec9b';
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }

        this.shoot = function () {
            b = new Ball(this.x + this.size, this.y + (this.size / 2), 5);
        }

        this.update = function () {
            if (this.y >= cvs.height - this.size) {
                this.y = cvs.height - this.size;
            } 
            if (this.y <= 0) {
                this.y = 0;                
            }
            if (this.x <= 0) {
                this.x = 0;
            }
            if (this.x >= cvs.width) {
                this.x = cvs.width - this.size;
            }
        }

        this.move = function(e) {
            if (e.code === 'KeyW' || e.code === 'ArrowUp') {
                //up
                this.y -= this.velocity;
            }
            if (e.code === 'KeyS' || e.code === 'ArrowDown') {
                //down
                this.y += this.velocity;
            }
            if (e.code ==='KeyA' || e.code === 'ArrowLeft') {
                //left
                this.x -= this.velocity;

            }
            if (e.code === 'KeyD' || e.code === 'ArrowRight') {
                //right
                this.x += this.velocity;
            }
            if (e.code === 'KeyB') {
                this.shoot();
            }
        }
    }
}