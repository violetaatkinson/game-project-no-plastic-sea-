const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)
const containerHearts = document.getElementById('hearts')
const buttonsBoardNode = document.getElementById('menu-board');
const dataBoardNode = document.getElementById("data-board");

// Main buttons
const startBtn = document.getElementById('start-btn')
const howBtn = document.getElementById('how-btn')
const aboutBtn = document.getElementById('about-btn')		
const imgH =  document.getElementById('how')
const imgA = document.getElementById('about')


// On click start 
startBtn.addEventListener('click', () => {
  if (game.intervalId === null) {
    buttonsBoardNode.classList.add('visibility');
    dataBoardNode.classList.remove('visibility');
    game.start()
    if (game.intervalId !== null){
      canvas.classList.remove('canvas')
    }
  }
})


// On click How to play

howBtn.addEventListener('click', () => {
  imgH.classList.remove('visibility')
})

// On click img - How to play

imgH.addEventListener('click', () => {
  imgH.classList.add('visibility')
})

// On click About the game

aboutBtn.addEventListener('click', () => {
  imgA.classList.remove('visibility')
})

// On click img - About the game

imgA.addEventListener('click', () => {
  imgA.classList.add('visibility')
})



