// File: strings.js
// Description: Validates user input and reveals secret message

// Function that runs when form is submitted
function validateForm() {

    // Get first name value from input
    let firstName = document.getElementById("firstName").value;

    // Get last name value from input
    let lastName = document.getElementById("lastName").value;

    // Get zip code value from input
    let zipCode = document.getElementById("zipCode").value;

    // Combine first name + space + last name
    let fullName = firstName + " " + lastName;

    // Get reference to message display area
    let messageArea = document.getElementById("message");

    // Check if full name exceeds 20 characters
    if (fullName.length > 20) {

        // Display validation warning
        messageArea.textContent = "⚠ Name must be 20 characters or less.";

        // Stop program from continuing
        return false;
    }

    // Check if zip code is exactly 5 digits using regular expression
    let zipPattern = /^\d{5}$/;

    if (!zipPattern.test(zipCode)) {

        // Display zip validation warning
        messageArea.textContent = "⚠ Zip code must be exactly 5 digits.";

        // Stop program
        return false;
    }

    // If validation passes, show secret message
    messageArea.innerHTML =
        "✅ Access Granted!<br><br>" +
        "Welcome " + fullName + "!<br>" +
        "🎉 The secret message is: You have unlocked the secure vault!";

    // Prevent page refresh
    return false;
}
