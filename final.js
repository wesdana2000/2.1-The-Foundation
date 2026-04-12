// File: final.js
// Description: Uses multiple programming concepts

// Object representing a user submission
let userData = {
    originalText: "",
    cleanedText: ""
};

// Function called when form is submitted
function processInput() {

    // Get user input
    let text = document.getElementById("userText").value;

    // Store original text in object
    userData.originalText = text;

    // Convert text to lowercase (string manipulation)
    text = text.toLowerCase();

    // Remove spaces from text
    let cleaned = text.replace(/\s/g, "");

    // Store cleaned text in object
    userData.cleanedText = cleaned;

    // Variable for reversed string
    let reversed = "";

    // Loop to reverse string
    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i];
    }

    // Output element
    let output = document.getElementById("output");

    // Decision logic: check if palindrome
    if (cleaned === reversed && cleaned.length > 0) {

        output.innerHTML =
            "✅ Palindrome detected!<br>" +
            "Original: " + userData.originalText + "<br>" +
            "Reversed: " + reversed;

    } else if (cleaned.length === 0) {

        output.innerHTML = "⚠ Please enter valid text.";

    } else {

        output.innerHTML =
            "❌ Not a palindrome.<br>" +
            "Original: " + userData.originalText + "<br>" +
            "Reversed: " + reversed;
    }

    // Prevent page refresh
    return false;
}
