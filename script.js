const DEFAULT_COLOR = "#000000";
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const container = document.querySelector(".container");
const buttonMenu = document.querySelector(".buttonMenu");
const clearGridButton = document.querySelector(".gridClearButton");
const gridLengthInput = document.querySelector(".gridLengthInput");
const gridLengthButton = document.querySelector(".gridLengthButton");
const invalidInput = document.querySelector(".invalidInput");
const colorPicker = document.querySelector(".colorPicker");
const colorMode = document.querySelector(".colorMode");
const eraseMode = document.querySelector(".eraseMode");

let mouseClicked = false;
document.body.onmousedown = () => {mouseClicked=true;}
document.body.onmouseup = () => {mouseClicked=false;}

colorPicker.addEventListener("input", (e) => {currentColor = e.target.value;})
let saveColor = currentColor;
colorMode.onclick = () => {currentColor = saveColor}
eraseMode.onclick = () => {
    saveColor = currentColor;
    currentColor = "#ffffff";
}
function createGrid(length){
    for(let i=0;i<length*length;i++){
        let box = document.createElement("div");
        box.classList.add("drawBox");
        box.style.backgroundColor = "#ffffff";
        box.style.aspectRatio="1/1";
        box.style.width = `${container.clientHeight/length}px`;
        box.addEventListener("mouseover", (e) => {
            e.preventDefault();
            if(mouseClicked) box.style.backgroundColor = currentColor;
        })
        box.addEventListener("click", (e) => {
            box.style.backgroundColor = currentColor;
            e.preventDefault();
        })
        container.appendChild(box);
    }
}
createGrid(DEFAULT_SIZE);

function removeGrid(){
    const boxes = document.querySelectorAll(".drawBox");
    for(let i=0;i<boxes.length;i++){
        container.removeChild(boxes[i]);
    }
}
function clearGrid(){
    const boxes = document.querySelectorAll(".drawBox");
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor = "#ffffff";
    }
}
//Throwing error message if the input is invalid: >64, <1, NaN
function addInvalidInput(){
    invalidInput.textContent = "Please enter a valid input!";
}
function removeInvalidInput(){
    invalidInput.textContent = "";
}
removeInvalidInput();

clearGridButton.textContent = "Clear Grid";
clearGridButton.onclick = () => clearGrid();

gridLengthInput.value = currentSize;
gridLengthButton.onclick = () => {
    let value = Number(gridLengthInput.value);
    if(isNaN(value) || value > 64 || value < 1){
        addInvalidInput();
        return;
    }
    removeInvalidInput();
    removeGrid();
    createGrid(value);
}; 


