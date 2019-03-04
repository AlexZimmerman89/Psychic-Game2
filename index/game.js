// Creates an array that lists out all the options
var alphabet = "abcdefghijklmnopqrstuvwxyz"

// Creating variables to hold the number of wins, losses, guesses left, and number of guesses. Guesses left starts at 10
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if (alphabet.includes(userGuess)) {

        if (userGuess === computerGuess) {
            wins++
        } else {
            losses++
        }

        for (var i = 0; i < 1; i++) {
            guessesLeft = guessesLeft - 1;
            guessesSoFar = guessesSoFar + 1;
        }
            if (guessesLeft === 0) {
                alert("No guesses left!");
                guessesLeft = 10;
            }

        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
        winsText.textContent = "You've won: " + wins + " times";
        lossesText.textContent = "You've lost: " + losses + " times";
        guessesLeftText.textContent = "You have: " + guessesLeft + " guesses left";
        guessesSoFar.textContent = "You've made: " + guessesSoFar + " guesses so far";
    }
};