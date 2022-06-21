class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        this.w = 214;
        this.h = 113;
        this.y= Math.floor(Math.random() * (CANVAS_HEIGHT - 200) + 0);
        this.x = 700 ;
        this.img = new Image();
        this.img.src = "/img/orca.png";
        this.vx = -1.5;
        this.vy = 2

        
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    }

    move() {
        this.x += this.vx
       

    }
    
    collide(el) {
        const collideX = el.x + el.w > this.x && el.x < this.x + this.w
        const collideY = el.y < this.y + this.h && el.y + el.h > this.y
    
        return collideX && collideY
      }
}

