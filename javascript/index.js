const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)
const startBtn = document.getElementById('start-btn')
const life = document.querySelectorAll('.life')

startBtn.addEventListener('click', () => {
    if (game.intervalId === null) {  
      game.start()
    
    }
  })