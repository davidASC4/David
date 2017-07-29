var array = [];

function setup() {
    createCanvas(801, 801)
    stroke("black")
    rect(0, 100, width - 1, height - 1)
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            rect(i * 100, j * 100 + 100, 100, 100)
        }
    }
    for (var k = 0; k < 8; k++) {
        array[k] = [];
        for (var h = 0; h < 8; h++) {
            array[k][h] = false;
        }
    }

}



function mouseClicked() {
    // change coordinate into index
    //get boolean
    // change back into coordinate
    // if (/* When player's turn.*/) {
        var X = mouseX;
        //gives index
        X = Math.floor(X / 100);
        var Y = mouseY;
        Y = Math.floor(Y / 100);
        var newXCoordinate = X * 100;
        var newYCoordinate = Y * 100;
        rectMode(CORNER);
        console.log("I made it", Y, X);
        if (array[Y][X] == false) {
            fill(255, 0, 0);
            fill(0, 0, 255);
            rect(newXCoordinate, newYCoordinate, 100, 100);
        } else {
        fill(255, 0, 0);
            rect(newXCoordinate, newYCoordinate, 100, 100);

        }
    //}


}


//win/lose system

//score array 
// var score1 = [];
// var score2 = [];

// //if player 1 hits opponent's ship, push a 1 to the end of the score array. 
// if ("hit") {/
//     score1.push(1)
// }

// //if player 2 hits opponent's ship, push a 1 to the end of the score array. 
// if ("hit") {
//     score2.push(1)
// }


// //Display score at the top of the screen

function draw() {
    
}



