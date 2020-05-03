// Javascript for the crystal collector's game

// array of images for src

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


// in honor of Fisher-Yates we ill be shuffling the values array
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
        imageSpell.attr("data-spellValue", spellValues[i]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#spells").append(imageSpell);
    }
}

//   // This time, our click event applies to every single crystal on the page. Not just one.
//   $(".crystal-image").on("click", function() {

//     // Determining the crystal's value requires us to extract the value from the data attribute.
//     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += crystalValue;

function reset() {
    initialShuffle(spellValues);
    createSpells();
}

reset();
console.log(spellValues);
console.log(enemyPower);


