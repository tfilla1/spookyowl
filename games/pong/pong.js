/*
pong
 - winner
 - ball
 - canvas
 - context
paddle
player
*/

class Ball {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = x;
		this.width = w;
		this.height = h;
		
		this.xSpeed = 10;
		this.ySpeed = 4;
		
	}
	resetBall() {
		this.x = 20;
		this.y = 20;
		this.xSpeed = 10;
		this.ySpeed = 4;
	}
	drawBall() {
		pong.gfx.fillStyle = '#f0a';
		pong.gfx.fillRect(this.x, this.y, this.width, this.height);
	}
	updateLocation() {
		this.x += this.xSpeed;
		this.y -= this.ySpeed;
		
		this.drawBall();
		return this.checkForWin();
	}
	ballWithin(bounds) {
		if (this.y > bounds.min && this.y <= bounds.max) {
			return true;
		}
	}
	checkForWin() {
		//console.log('checking location');
		
		//todo: scoring condition
		if (this.x < 0 || this.x > pong.width) {
			//this.x < 0 >> left side
			//this.x > pong.width >> right side
			
			//did hit paddle?
			if (
				this.ballWithin(pong.players[0].paddle.getBounds()) ||
				this.ballWithin(pong.players[1].paddle.getBounds())
			) {
				console.log('within paddle bounds, ball bounce back')
				this.xSpeed *= -1;
			} else {
				//todo: get computer movement working, then move resetBall and remove the xspeed thing
				if (this.x < 0) {
					//player 2 point
					pong.players[1].goal();
					console.log('player 2 point ', pong.players[1].getScore());
					this.resetBall();
				} else {
					//player 1 point
					pong.players[0].goal();
					this.resetBall();
					//this.xSpeed *= -1;
					console.log('player 1 point ', pong.players[0].getScore());
				}
			}
			
			return true;
		}
		
		if (this.y < 0 || this.y > pong.height) {
			//top || bottom >> bounce
			this.ySpeed *= -1;
		}
		return false;
	}
}

class Pong {
	constructor(canvas) {
		this.canvas = canvas;
		this.gfx = canvas.getContext('2d');
		this.ball = new Ball(20, 20, 20, 20);
		
		this.players = [new Player('me',new Paddle(0, this.canvas.height/2, 15, 100, 'me')), 
						new Player('not', new Paddle(this.canvas.width - 15, this.canvas.height/2, 15, 100, 'not'))];
		
		
		this.width = 600;
		this.height = 600;
		
	}
	getBall() {
		return this.ball;
	}
	checkBallBounds() {
		//if outside of canvas > left || right > hitPaddle? > score || !score
		
	}
	setup() {
		this.gfx.fillStyle = '#000';
		this.gfx.fillRect(0,0, this.width, this.height);
		
		this.ball.drawBall();
		
		this.players.forEach((player) => {
			player.paddle.drawPaddle();
			if (player.paddle.which === 'me') {
				player.paddle.addMouseability();
			}
		})
		
		this.draw();
	}
	draw() {
		pong.gfx.fillStyle = '#000';
		pong.gfx.fillRect(0,0, pong.width, pong.height);
		
		//ball.updateLocation >> ball.checkLocation [checks win condition]
		var checkForWin = pong.ball.updateLocation();
		
		if (checkForWin) {
			console.log('checking for win');
			//ball position
			//which side
		}
		
		pong.players.forEach((player) => {
			player.paddle.drawPaddle();
		})
		
		pong.gfx.fillStyle = '#0af';
		pong.gfx.fillText(pong.players[0].getScore(),100,100);
		pong.gfx.fillText(pong.players[1].getScore(),canvas.width - 100,100);
		
		requestAnimationFrame(pong.draw);
	}
}

class Paddle {
	constructor(x, y, w, h, which) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.which = which;
		this.npcSpeed = 4;
		
		
		this.bounds = {
			x: this.width,
			min: this.y,
			max: this.y + (this.height/2)
		}
	}
	getBounds() {
		return this.bounds;
	}
	drawPaddle() {
		//todo: eventually user can choose their own color
		pong.gfx.fillStyle = '#0af';
		pong.gfx.fillRect(this.x, this.y, this.width, this.height);
		
		if (this.which === 'not') {
			this.bounds = {
				x: this.width,
				min: this.y,
				max: this.y + (this.height)
			}
			this.hitBall(pong.getBall());
			let paddle2YCenter = this.y + (this.height/2);
			  if (paddle2YCenter < pong.ball.y - 42){
				this.y += 6;
			  }else if(paddle2YCenter > pong.ball.y + 42){
				this.y -= 6;
			  }
			//this.y += this.npcSpeed;
		// 	if ((this.y < 0 || this.y > (pong.canvas.height - this.height)) 
		// ) {
		// 		this.npcSpeed *= -1;
		// 	} else {
		// 		
		// 	}
			
		}
	}
	checkLocation() {
		if (this.y > pong.canvas.height) {
			this.y = pong.canvas.height;
		}
		if (this.y < 0) {
			this.y = 0;
		}
	}
	addMouseability() {
		pong.canvas.addEventListener('mousemove', (evt) => {
			if (this.which === 'me') {
				var mousePos = this.calculateMousePosition(evt);
				this.y = mousePos.y - (this.height/2);
				this.bounds = {
					x: this.width,
					min: this.y,
					max: this.y + (this.height)
				}
				this.hitBall(pong.getBall());
			}
			//console.log(evt)
		})
	}
	
	hitBall(ball) {
		//did the ball hit the paddle
		let paddleBounds = this.getBounds();
		if ((ball.x <= paddleBounds.x) || (ball.y > paddleBounds.min && ball.y < paddleBounds.max)) {
			console.log('hit');
			console.warn({paddleBounds: paddleBounds, ball: ball, paddle: this});
			ball.speedX *= -1;
		} else {
			//console.log(this.getBounds());
		}
		
	}
	calculateMousePosition(evt){
		  var rect = pong.canvas.getBoundingClientRect();
		  var root = document.documentElement;
		  var mouseX = evt.clientX - rect.left - root.scrollLeft;
		  var mouseY = evt.clientY - rect.top - root.scrollTop;
		  return {
			x:mouseX,
			y:mouseY
		  }
		}
		npcVibes() {
			
		}
}

class Player {
	constructor(name, paddle) {
		this.name = name;
		this.score = 0;
		
		this.paddle = paddle;
	}
	goal() {
		this.score += 1;
	}
	getScore() {
		return this.score;
	}
}

var canvas = document.getElementById('pong');
var pong = new Pong(canvas);

pong.setup();
//let ball = new Ball(20,20,20,20);
console.log(pong);
//requestAnimationFrame(game.draw);