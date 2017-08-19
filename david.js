//Task
//Create a rand() function
//Takes a number
//Returns a random number between 0 and that number

//Psuedocode
//multiply Math.random() by the given number
//remove the decimal part
//return the remaining intenger

//Returns a random integer between 0 and num
function rand(num){
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;
}

//console.log(rand(6));
//console.log(rand(1000));
//console.log(rand(2));
//console.log(rand(0));

