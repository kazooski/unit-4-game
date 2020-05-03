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

var wins;
var losses;
var enemyPower;
var playerPower;


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

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageSpell.addClass("spell-list");

        // Each imageCrystal will be given a src link to the crystal image
        imageSpell.attr("src", spellImages[i]);

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageSpell.attr("data-spellvalue", spellValues[i]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#spells").append(imageSpell);
    }
}

// A new challenger appears: give enemy power a value
function newOpponent() {
    enemyPower = Math.floor(Math.random()*79 + 1);
    $("#opponent-power").text(enemyPower);
}

// Casting spells: changes power values
$(".spell-list").click(function() {

    var spellAttack = ($(this).attr("data-spellvalue"));
    spellAttack = parseInt(spellAttack);
    console.log(spellAttack);
    playerPower += spellAttack;

    console.log(playerPower);

    $("#player-power").text(playerPower);
});

function reset() {
    initialShuffle(spellValues);
    createSpells();
    newOpponent();
    playerPower = 0;
    $("#player-power").text(playerPower);

}

reset();
console.log(spellValues);
console.log(enemyPower);
console.log(playerPower);


