// File: move.js
// Description: Controls meme image movement and button behavior

// Variable to store interval reference
let moveInterval;

// Function called when Start button is pressed
function handleStart() {

    // Disable Start button
    document.getElementById("startBtn").disabled = true;

    // Enable Stop button
    document.getElementById("stopBtn").disabled = false;

    // Display status message using innerHTML
    document.getElementById("statusMessage").innerHTML =
        "🚀 Meme is moving! Click Stop to freeze it.";

    // Call function that moves the image
    startMoving();

    // Prevent page refresh
    return false;
}

// Function that starts moving the image
function startMoving() {

    // Get image element
    let img = document.getElementById("memeImage");

    // Set interval to move image every 100 milliseconds
    moveInterval = setInterval(function () {

        // Generate random X and Y positions
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);

        // Apply new positions
        img.style.left = x + "px";
        img.style.top = y + "px";

    }, 100);
}

// Function called when Stop button is pressed
function handleStop() {

    // Stop the interval movement
    clearInterval(moveInterval);

    // Enable Start button
    document.getElementById("startBtn").disabled = false;

    // Disable Stop button
    document.getElementById("stopBtn").disabled = true;

    // Display status message
    document.getElementById("statusMessage").innerHTML =
        "🛑 Meme stopped. Click Start to move again.";
}
