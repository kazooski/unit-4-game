// Javascript for the crystal collector's game

// array of images for src in index.html
var spellImages = [
    "assets/images/finite-incantatem.PNG",
    "assets/images/incendio.PNG",
    "assets/images/mimblewimble.PNG",
    "assets/images/tarantallegra.PNG",
    "assets/images/Ventus.PNG",
];

// array of values to give each spell
var spellValues = [10, 1, 2, 3, 7];

var wins = 0;
var losses = 0;
var enemyPower;
var playerPower;

$("#score").text(wins + "    |    " + losses);


// in honor of Fisher-Yates we will be shuffling the values array
function initialShuffle(spellValues) {
    let counter = spellValues.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;
        let temp = spellValues[counter];
        spellValues[counter] = spellValues[index];
        spellValues[index] = temp;
    }
    return spellValues;
}

// create a new div for each spell
function createSpells() {
    for (var i = 0; i < spellImages.length; i++) {

        var imageSpell = $("<img>");
        imageSpell.addClass("spell-list");
        imageSpell.attr("src", spellImages[i]);
        imageSpell.attr("data-spellvalue", spellValues[i]);

        $("#spells").append(imageSpell);
    }
}

// A new challenger appears: give enemy power a value
function newOpponent() {
    enemyPower = Math.floor(Math.random()*79 + 1);
    $("#opponent-power").text(enemyPower);
}

// Casting spells: changes power values
function readyclick(){
    $(".spell-list").click(function() {

        var spellAttack = ($(this).attr("data-spellvalue"));
        spellAttack = parseInt(spellAttack);
        
        playerPower += spellAttack;

        $("#player-power").text(playerPower);

        if (playerPower === enemyPower) {
            wins++;
            $("#score").text(wins + "    |    " + losses);
            reset();
        }

        else if (playerPower > enemyPower) {
            losses++;
            $("#score").text(wins + "    |    " + losses);
            reset();
        }

    });
}

// $("#score").click(function(){

//     $( ".spell-list" ).remove();
//     console.log(spells);
// });

function reset() {
    $( ".spell-list" ).remove();
    initialShuffle(spellValues);
    createSpells();
    newOpponent();
    playerPower = 0;
    $("#player-power").text(playerPower);
    readyclick();
}

reset();


// console.log(spellValues);
// console.log(enemyPower);
// console.log(playerPower);
console.log(wins);


