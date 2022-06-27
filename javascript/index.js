const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)
const startBtn = document.getElementById('start-btn')
const containerHearts = document.getElementById('hearts')
const buttonsBoardNode = document.getElementById('buttons-board');
const dataBoardNode = document.getElementById("data-board");

startBtn.addEventListener('click', () => {
  if (game.intervalId === null) {
    buttonsBoardNode.classList.add('visibility');
    dataBoardNode.classList.remove('visibility');
    game.start()
  }
})






