const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const clearBtn = document.querySelector(".clear");

let isDrawing = false;

container.addEventListener("mousedown", () => (isDrawing = true));
container.addEventListener("mouseup", () => (isDrawing = false));
container.addEventListener("mouseleave", () => (isDrawing = false));


resetBtn.addEventListener("click", resetGrid);
clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".box").forEach((box) => {
    box.style.backgroundColor = "#000";
  });
});
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
        box.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      }
    });
    container.appendChild(box);
  }
}

function resetGrid() {
  const size = parseInt(prompt("Size for div?"));
  createGrid(size);
}
