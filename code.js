// File: code.js
// Description: Contains all game logic for the Craps game

// This function runs when the form is submitted
function playCraps() {

    // Generate first random number between 1 and 6
    let die1 = Math.floor(Math.random() * 6) + 1;

    // Generate second random number between 1 and 6
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of both dice
    let sum = die1 + die2;

    // Call another function to determine the result
    let resultMessage = determineResult(die1, die2, sum);

    // Output results to the webpage using innerHTML
    document.getElementById("output").innerHTML =
        "Die 1: " + die1 + "<br>" +
        "Die 2: " + die2 + "<br>" +
        "Sum: " + sum + "<br><br>" +
        resultMessage;

    // Prevent form from refreshing the page
    return false;
}

// This function takes parameters and determines the game outcome
function determineResult(die1, die2, sum) {

    // Check if the player loses
    if (sum === 7 || sum === 11) {
        return "💀 CRAPS – You lose!";

    }
    // Check if both dice are equal AND even
    else if (die1 === die2 && die1 % 2 === 0) {
        return "🎉 You won!";

    }
    // Any other condition
    else {
        return "😐 You pushed!";
    }
}
