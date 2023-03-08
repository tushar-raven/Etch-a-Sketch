let color = "black"; // default color as black

// grabbing the buttons, color picker and slider
const container = document.querySelector(".container");
const blackBtn = document.querySelector(".black-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const shadingBtn = document.querySelector(".shading-btn");
const eraserBtn = document.querySelector(".eraser-btn");
const clearBtn = document.querySelector(".clear-btn");
const colorPicker = document.querySelector("#color-picker");
const slider = document.querySelector("#myRange");

// To display default slider value and make a default grid
const sliderValue = document.querySelector(".slider-value");
sliderValue.textContent = `${slider.value} X ${slider.value}`;
createGrid(slider.value);

// to update the slider value and grid size
slider.addEventListener("input", (e) => {
  sliderValue.textContent = `${slider.value} X ${slider.value}`;
  container.innerHTML = "";
  createGrid(slider.value);
});

// to make all the buttons run their assigned function
colorPicker.addEventListener("input", (e) => {
  color = e.target.value;
});

blackBtn.addEventListener("click", () => {
  color = "black";
});

rainbowBtn.addEventListener("click", () => {
  color = "rainbow";
});

shadingBtn.addEventListener("click", () => {
  color = "shading";
});

eraserBtn.addEventListener("click", () => {
  color = "";
});

clearBtn.addEventListener("click", () => {
  container.innerHTML = "";
  color = "black";
  createGrid(slider.value);
});

// to create grid and running mouseover event over each div
function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    const div = document.createElement("div");
    container.appendChild(div);

    div.addEventListener("mouseover", (e) => {
      addColor(e, color);
    });
  }
}

// to store mouse is clicked or not in a variable
let isMouseDown;
document.addEventListener("mousedown", () => (isMouseDown = true));
document.addEventListener("mouseup", () => (isMouseDown = false));

// check if the mouse is clicked or not and then a nested if-else for shading, rainbow and other cases
function addColor(e, color) {
  if (!isMouseDown) {
  } else if (color === "rainbow") {
    e.target.style.backgroundColor = `rgb(${Math.random() * 255},${
      Math.random() * 255
    },${Math.random() * 255})`;
  } else if (color === "shading") {
    const currentOpacity = e.target.style.opacity;
    e.target.style.backgroundColor = "black";
    e.target.style.opacity = Number(currentOpacity) + 0.1;
  } else {
    e.target.style.backgroundColor = color;
  }
}
