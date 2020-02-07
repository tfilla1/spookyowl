var cnv;
var score = 0;
function setup(){
  cnv = createCanvas(600,700);
  //cnv.background(150, 255, 150);
  cnv.class('canvas');
  // centerCanvas();
  drawStadium();
  //rect(200,0,200,50);


}

function drawHome() {
  beginShape();
  vertex(250,100);
  vertex(350,100);
  vertex(350, 150);
  vertex(300, 200);
  vertex(250,150);
  endShape(CLOSE);
}

function drawStadium(){
  noStroke();
  cnv.background(0);

  fill(75, 255, 100);
  rect(0, 100,600,150);

  fill(50, 220, 50);
  rect(0,250,600,300);


  fill(150, 220, 150);
  rect(0,550,600,150);

  fill(220,150,175);

  drawHome();

  rect(550,350,50,100);
  rect(250,650,100,50);
  rect(0,350,50,100);
}

function draw() {

}

function mousePressed() {
  clear();
  // centerCanvas();
  drawStadium();
  var x = random(600);
  var y = random(600) + 100;
  var size = 15;
  stroke(0);
  fill(255);
  scoring(y);
  ellipse(x,y,size,size);
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function scoring(y){
  if (y < 150){
    score -= 100;
  } else if (y > 150 && y < 400) {
    score += 50;
  } else if (y > 400 && y <= 700) {
    score += 100
  }
  text("User Score: " + score,10,30);
}
