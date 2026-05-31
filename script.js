const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", resetGrid);


createGrid(16);

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        console.log("creating square");
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }
}

function resetGrid() {
    const size = parseInt(prompt("Size for div?"));
    createGrid(size);
}