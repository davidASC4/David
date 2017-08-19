var charizardArray = ["Blaze", 266, false, ["Fire", "Flying"]];
var charizardObject = {
    "Attack": "Blaze",
    "HP": 266,
    "Legendary" : false,
    "Types": ["Fire", "Flying"]
};

function Shoe(brand, model) {
    this.brand = brand;
    this.model = model;
}

var boosts = new Shoe("Adidas", "Yeezy Boost 350");
var stans = new Shoe("Adidas", "Stan Smith");


function Superhero(heroName, realName, superpower) {
    this.heroName = heroName;
    this.realName = realName;
    this.superpower = superpower;
    this.talk = function() {
        console.log("Hi, I'm " + heroName);
    }
}

var superman = new Superhero("Superman", "Clark Kent", "Super Strength")
var spiderman = new Superhero("Spiderman", "Peter Parker", ["Spidey Sense", "Web-Slinging", "Wall Climbing", "Super Strength"]);
