const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const boxes = document.querySelectorAll(".box");
resetBtn.addEventListener("click", resetGrid);

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
      box.style.backgroundColor = "white";
    });
    container.appendChild(box);
  }
}

function resetGrid() {
  const size = parseInt(prompt("Size for div?"));
  createGrid(size);
}
