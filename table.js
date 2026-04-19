// File: table.js
// Description: Creates a table using JavaScript and loops

// Array of objects (useful real data)
let players = [
    { name: "Alex", score: 1200, level: 5 },
    { name: "Jordan", score: 980, level: 4 },
    { name: "Taylor", score: 1500, level: 6 },
    { name: "Morgan", score: 1100, level: 5 }
];

// Get the container from HTML
let container = document.getElementById("tableContainer");

// Create table element
let table = document.createElement("table");

// Create header row
let headerRow = document.createElement("tr");

// Column titles
let headers = ["Name", "Score", "Level"];

// Loop to create header cells
for (let i = 0; i < headers.length; i++) {

    let th = document.createElement("th");
    th.textContent = headers[i];
    headerRow.appendChild(th);
}

// Add header row to table
table.appendChild(headerRow);

// Loop through player data to create rows
for (let i = 0; i < players.length; i++) {

    // Create a new row
    let row = document.createElement("tr");

    // Create cells for each column
    let nameCell = document.createElement("td");
    nameCell.textContent = players[i].name;

    let scoreCell = document.createElement("td");
    scoreCell.textContent = players[i].score;

    let levelCell = document.createElement("td");
    levelCell.textContent = players[i].level;

    // Add cells to row
    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    row.appendChild(levelCell);

    // Add row to table
    table.appendChild(row);
}

// Add table to page
container.appendChild(table);
