class Stadium {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.baseW = 50;
        this.baseH = 160;
        this.score = 0;

        this.draw = function() {
            //home base area
            ctx.fillStyle = 'rgb(75, 255, 100)'; //home base area color
            ctx.fillRect(0, 0, this.width, this.baseH);

            //first and third base area
            ctx.fillStyle = 'rgb(50, 220, 50)';  //first and third area color
            ctx.fillRect(0, 160, this.width, this.baseH);

            //second base area
            ctx.fillStyle = 'rgb(150, 220, 150)';  //second area color
            ctx.fillRect(0, 320, this.width, this.baseH);

            //score area
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, this.width, 50);
        }

        this.home = function () {
            //build home base

            ctx.fillStyle = 'rgb(220,150,175)';  //base color
            ctx.beginPath();
            ctx.moveTo(240,50);
            ctx.lineTo(400,50);
            ctx.lineTo(400, 100);
            ctx.lineTo(320, 150);
            ctx.lineTo(240,100);
            ctx.closePath();
            ctx.fill();
        }

        this.base = function (which) {
            //build other bases
            ctx.fillStyle = 'rgb(220,150,175)';  //base color

            if (which === 1) {
                //x is 0
                // y is half window
                ctx.fillRect(0, 160, this.baseW, this.baseH);
            }
            if (which === 2) {
                //x is half window
                //y is window

                ctx.fillRect(240, this.height - this.baseW, this.baseH, this.baseW);
            }
            if (which === 3) {
                //x is window
                //y is half window
                ctx.fillRect(this.width - this.baseW, 160, this.baseW, this.baseH);
            }
        }

        this.click = function() {
            let pointX = Math.floor(Math.random() * this.width - 50);
            let pointY = Math.floor(Math.random() * (this.height - 50)) + 50;

            ctx.fillStyle = 'white';
            ctx.fillRect(pointX, pointY, 10, 10);
            ctx.fillStyle = 'black';
            ctx.strokeRect(pointX, pointY, 10, 10);

            //draw ball at point
            //do scoring
            return pointY;
        }

        this.scoring = function (y) {
            if (y < 150){
                this.score -= 100;
              } else if (y > 150 && y < 400) {
                this.score += 50;
              } else if (y > 400 && y <= 700) {
                this.score += 100
              }
              ctx.fillStyle = 'white';
              ctx.fillText("User Score: " + this.score,10,30);
        }


        this.redraw = function () {
            this.draw();
            this.home();
            this.base(1);
            this.base(2);
            this.base(3);
        }
    }
}