const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)
const startBtn = document.getElementById('start-btn')
const lifes = document.querySelectorAll('.life')

startBtn.addEventListener('click', (life) => {
  if (game.intervalId === null) {
    game.start()
    for (life of lifes) {
      life.classList.remove('visibility')
    }
  }
})





// cuando colisiono con una toxina o ballena se me quite un corazon 
// cuando toco un corazon que pueda recuperar vida
// que aparezca el score y cada vez que dispare a una basura sume puntos
// y reste puntos si disparo a una ballena/ toxina y tambien que reste puntos si la basura pasa al fondo del mar y no le di antes