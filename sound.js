// File: sound.js
// Description: Controls sound and movement

// Variable for movement interval
let moveInterval;

// Function for Start button
function startEverything() {

    // Disable Start button
    document.getElementById("startBtn").disabled = true;

    // Enable Stop button
    document.getElementById("stopBtn").disabled = false;

    // Get audio element
    let sound = document.getElementById("soundEffect");

    // Play sound
    sound.play();

    // Show message
    document.getElementById("status").innerHTML = "🚀 Running with sound!";

    // Start movement
    startMoving();

    return false;
}

// Function to move image
function startMoving() {

    let img = document.getElementById("memeImage");

    moveInterval = setInterval(function () {

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        img.style.left = x + "px";
        img.style.top = y + "px";

    }, 100);
}

// Function for Stop button
function stopEverything() {

    // Stop movement
    clearInterval(moveInterval);

    // Stop sound
    let sound = document.getElementById("soundEffect");
    sound.pause();
    sound.currentTime = 0;

    // Enable Start button
    document.getElementById("startBtn").disabled = false;

    // Disable Stop button
    document.getElementById("stopBtn").disabled = true;

    // Update message
    document.getElementById("status").innerHTML = "🛑 Stopped.";
}
