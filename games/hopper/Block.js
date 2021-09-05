class Block {
	constructor(type) {
		this.x = random(0, 600);//600;
		this.y = (type == 'up' ? 0 : 500);
		this.vx = -.5;
		this.width = 50;
		this.spacer = 20;
		this.height = (type == 'up' ? random(50, 200) : -random(50,200));
		this.alpha = 255;
	}

	show() {
		noStroke();
		fill(255, this.alpha);//fill(random(255), random(255), random(255));
		rect(this.x, this.y, this.width, this.height);
	}

	finished() {
		return this.alpha < 0;
	}
	update(x) {
		this.x += this.vx;
		this.alpha -= 10;
	}
}