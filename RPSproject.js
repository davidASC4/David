var playerChoice = "Rock";

var computerChoices = ["Rock", "Paper", "Scissors"];
var computerChoice = computerChoices[Math.floor(Math.random()*3)];

//Tie
if (computerChoice == playerChoice){
    console.log("It's a draw!");
}

//Computer= Paper, Player= Rock
else if (computerChoice == "Paper" && playerChoice == "Rock"){
    console.log("You lose!")
}

//Computer= Paper, Player= Scissors
else if (computerChoice == "Paper" && playerChoice == "Scissors"){
    console.log("You win!")
}

//Computer= Scissors, Player=Rock
else if (computerChoice == "Scissors" && playerChoice == "Rock"){
    console.log("You win!")
}

//Computer: Scissors, Player= Paper
else if (computerChoice == "Scissors" && playerChoice == "Paper"){
    console.log("You lose!")
}

//Computer= Rock, Player= Scissors
else if (computerChoice == "Rock" && playerChoice == "Scissors"){
    console.log("You lose!")
}

//Computer= Rock, Player= Paper
else if (computerChoice == "Rock" && playerChoice == "Paper"){
    console.log("You win!")
}