// pseudo coding
// the game should have 4 crystals and a random number result
// each crystal should be assigned a different value, in this case the values will be 1-12
// a new random number should be generateed after each win or loss generated
// when a crystal is clicked on, the value of that crystal should be added to the previous result until it equals the random result
// if the ending value is greater than the random result, we add one to the loss tally
// if the ending value is equal to the random result, we add one to the win tally

var randomResult = "";
var wins = "";
var loses = "";
var yourScore = "";

randomResult = Math.floor(Math.random() * 101) + 19;
// console.log(randomResult);
$("#result").html("Number to Match: " + randomResult);

for (let i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });
    
    $(".crystals").append(crystal);
    
}

$(".crystal").on("click", function() {
    console.log($(this).attr("data-random"));

})

