const sizeBttn = document.querySelector('#sizeBttn')
const container = document.querySelector("#sketchContainer")
const response = document.querySelector('.response')
boardSize = 0


sizeBttn.addEventListener('click', () => {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild)
    }

    let size = 0
    size = parseInt(prompt("What size should the grid be?"))
    console.log(size)
    if (isNaN(size) || size > 100 || size < 0) {
        response.textContent = 'You should only type numbers between 0 and 100'
    } else { 
        response.textContent = "The grid withh your specified size has been created! "
        boardSize = size * size
        createBoard()
    }
})

function createBoard() {
    
document.querySelectorAll('.gridSquare')
for (let i = 0; i < boardSize; i++) {
    let square = document.createElement('div')
    square.setAttribute("class", "gridSquare")
    container.appendChild(square)
    square.style.backgroundColor = "white"
    
}
}
