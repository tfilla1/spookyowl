var cnv;
var cube;
const SPACE_BAR = 32;
let x = 200;
let y = 300;
//let blockStartX = 610;
let upBlocks = [];
let downBlocks = [];
//let b = new Block();
function setup() {
	cnv = createCanvas(640, 480);
	cnv.center();
	cube = new Cube(20,20);
	cube.changeColor(255,0,0);
	//blocks = Array(100).fill().map(b => new Block());
}

function draw() {
	//clear();
	background('#61ec9b');
	// rect(x,y,width,height);

	//user 
	for (let i = 0; i < 2; i++) {
		let b = new Block('up');
		upBlocks.push(b);
	}
	for (let i = 0; i < 2; i++) {
		let b = new Block('down');
		downBlocks.push(b);
	}
	for (let block of upBlocks) {
		block.update();
		block.show();
	}

	for (let block of downBlocks) {
		block.update();
		block.show();
	}

	upBlocks = upBlocks.filter(b => !b.finished());
	downBlocks = downBlocks.filter(b => !b.finished());


	cube.update();
	cube.show();


	//rect(blockStartX -= 10, 0, 50, 50);

	//let b = new Block(blockStartX, 0, 150);//random(50, 150));
	// blocks.push(b);
	// blocks.forEach()
	//b.update();
	//b.show();
	// blocks.push(b);
	// blocks[0].show();
	// blocks[0].update();
	// for (let i = blocks.length - 1; i >= 0; i--) {
	// 	blocks[i].update();
	// 	blocks[i].show();
	// 	// if (particles[i].finished()){
	// 	// 	//remove particle
	// 	// 	particles.splice(i, 1);
	// 	// }
	// }
}

function keyPressed() {
	if (keyCode === SPACE_BAR) {
		cube.up();
	}
}

//setup()
//draw()