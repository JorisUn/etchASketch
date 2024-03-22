const container = document.querySelector(".container");
const buttonMenu = document.querySelector(".buttonMenu");
const clearGridButton = document.querySelector(".gridClearButton");
const gridLengthInput = document.querySelector(".gridLengthInput");
const gridLengthButton = document.querySelector(".gridLengthButton");
let mouseClicked = false;
document.body.onmousedown = () => {
    mouseClicked=true;
}
document.body.onmouseup = () => {
    mouseClicked=false;
}

function createGrid(length){
    number = Math.pow(length, 2);
    for(let i=0;i<number;i++){
        let box = document.createElement("div");
        box.classList.add("drawBox");
        box.style.backgroundColor = "rgb(255, 255, 255)";
        box.style.aspectRatio="1/1";
        box.style.width = `${container.clientHeight/length}px`;
        hovering = true;
        box.addEventListener("mouseover", () => {
            if(mouseClicked){
                box.style.backgroundColor = `rgb(0, 0, 0)`
            }
        })
        container.appendChild(box);
    }
}
function removeGrid(){
    const boxes = document.querySelectorAll(".drawBox");
    for(let i=0;i<boxes.length;i++){
        container.removeChild(boxes[i]);
    }
}
function clearGrid(){
    const boxes = document.querySelectorAll(".drawBox");
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor = "rgb(255, 255, 255)";
    }
}
//clearGridButton.onclick = clearGrid();
clearGridButton.textContent = "Clear Grid";
clearGridButton.style.backgroundColor = "red";
clearGridButton.onclick = () => clearGrid();
buttonMenu.appendChild(clearGridButton);
gridLengthButton.onclick = () => {
    let value = Number(gridLengthInput.value);
    if(isNaN(value) || value > 64 || value < 1) return;
    removeGrid();
    createGrid(value);
    console.log(value);
}; 
buttonMenu.appendChild(gridLengthButton);
buttonMenu.appendChild(gridLengthInput);
