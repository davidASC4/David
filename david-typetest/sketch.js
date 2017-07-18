function setup (){
    createCanvas(300,300);
    background(100);
    
}



function draw (){
    textSize(25);
    textAlign(RIGHT);
    text("Speed Typer", 215, 30);
    textAlign(CENTER);
    var words = [ "apple", "bear", "cat", "dog" ];
    var word = random(words); 
    text(word,50,50);
    return word;

    textAlign(LEFT);
    text("IJKL", 50, 70);
}

//var sentence = "Hello World";
//var typed = "";
//
//function setup(){
//    createCanvas(400,400);
//    background(50);
//}