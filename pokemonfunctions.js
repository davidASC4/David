//
//var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "u", "v", "w", "x", "y", "z"]
//function randLetter(letter){
//    var randomLetter = letter * Math.random();
//    var result = Math.floor(randomLetter);
//    return result;
//    }
//
//console.log(alphabet.charAt(randLetter(alphabet.length)));
//console.log(randLetter(alphabet.length)charAt(result))


function rand(num) {
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;
}

function randLetter() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[rand(alphabet.length)];
}

function randWord() {
    var word = "";
    //Use a loop to pick 5 random letters
    for (var i = 0; i < 5; i++) {
        //Pick a letter
        word = word + randLetter();
    }
    return word;
}

function randSentence() {
    var sentence = "";
    //Use loop to pick 5 random words
    for (var i = 0; i < 5; i++) {
        //Pick a word
        sentence = sentence + randWord() + " ";
    }
    return sentence;
}