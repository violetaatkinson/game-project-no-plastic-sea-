class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.intervalId = null;
        this.submarine = new Submarine (this.ctx);
        this.background = new Background(this.ctx)
    }

    start(){
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
          
        }, 1000 / 60)
    }
    
    clear() {
        this.ctx.clearRect(
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
        )
    }
    
    move() {
        this.background.move()
        this.submarine.move()
    }

    draw() {
        this.background.draw()
        this.submarine.draw()
    }
    
}

