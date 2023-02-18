let color = "";

let isMouseDown;
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

const container = document.querySelector('.container');
const blackBtn = document.querySelector('.black-btn');
const rainbowBtn = document.querySelector('.rainbow-btn')
const shadingBtn = document.querySelector('.shading-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const clearBtn = document.querySelector('.clear-btn');
const colorPicker = document.querySelector('#color-picker')
const slider = document.querySelector("#myRange")
const sliderValue = document.querySelector(".slider-value")

sliderValue.textContent = `${slider.value} X ${slider.value}`
createGrid(slider.value);


slider.addEventListener('input', function(e){
    sliderValue.textContent = `${slider.value} X ${slider.value}`
    container.innerHTML = "";
    createGrid(slider.value)
})



colorPicker.addEventListener('input', function(e){
    color = e.target.value;
})

blackBtn.addEventListener('click', function(){
    color = "black";
})

rainbowBtn.addEventListener('click', function(){
    color = "rainbow";
})

shadingBtn.addEventListener('click', function(){
    color = "black";
})

eraserBtn.addEventListener('click', function(){
    color = "";
})

clearBtn.addEventListener('click', function(){
    container.innerHTML = "";
    createGrid(slider.value)
})

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size*size;

    for (let i = 0; i < numDivs; i++){
        const div = document.createElement('div');
        container.appendChild(div);
        div.addEventListener('mouseover', function(e){
            addColor(e, color)
        })
    } 
}

function addColor(e, color) {
    if(!isMouseDown) {
        return
    } else {

        if(color == "rainbow"){
            e.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        } else {
            e.target.style.backgroundColor = color;
        }
    }
}