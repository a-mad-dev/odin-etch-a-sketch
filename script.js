const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const clearBtn = document.querySelector(".clear");

let isDrawing = false;

document.addEventListener("mousedown", () => (isDrawing = true));
document.addEventListener("mouseup", () => (isDrawing = false));

resetBtn.addEventListener("click", resetGrid);
clearBtn.addEventListener("click", () => {
    createGrid(16);
})
createGrid(16);

function createGrid(size) {
  if (isNaN(size) || size < 1) size = 16;
  if (size > 100) size = 100;
  container.innerHTML = "";
  const containerSize = container.clientWidth;
  const boxSize = containerSize / size;
  for (let i = 0; i < size * size; i++) {
    console.log("creating square");
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.classList.add("box");
    box.addEventListener("mouseover", () => {
      if (isDrawing) {
        box.style.backgroundColor = "white";
      }
    });
    container.appendChild(box);
  }
}

function resetGrid() {
  const size = parseInt(prompt("Size for div?"));
  createGrid(size);
}
