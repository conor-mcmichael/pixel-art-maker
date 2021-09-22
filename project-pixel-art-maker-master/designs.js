// Making the grid

// Variable declarations

const createGrid = document.getElementById("submission");
const gridHeight = document.querySelector("#inputHeight");
const gridWidth = document.querySelector("#inputWidth"); 
let designCanvas = document.querySelector("#pixelCanvas");
let blankCanvas = document.querySelectorAll("td"); // Captures full canvas extents
let addColors = document.querySelectorAll("td"); // Used to select cells
const selColor = document.querySelector("#colorPicker");

// Resets the board whenever a new grid is created

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Function for pixel coloring

function coloring() {
    for (let c = 0; c < addColors.length; c++) {
        let box = addColors[c];
        box.addEventListener("click", function() {
            box.style.backgroundColor = selColor.value;
        });
    }
}

// Allows coloring of initial canvas

 coloring();

// makeGrid() function

createGrid.addEventListener("click", function makeGrid() {
    if (designCanvas.childElementCount > 0) {
        removeAllChildNodes(designCanvas);
    }
    for (let h = 0; h < gridHeight.value; h++) {
        let makeRow = document.createElement("tr");
        designCanvas.appendChild(makeRow);
        for (let w = 0; w < gridWidth.value; w++) {
            let makeBox = document.createElement("td");
            makeRow.appendChild(makeBox);
        }
    } 
    blankCanvas = document.querySelectorAll("td"); // Refreshes canvas node list
    addColors = document.querySelectorAll("td"); // Refreshes canvas node list
    coloring();
    }
);

// Refreshes current grid

const refreshGrid = document.getElementById("refresh");

refreshGrid.addEventListener("click", function () {
    for (let i = 0; i < blankCanvas.length; i++) {
        blankCanvas[i].setAttribute("style", "background-color: rgb(255, 255, 255)");
    }
});
