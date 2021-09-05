
var m = new Melo(50,50);//cvs.height - 150);
var s = new Scene(300,cvs.height-75, 75);
var b = new Ball(0,0, 0);
var p = new Pity(canvas.width - 50, 100, 5);
var bc, pc;
document.addEventListener('keydown', function(e) {
    m.move(e);
    if (e.code === 'KeyR') {
        //reset
        p.reset();
    }
})
function setup() {
    ctx.fillStyle = 'white';
    ctx.fillText('test', 50, 50);
}

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, cvs.width, cvs.height);

    m.draw();
    m.update();
    bc = b.draw();
    pc = p.draw();
    s.draw();
    // s.update(m);

    //something to test hitting pity with a ball
    // b.y > p.y && b.y < p.y + p.h


    if (bc.x === pc.x && (bc.y > pc.y && bc.y < pc.y + pc.s )) {
        console.log('yes');
        p.setX(bc.x);
    }




    requestAnimationFrame(draw);
}
setup();
draw();
