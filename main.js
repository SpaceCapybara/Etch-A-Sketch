const sizeBttn = document.querySelector("#sizeBttn");
const container = document.querySelector("#sketchContainer");
const response = document.querySelector(".response");
const delBttn = document.querySelector("#eraseButton")
const randomBttn = document.querySelector("#random")
const blackBttn = document.querySelector("#blackBttn")

let boardSize = 0;
let columnAndRowSize = 0;
let defaultPaintingColor = "black"
response.textContent = "Click the button above to create the grid!"
let gridCreated = false

blackBttn.addEventListener('click', () => {
  if (gridCreated == false) {
    alert("Please create the grid first! ")
  } else {
    defaultPaintingColor = "black"
  }

})

randomBttn.addEventListener('click', () => {
  if (gridCreated == false) {
    alert("Please create the grid first! ")
  } else {
    defaultPaintingColor = "random"
  }
})

sizeBttn.addEventListener("click", () => { 
    
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }

  let size = 0;
  size = parseInt(prompt("What size should the grid be?"));
  if (isNaN(size) || size > 100 || size < 0) {
    response.textContent = "You should only type numbers between 0 and 100";
  } else {
    response.textContent = `A ${size}px x ${size}px grid has been created!`;
    boardSize = size * size;
    columnAndRowSize = size;
    createBoard();
    paintBoard();
  }
});

function createBoard() {
  document.querySelectorAll(".gridSquare");
  for (let i = 0; i < boardSize; i++) {
    let square = document.createElement("div");
    square.setAttribute("class", "gridSquare");
    container.appendChild(square);
    square.style.backgroundColor = "white";
  }

  sketchContainer.style.gridTemplateRows = `repeat(${columnAndRowSize}, 1fr)`;
  sketchContainer.style.gridTemplateColumns = `repeat(${columnAndRowSize}, 1fr)`;
  gridCreated = true
}

function paintBoard() {
    let isMouseDown = false;
    let gridElements = document.querySelectorAll(".gridSquare");
  
    gridElements.forEach((element) => {
      element.addEventListener("mousedown", () => {
        isMouseDown = true;
      });
  
      element.addEventListener("mouseup", () => {
        isMouseDown = false;
      });
  
      element.addEventListener("mouseover", (e) => {
        if (isMouseDown && defaultPaintingColor == "black") {
          e.target.style.backgroundColor = defaultPaintingColor;
        } else if (isMouseDown && defaultPaintingColor == "random") {
          e.target.style.backgroundColor =  `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
      });
    });

    delBttn.addEventListener("click", () => {
      if (gridCreated == false) {
        alert("Please create the grid first! ")
      } else 
          gridElements.forEach((element) => {
            element.style.backgroundColor = "white"
        })
    })
}

