const board = document.querySelector('#board')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', 'blue-purple', 'pink','#6ff5ff', '#00ffa6']
const SQUARE_NUMBER = 600

for (let i = 0; i < SQUARE_NUMBER; i++ ){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })


    board.append(square)
}

function setColor(element) {
    const color = getRandomeColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #6ff5ff`
}

function getRandomeColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}