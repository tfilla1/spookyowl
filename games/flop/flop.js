/*
description: 
    rectangles (buildings) of different sizes go across the bottom
    gap between "buildings"
    "person" runs across buildings
    try to make the gap
    other things as i think of them
*/
//var topblops = [];
//var bopblops = [];
var blops = [];
var score = 0;
var p = new Player(50,cvs.height - 150);

//setInterval(reset, 15000);
document.addEventListener('keydown', function() {
    p.jump();
})

function setup() {
    var startX = cvs.width - 50;
    var height = 100;


    for (var i = 0; i <= 15; i++) {
        var color = randomColor();

        blops.push(new Blop(startX, 
                         50, height, color)
                        );
        // bopblops.push(
        //     new Blop(startX, 
        //              cvs.height - height, 
        //              50, height)
        //             );
        // topblops.push(
        //     new Blop(startX, 
        //              0, 
        //              50, height)
        //             );
        startX += 50;            
        height = Math.floor(Math.random() * 200) + 50;
        while (height > 200) {
            height = Math.floor(Math.random() * 200) + 50;
        }            
    }

}

function randomColor() {
    var rb = Math.floor(Math.random() * 200) + 100;
    // var rb = Math.floor(Math.random() * 200) + 100;
    var color = 'rgb(' + rb + ',0,' + rb + ')';
    return color;
}
function draw(){
    ctx.font = "100px Questrial";
    
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, cvs.width, cvs.height);
    ctx.fillStyle = 'white';
    ctx.fillText(parseInt(score), cvs.width/2, cvs.height/2 + 25);

    p.draw();
    p.update();

    for (var b = blops.length - 1; b >= 0; b--) {
        blops[b].draw();
        blops[b].update(randomColor());


        //if (b == 0) {
            score = p.score(blops[b]);
        //}


    }

    //get player.x && player.y
    //find blops height
    //check if player goes below height
    //score = p.score();



    requestAnimationFrame(draw);
}

function check() {
    //check blop
    // if blop is 
}

function reset() {

    randomColor();
    // var startX = 0;
    // var height = 100;

    // blops = [];

    // //decide between shades of purple, pink, grey, etc
    // var choice = Math.floor(Math.random() * 4) + 1;

    // switch (choice) {
    //     case 1:
    //     console.log('1');
    //     break;
    //     case 2: 
    //     console.log('2');
    //     break;
    //     case 3:
    //     console.log('3');
    //     break;
    //     case 4: 
    //     console.log('4');
    //     break;
    // }


    // for (var i = 0; i <= 15; i++) {
    //     var r = Math.floor(Math.random() * 200) + 150;
    //     var b = Math.floor(Math.random() * 50) + 100;

    //     var color = 'rgb(' + r + ',0,' + b + ')';

    //     blops.push(new Blop(startX, 
    //                      50, height, color)
    //                     );
    //     // bopblops.push(
    //     //     new Blop(startX, 
    //     //              cvs.height - height, 
    //     //              50, height)
    //     //             );
    //     // topblops.push(
    //     //     new Blop(startX, 
    //     //              0, 
    //     //              50, height)
    //     //             );
    //     startX += 50;            
    //     height = Math.floor(Math.random() * 200) + 50;
    //     while (height > 200) {
    //         height = Math.floor(Math.random() * 200) + 50;
    //     }            
    //}
}
setup();
draw();

