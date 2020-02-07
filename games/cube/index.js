var cube;
var riv = [];
const SPACE_BAR = 32;
const LEFT = 37;
const RIGHT = 39;
var cnv;
function setup() {
	cube = new Cube(300, height/2);
	cnv = createCanvas(640,480);
	centerCanvas();
	riv.push(new Cube(600, 0));
}

function draw() {
	background(0);
	cube.update();
	cube.show();
	//var thing = new Cube(random(50), random(50));

	//riv.push(thing);

	for (var i = riv.length-1; i >= 0; i--) {
		riv[i].update();
		riv[i].show();
	}
}

function keyPressed() {
	if (keyCode == SPACE_BAR) {
		cube.up();
	}
	if (keyCode == LEFT) {
		cube.left();
	}
	if (keyCode == RIGHT) {
		cube.right();
	}

	if (key === 'R') {
		cube.changeColor(255, 0, 0);
	} else if (key === 'G') {
		cube.changeColor(0, 255, 0);
	} else if (key === 'B') {
		cube.changeColor(0, 0, 255);
	}
}