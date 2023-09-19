let color = document.querySelector("#color");
let colorBtn = document.querySelector("#colorBtn");
let rainbowBtn = document.querySelector("#rainbowBtn");
let eraserBtn = document.querySelector("#eraserBtn");
let clearBtn = document.querySelector("#clearBtn");
let slider = document.querySelector(".slider");
let gridSize = document.querySelector("#gridSizeRange");
let grid = document.querySelector("#grid-container");

//clears entire grid
function clear() {
    grid.textContent = "";
}

//create grid
function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 1; i <= size*size; i++){
        let square = document.createElement('div');
        square.classList.add('lines');
        grid.appendChild(square);
    }
}

createGrid(16);
