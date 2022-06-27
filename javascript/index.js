const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)
const startBtn = document.getElementById('start-btn')
const lifes = document.querySelectorAll('.life')
const containerHearts = document.getElementById('hearts')
const points = document.getElementById('points')

startBtn.addEventListener('click', (life, point) => {
  if (game.intervalId === null) {
    game.start()
    for (life of lifes) {
      life.classList.remove('visibility')
    }
    for (point of points) {
      point.classList.remove('visibility')
    }
   
  }
})






