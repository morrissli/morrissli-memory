function createMulti(size) {
    const table = document.getElementById("multiplication");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < size; j++) {
            const cell = document.createElement(i === 0 || j === 0 ? "th" : "td");
            cell.textContent = i === 0 ? j : j === 0 ? i : i * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

createMulti(10);