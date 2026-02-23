
// Ask user for rows and columns
const rows = parseInt(prompt("Enter number of rows:"));
const cols = parseInt(prompt("Enter number of columns:"));

// Validate input
if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Please enter valid positive numbers!");
} else {
    // Create table element
    const table = document.createElement("table");
    table.border = "1";
    table.cellPadding = "10";

    // Generate rows & columns
    for (let r = 0; r < rows; r++) {
        const tr = document.createElement("tr");

        for (let c = 0; c < cols; c++) {
            const td = document.createElement("td");
            td.innerText = `R${r + 1}C${c + 1}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    // Add table to body
    document.body.appendChild(table);
}