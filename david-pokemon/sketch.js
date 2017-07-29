function setup() {
    createCanvas(800, 500);
    background("gray");
   }

function draw() {
    fill("white");
    stroke("black");
    ellipse(190,380,480,80);

    var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(150,250,50,130);

    var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(3,396,393,100);

    var pokemon = ["Charmander"]
    var calltoaction = "What will " + pokemon + " do?"
    stroke("black");
    strokeWeight(2);
    fill("black");
    textSize(30);
    text(calltoaction,25,450);

    fill("white");
    stroke("black");
    ellipse(600,200,370,80);

    var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(560,80,50,130);

    var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(403,396,393,100);

    var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(425,320,350,70);

    var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(25,25,350,70);

    stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("FIGHT",450,435);

    stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("POKeMON",450, 480);

    stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("BAG",660, 435);

    stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("RUN",660, 480);

}

