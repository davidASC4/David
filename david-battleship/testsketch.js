var squares = [];

function setup() {
  createCanvas(500, 500);
  //there's a "b" for every "a"
  for (var a = 10; a < width; a += 30) {
    for (var b = 10; b < height; b += 30) {
      //add the circles to the array at x = a and y = b
      squares.push(new Square(a, b));
    }
  }
  console.log(squares.length);

}

function draw() {
  background(50);
  for (var b = 0; b < squares.length; b++) {
    squares[b].show();
    //console.log("shown");
  }
}

function Square(x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    fill(255);
    noStroke();
    rect(this.x, this.y, 10, 10);
    //console.log("showing");
  }
}