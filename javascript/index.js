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






//sumar 10 puntos cada vez que disparo a una basura pero si pasa el canvas restar 5 puntos
// sumar 20 puntos si rescato una tortuga, restar 10 si pasa el canvas con plastico
// al final del juego contar cuantas basuras he salvado y lo mismo con las tortugas
// cuando apreto how to play desplegar imagen de las instrucciones de como jugar
// lo mismo para about y tocar algo para volver al menu principal del juego
