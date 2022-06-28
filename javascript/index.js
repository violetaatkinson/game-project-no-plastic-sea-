const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)
const containerHearts = document.getElementById('hearts')
const buttonsBoardNode = document.getElementById('buttons-board');
const dataBoardNode = document.getElementById("data-board");

// Main buttons
const startBtn = document.getElementById('start-btn')
const howBtn = document.getElementsByClassName('how-btn')
const aboutBtn = document.getElementsByClassName('about-btn')		


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







