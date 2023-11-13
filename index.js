const divContainer = document.createElement('container')
const startBttn = document.querySelector("#startGameBttn")
// let gridSize = 0


// document.addEventListener('DOMContentLoaded', () => {
//     gridSize = prompt("What should the grid size be?")
// })

// console.log(gridSize)

startBttn.addEventListener('click', generateGrid)

function generateGrid() {
    document.body.appendChild(divContainer);
    divContainer.setAttribute('class', 'gridContainer')
    for (let i = 0; i < 256; i++) {
        let grid = document.createElement('div')
        divContainer.appendChild(grid)
        grid.setAttribute('class', 'gridDiv')
    } startBttn.remove()

    let etchGrids = document.querySelectorAll(".gridDiv")

    etchGrids.forEach(etchGrid => {
        etchGrid.addEventListener("mousedown", (e) => {
            e.target.style = "background-color: red"
        });

        etchGrid.addEventListener("mouseover", (e) => {
            if (e.buttons === 1) {
                e.target.style = "background-color: red"
            }
        });
    });
    let deleteBttn = document.createElement('input')
    deleteBttn.setAttribute('class', 'eraseCont')
    deleteBttn.setAttribute('type', 'button')
    deleteBttn.setAttribute('value', 'Erase')
    let eraseButtonContainer = document.createElement('div')
    eraseButtonContainer.setAttribute('class', 'eraseCont')
    document.body.appendChild(eraseButtonContainer)
    eraseButtonContainer.appendChild(deleteBttn)

    deleteBttn.addEventListener('click', () => {
        etchGrids.forEach(etchGrid => {
            etchGrid.style = 'background-color: white'
        })
    })
}


