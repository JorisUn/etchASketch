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
const rainbowMode = document.querySelector(".rainbowMode");

let mouseClicked = false;
document.body.onmousedown = () => {mouseClicked=true;}
document.body.onmouseup = () => {mouseClicked=false;}

colorPicker.addEventListener("input", (e) => {currentColor = e.target.value;
    console.log(currentColor);
})
let saveColor = currentColor;
let rainbow = false;
colorMode.onclick = () => {
    currentColor = saveColor
    rainbow = false;
}
rainbowMode.onclick = () => {
    if(currentColor != "#ffffff") saveColor = currentColor;
    rainbow = true;
}
eraseMode.onclick = () => {
    if(currentColor != "#ffffff") saveColor = currentColor;
    currentColor = "#ffffff";
    rainbow = false;
}
function rainbowColor(){
    const red = Math.floor(256*Math.random());
    const blue = Math.floor(256*Math.random());
    const green = Math.floor(256*Math.random());
    return `rgb(${red}, ${blue}, ${green})`;
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
            if(mouseClicked){
                if(!rainbow) box.style.backgroundColor = currentColor;
                else box.style.backgroundColor = rainbowColor();
            }
        })
        box.addEventListener("mousedown", (e) => {
            e.preventDefault();
            if(!rainbow) box.style.backgroundColor = currentColor;
            else box.style.backgroundColor = rainbowColor();
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


