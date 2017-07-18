function setup() {
    createCanvas(300, 300);
    background(225);

    //stroke() sets the color of the stroke (the outine).
    stroke("black");
    //strokeWeight() sets the width of the stroke in pixels.
    strokeWeight(6);

    //arc is an ellipse with a starting and endpoint, with 0 being the rightmost point of the circle and PI being half a circle.
    //CHORD connects the ends of the arc
    // Bottom half of the pokeball 
    arc(width / 2, height / 2, 200, 200, 0, PI, CHORD);
    fill("red");
    //Top half of the pokeball
    arc(width / 2, height / 2, 200, 200, PI, 0, CHORD);

    fill("white");
    ellipse(width / 2, height / 2, 50, 50);

    fill("black");
    ellipse(width / 2, height / 2, 25, 25);
}