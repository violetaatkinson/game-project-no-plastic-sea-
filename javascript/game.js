class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.intervalId = null;
        this.submarine = new Submarine(this.ctx);
        this.background = new Background(this.ctx);
        this.obstacles = [];
        this.tickObstacle = 0
    

    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
            this.tickObstacle++;
           
            if (this.tickObstacle % 100 === 0) {
                this.addObstacle();
            }
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
        this.obstacles.forEach(obs => obs.move())

    }

    draw() {
        this.background.draw()
        this.submarine.draw()
        this.obstacles.forEach(obs => obs.draw())

    }

    addObstacle() {
        this.obstacles.push(new Obstacle(this.ctx));
        
    }

}