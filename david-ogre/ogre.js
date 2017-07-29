var hp = 100;
var gold = 0;
var numberDefeated = 0;

function setup(){
    //add game title
    $("body").append("<h1>Welcome to Mona Fighter v.1.0</h1>");

    //add game info
    $("body").append("<p>Evil Monas are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an evil mona.</p>");

    //add stats
    //to-do: add stats values
    $("body").append("<h3>STATS</h3><p id='stats'></p>");

    //add attack button
    $("body").append("<button onclick='attack()'>Attack the Mona!</button>")

    $("body").append("<div id='ogres'></div>");

    updateStats();
}

function updateStats(){
    $("#stats").text("HP: " + hp + " | Gold: " + gold + " | Monas Slain: " + numberDefeated);
}

function attack(){ 
    if (hp > 0) {
        if (Math.random() * 100 > gold) {
            gold += 10;
            numberDefeated++;
            $("#ogres").prepend("<p>You won! +10 gold.</p>");
        } else{
            gold--;
            hp--;
            $("#ogres").prepend("<p>You lost! -1 gold.</p>");
        }
        updateStats();
        spawnOgre();
    }
}

function spawnOgre(){
    $("#ogres").prepend("<img src='rabbit.png'>");
}

$(document).ready(setup);