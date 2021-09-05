class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;

        this.velocity = 30;
        this.gravity = 1.5;
        this.draw = function() {
            ctx.fillStyle = '#61ec9b';
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }

        this.update = function() {
            if (this.y >= cvs.height - this.size) {
                this.y = cvs.height - this.size;
            } else if (this.y <= 0) {
                this.y = this.size;                
            }
            else {
                this.y += this.gravity;
            }

        }

        this.jump = function() {
            this.y -= this.velocity;
        }

        this.score = function(b) {
            //50 and 70 is x + width, so this is where player is
            //figure out blop
            //0 - b.height || 
            if ((b.x > 50 && b.x < 70)
                && ((this.y > cvs.height - b.h) 
                || (this.y < b.h))) {
                    score = 0;
            }
            score += .001;
            return score;

        }

       

    }
}