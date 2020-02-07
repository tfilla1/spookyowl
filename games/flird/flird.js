var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');


//images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeTop = new Image();
var pipeBot = new Image();
bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeTop.src = "images/pipeTop.png";
pipeBot.src = "images/pipeBot.png";
var score = 0;
var pipe = [];
var startX = cvs.width, startY = Math.floor(Math.random()*pipeTop.height)-pipeTop.height;

pipe.push({
	x: startX, 
	y: startY
});
// var test = [];
// test[0] = {x: 1, y:2};
//constants
var gap = pipeTop.height + 85;
//var constant = pipeTop.height + gap;
var pipeWidth = 327;
//bird constant
var bX = 10;
var bY = 150;
var gravity = 1.5;
var lost = false;
document.addEventListener('keydown', moveUp);
function reset(){
	score = 0;
	lost = false;
	bX = 10;
	bY = 150;
	pipe.splice(0, pipe.length);
	pipe.push({
		x: startX, 
		y: startY
	});

}
function moveUp(e) {
	if (lost === false && e.code !== 'KeyD'){
		bY -= 25;
	} 
	if (lost === false && e.code === 'KeyD'){
		bY += 5;
	} 
	if (lost === true && e.code === 'KeyR'){
		reset();
	}
}

function draw() {
	if (lost === false) {
		ctx.drawImage(bg, 0, 0);
		if (pipe.length == 0) {
			pipe.push({
				x: startX, 
				y: startY
			});
		}
		for(var i = pipe.length - 1; i >= 0; i--){
			if (pipe[i].x == 125){
				pipe.push({
					x: cvs.width, 
					y: Math.floor(Math.random()*pipeTop.height)-pipeTop.height
				});
			}
			var birdXPos = bX + (bird.width/2);
			var birdYPos = bY + (bird.height/2);
			var pipeBPos = pipe[i].y + gap;
			var pipeX = pipe[i].x;
			var pipeY = pipe[i].y + pipeTop.height;
			var pipeSPos = pipeX + pipeTop.width;
			var flor = cvs.height-140;
			//1: pipeX < birdX < pipeX + pipeWidth (bird between top pipe)
			//&&: pipeY < birdY < pipeY + pipeHeight (bird not in gap)
			//sidenote: pipeBY is pipeY + gap 
			//2: pipeX < birdX < pipeBX + pipeWidth (bird between bottom pipe)
			//&&: pipeBY < birdY < pipeBY + pipeHeight
			var leftRightCheck = (birdXPos >= pipeX && birdXPos <= pipeSPos);
			var topPipeCheck = leftRightCheck && (birdYPos >= 0 && birdYPos <= pipeY);
			var bottomPipeCheck = leftRightCheck && (birdYPos >= pipeBPos && birdYPos < flor);
			var ceilFlorCheck = (birdYPos <= 0 || birdYPos >= flor);

			//bird between top pipe
			if (topPipeCheck || bottomPipeCheck || ceilFlorCheck) {
				if(topPipeCheck) {console.log('top')}
				if(bottomPipeCheck) {console.log('bottom')}
				if(ceilFlorCheck) {console.log('ceil')}
					//within a pipe
					//score = 0;
					lost = true;
				}

			// if( birdXPos >= pipe[i].x && 
			// 	bX <= pipe[i].x + pipeTop.width && 
			// 	(bY <= pipe[i].y + pipeTop.height || birdYPos >= pipeBPos)
			//   ) {
			// 	score = 0;
			// 	lost = true;

			// }
			// if (birdYPos > 0 && birdYPos < pipe) {

			// }
			if(pipe[i].x == 5){
				score++;
			}
			//drawImage(image, X, Y);
			//pipeTop
			ctx.drawImage(pipeTop,pipe[i].x,pipe[i].y);

			//pipebottom
			ctx.drawImage(pipeBot,pipe[i].x,pipeBPos);
	
			if (bY < cvs.height-140){
				pipe[i].x --;
			}
			if(pipe[i].x < -50) {
				pipe.splice(i, 1);
			}
		}
		ctx.drawImage(fg, 0, cvs.height - fg.height);
	
		if (bY > flor){
			bY = flor;
		}
		ctx.drawImage(bird, bX, bY);

		ctx.fillStyle = "#000";
		ctx.font = "20px Questrial";
		ctx.fillText("Score: "+score,10,cvs.height-20);
	} else {
		ctx.fillStyle = '#9b61ec';

		ctx.font = "20px Questrial";
		ctx.fillText('Score was: ' + score, cvs.width/2 - 50, cvs.height - 90);
		ctx.fillText('LOSER', cvs.width/2 - 20, cvs.height - 70);
		ctx.fillText('Press R to Reset',cvs.width/2 - 50,cvs.height - 50);

		ctx.fillText('butt',10,cvs.height-20);

	}
	

	bY += gravity;
	requestAnimationFrame(draw);
}

draw();