class Blop {
    constructor(x, w, h, c) {
        this.x = x;
        this.w = w;
        this.h = h;
        this.c = c;

        this.velocity = 5;

        // var rb = Math.floor(Math.random() * 200) + 100;

        // var colors;
        // for ( var i = 0; i <= 3; i++ ) {
        //     colors.push('rgb(' + rb + ',0,' + rb + ')');
        //     rb = Math.floor(Math.random() * 200) + 100;
        // }


        this.draw = function() {
            //rgb range for pinks and purple
            //red and blue are same no green
            

            ctx.fillStyle = c;  //'#ec61b2';//'rgb('+ rb + ',0,' + rb + ')'; //'#ec61b2'; //eventually random colors along a spectrum
            ctx.fillRect(this.x, 0, this.w, this.h);
            ctx.fillRect(this.x, cvs.height - this.h, this.w, this.h);
            //console.log(rb);

        }

        this.update = function(c) {
            var height;
            if (this.x < -50){
                this.x = cvs.width;
                // height = Math.floor(Math.random() * 200) + 50; //math
                height = Math.floor(Math.random() * 250) + 50; 
                while (height > 200) {
                    height = Math.floor(Math.random() * 200) + 50;
                }  
                this.h = height;
            } else {
                this.x -= this.velocity;
            }
            this.c = c;

        }

        this.timer = function() {
            //set a timer for 30 seconds
            //once completed, update map to different color and redraw rectangles

        }
    }
}