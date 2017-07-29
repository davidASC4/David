var missile;
var missiles = [];
var p1 = 400

function setup(){
createCanvas(800,550)
background("black");
textSize(30);
fill("white");
text("SPACE INVADERS");
// background("black");
// sc = loadImage("spaceship.png");
// a1 = loadImage("alien1.png");
// a2 = loadImage("alien2.png");
// a3 = loadImage("alien3.png");
noCursor();
}

var value = 0;

function draw(){
    
    function keyPressed(){
        if (value === 0){
            function draw(){
                background("black")
                image(sc, p1, 490, sc.width / 3, sc.height / 3)
                image(a1, 100, 100, a1.width / 10, a1.height / 10)
                image(a2, 200, 100, a2.width / 10, a2.height / 10)
                image(a3, 300, 100, a3.width / 10, a3.height / 10)

                for (var i = 0; i < missiles.length; i++){
                missiles[i].show();
                missiles[i].move(-3);
                }

                var score = [381];
                textSize(20);
                fill("white")
                textStyle(BOLD);
                text("SCORE: " + score, 30, 30);

                var highscore = [523];
                textSize(20);
                fill("white")
                textStyle(BOLD);
                text("HIGHSCORE: " + highscore, 330, 30);

                var lives = [3];
                textSize(20);
                fill("white")
                textStyle(BOLD);
                text("LIVES: " + lives, 680, 30);


                function keyPressed(){
                    if (keyCode === UP_ARROW){
                    missiles.push(new Missile(p1 + 40, 500));
                    missiles.push(new Missile(p1 , 500));
                    missiles.push(new Missile(p1 + 20, 480));
                    if (keyIsDown(LEFT_ARROW))
                    p1 -=5;
                    if (keyIsDown(RIGHT_ARROW))
                    p1 +=5;
                    }
                }
            }
        }       
    }
}
//     background("black")
//     image(sc, p1, 490, sc.width / 3, sc.height / 3)
//     image(a1, 100, 100, a1.width / 10, a1.height / 10)
//     image(a2, 200, 100, a2.width / 10, a2.height / 10)
//     image(a3, 300, 100, a3.width / 10, a3.height / 10)

//     for (var i = 0; i < missiles.length; i++){
//         missiles[i].show();
//         missiles[i].move(-3);
      
//     }

//     var score = [381];
//     textSize(20);
//     fill("white")
//     textStyle(BOLD);
//     text("SCORE: " + score, 30, 30);

//     var highscore = [523];
//     textSize(20);
//     fill("white")
//     textStyle(BOLD);
//     text("HIGHSCORE: " + highscore, 330, 30);

//     var lives = [3];
//     textSize(20);
//     fill("white")
//     textStyle(BOLD);
//     text("LIVES: " + lives, 680, 30);
// }

// function keyPressed() {
//     if (keyCode === UP_ARROW){
//     missiles.push(new Missile(p1 + 40, 500));
//     missiles.push(new Missile(p1 , 500));
//     missiles.push(new Missile(p1 + 20, 480));
// }
//   if (keyIsDown(LEFT_ARROW))
//     p1 -=5;

//   if (keyIsDown(RIGHT_ARROW))
//     p1 +=5;
// }