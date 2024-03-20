const container = document.querySelector(".container");
function createDivs(number){
    for(let i=0;i<number;i++){
        let box = document.createElement("div");
        box.classList.add("drawBox");
        box.style.backgroundColor = "rgba(0, 0, 0, 0)";
        hovering = true;
        box.addEventListener("mouseover", () => {
            if(hovering){
                box.style.backgroundColor = `rgba(0, 0, 0, 1)`;
                hovering=false;
                }
            let j=100;
            let interval = setInterval(() => {
                j--;
                box.style.backgroundColor = `rgba(0, 0, 0, ${j/100})`;
                if(j<0) clearInterval(interval);
                
            }, 10);
        })
        container.appendChild(box);
    }
}
createDivs(64);
