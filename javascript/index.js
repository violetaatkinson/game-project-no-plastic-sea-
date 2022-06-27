const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)
const startBtn = document.getElementById('start-btn')
const lifes = document.querySelectorAll('.life')
const containerHearts = document.getElementById('hearts')
const points = document.getElementById('points')
const title = document.querySelector('h1')
const buttons = document.getElementById('buttons')

startBtn.addEventListener('click', (life, point) => {
  if (game.intervalId === null) {
    const gameBoardNode = document.getElementById('game-board');
    gameBoardNode.classList.add('visibility');
    game.start()
    title.classList.remove('visibility')
    for (life of lifes) {
      life.classList.remove('visibility')
    }
    for (point of points) {
      point.classList.remove('visibility')
    }
   
  }
})






