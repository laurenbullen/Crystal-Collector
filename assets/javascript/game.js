// pseudo coding
// the game should have 4 crystals and a random number result
// each crystal should be assigned a different value, in this case the values will be 1-12
// a new random number should be generateed after each win or loss generated
// when a crystal is clicked on, the value of that crystal should be added to the previous result until it equals the random result
// if the ending value is greater than the random result, we add one to the loss tally
// if the ending value is equal to the random result, we add one to the win tally

var randomResult = 0;
var wins = 0;
var loses = 0;
var yourScore = 0;

var resetAndStart = function (){

$("#crystal").empty();
randomResult = Math.floor(Math.random() * 101) + 19;
// console.log(randomResult);
$("#result").html("Goal Number: " + randomResult);


for (let i = 0; i < 4; i++) {

    function getRandomNumber() {
        return Math.floor(Math.random() * 12) + 1;
    }
    $(".crystal").each(function() { 
        $(this).attr("data-random", getRandomNumber());
    })
 }
 
}

resetAndStart();

// event delegation listening to the document, not the crystals. This is because crystal won't be recognized as the same element once a win or lose happens.
$(document).on("click", ".crystal", function() {

    // takes that data-random value and converts to an integer
    var num = parseInt($(this).attr("data-random")) ;
    // adds integers to each other to get youScore as the crystals are clicked
    yourScore += num;
    console.log(yourScore)
    $("#your-score").html("Your Score: " + yourScore);
    

    if (yourScore > randomResult){
        loses++;
        $("#loses").html("Losses: " + loses);
        // resets the data value of yourScore 0 once a loss is added
        yourScore = 0;
        // changes display of "Your Score" to 0
        $("#your-score").html("Your Score: " + 0);
        // running this function from above resets all the values of the crystals and random number
        resetAndStart();
    }

    else if (yourScore === randomResult){
        wins++;
        $("#wins").html("Wins: " + wins);
        yourScore = 0;
        $("#your-score").html("Your Score: " + 0);
        resetAndStart();
    }
    
});

