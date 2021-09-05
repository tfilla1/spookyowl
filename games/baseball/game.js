let stadium = new Stadium(cvs.width, cvs.height);
let y = 0;
function setup () {

    stadium.draw();

    stadium.home();
    stadium.base(1);
    stadium.base(2);
    stadium.base(3);
}

cvs.addEventListener('click', click);

function click() {
    stadium.redraw();
    y = stadium.click();
    stadium.scoring(y);

}

setup();