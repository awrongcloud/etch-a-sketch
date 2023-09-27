let color = document.querySelector("#color");
let colorBtn = document.querySelector("#colorBtn");
let rainbowBtn = document.querySelector("#rainbowBtn");
let eraserBtn = document.querySelector("#eraserBtn");
let clearBtn = document.querySelector("#clearBtn");
let slider = document.querySelector(".slider");
let gridSize = document.querySelector("#gridSizeRange");
let grid = document.querySelector("#grid-container");

let currentColor;

//clears entire grid
function clear() {
    grid.textContent = "";
    grid.style.backgroundColor = "#FFFFFF";
    gridSize.textContent = "";
}

//adds an active class to button when pressed
let currentMode="";
const buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        buttons[i].classList.add('active');
        currentMode = buttons[i].getAttribute('id');
        console.log(currentMode);
        //remove active class from all other buttons
        for(let j = 0; j < buttons.length; j++){
            if(j != i){
                buttons[j].classList.remove('active');
            }
        }
    })
}

//create grid
//eventlistener when mouseover selects currentMode with correct switch case
function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 1; i <= size*size; i++){
        let square = document.createElement('div');
        square.classList.add('lines');
        
        square.addEventListener("mouseover", () => {
            switch(currentMode){
                case 'colorBtn':
                    square.style.backgroundColor = currentColor; 
                    break;
                
                case 'rainbowBtn':
                    let R = Math.floor(Math.random()*255);
                    let G = Math.floor(Math.random()*255);
                    let B = Math.floor(Math.random()*255);
                    let rainbow = `rgb(${R},${G},${B})`;
                    square.style.backgroundColor = rainbow;
                    break;
                
                case 'eraserBtn':
                    square.style.backgroundColor = "#FFFFFF";
                    break;
                
            }//end of switch
        })
        grid.appendChild(square);
    }//end of for loop 
}//end of createGrid function

//slider function- clears grid, updates value of slider, creates grid using slider.value
function slide () {
    clear();
    gridSize.textContent = ` ${slider.value} x ${slider.value}`;
    createGrid(slider.value);
}

//AddEventListeners
clearBtn.addEventListener("click",clear);
slider.addEventListener("input", slide);
colorBtn.addEventListener("click", function () {
    currentColor = color.value;
})


