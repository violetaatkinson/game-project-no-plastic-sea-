class obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        this.w = 214;
        this.h = 113;
        this.randomY = Math.random() * 200 + 30;
        this.x = CANVAS_WIDTH /2;
        this.img = new Image();
        this.img.src = "/img/orca.png";
        this.vx = -2;
        this.vy =2

    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.randomY, this.w, this.h)

    }

    move() {
       this.x -= vx
        this.y += vy

    }
    
    collide(el) {
        const collideX = el.x + el.w > this.x && el.x < this.x + this.w
        const collideY = el.y < this.y + this.h && el.y + el.h > this.y
    
        return collideX && collideY
      }
}

