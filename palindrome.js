// File: palindrome.js
// Description: Checks if the user input is a palindrome

// Function that runs when the button is pressed
function checkPalindrome() {

    // Get the text entered by the user
    let userText = document.getElementById("userInput").value;

    // Convert text to lowercase for accurate comparison
    userText = userText.toLowerCase();

    // Remove spaces from the string
    let cleanedText = userText.replace(/\s/g, "");

    // Variable that will hold the reversed string
    let reversedText = "";

    // Loop through the string backwards
    for (let i = cleanedText.length - 1; i >= 0; i--) {

        // Add each character to the reversed string
        reversedText += cleanedText[i];
    }

    // Get reference to result display area
    let output = document.getElementById("resultMessage");

    // Check if the original text matches the reversed text
    if (cleanedText === reversedText) {

        // Display palindrome success message
        output.innerHTML = "✅ This is a palindrome!";

    } else {

        // Display not palindrome message
        output.innerHTML = "❌ This is NOT a palindrome.";

    }

}
