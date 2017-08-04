var totalmoney = []
var playerlevel = []

function setup(){
    createCanvas(500, 500);
    background('rgba(0,255,0, 0.25)');

    for(var i = 0; i < 1; i++) {
        if(totalmoney < 100){
            playerlevel.push("Rookie");
        } else if(totalmoney < 1000 && totalmoney > 100){
            playerlevel.push("Pro");
        } else if(totalmoney < 100000 && totalmoney > 1000){
            playerlevel.push("Thousandaire");
        } else if(totalmoney < 1000000 && totalmoney > 100000){
            playerlevel.push("Businessman");
        } else if(totalmoney > 1000000){
            playerlevel.push("Gates")
        }
    }
}

function draw(){
    noFill()
    rect(10,440,480,50);
    //text with amount of money
    textSize(15);
    stroke(1);
    color("green");
    text("Money: $" + totalmoney, 80, 480)
    //text with player level
    textSize(15);
    stroke(1);
    color("green");
    text("Level: " + playerlevel, 300, 480)
    //text with "stats" header
    textSize(20);
    stroke(1);
    color("green");
    text("-Stats-", 200, 460)
    //click circle
    ellipse(250, 200, 200, 200);
}

function mousepressed(){
    var d = dist(mouseX, mouseY, 250, 200);
    if (d < 100) {
        totalmoney += 10
    }
}

