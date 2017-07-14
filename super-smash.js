var prompt = require('prompt-sync')();
var mashArray = [];
var firstQuestion = [];
var secondQuestion = [];
var final = ["You fought " + answer2 + " in the " + answer1 + " and hit them " + answer3 + "times. Too bad. Mewtwo wins!" ];

//while(true) {
//    console.log("Welcome to Super Smash Bros!");
//    var answer = prompt('Who will you choose to fight?');
//    if (answer == ) {
//        console.log ("You chose to fight" + answer + " !")
//    }
//    if (answer == "Link") {
//        //console.log("You chose to fight Link!")
//    }
//    
//}

console.log("Welcome to Super Smash Bros!");

var answer1 = prompt('Where will you fight? ');
final.push(answer1);
console.log("You chose to fight at " + answer1 + "!");

var answer2 = prompt('Who will you choose to fight? ');
final.push(answer2);
console.log("You chose to fight against " + answer2 + "!");

var answer3 = prompt('How many times will you strike? ');
final.push(answer3);
console.log("You struck " + answer3 + " times!");

console.log("You fought " + answer2 + " in the " + answer1 + " and hit them " + answer3 + " times. Too bad. Mewtwo wins!");