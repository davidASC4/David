//var prompt = require('prompt-sync')();
//
// get input from the user
//
//var n = prompt('How many more times?');

var prompt = require('prompt-sync')();

//Player starts with $1000
//They're buying items at a store before they go on an adventure
//They have to spend as much money as possible (i.e. spend all their money)

//Pseudocode
//Assign the player's money to 1000
//Create an array to store the items the player bought
//Until the player runs out of money:
//Ask them what they want to buy
//Subtract that price from the money they have 
//Put item they bought in the array

var money = 1000;
var items = [];

while(money > 99) {
    console.log("You have $" + money + " left. A tent is $100. Used Yeezys are $500.");
    var answer = prompt('Which item do you want to buy? ');
    if (answer == "tent") {
        money = money - 100;
        items.push("tent");
        console.log("You bought a tent!");
    } else if (answer == "Used Yeezys") {
        money = money - 500;
        items.push("Used Yeezys");
        console.log("You bought used Yeezys!");
    } else {
        console.log("I didn't understand your answer. Try again!");
    }
}