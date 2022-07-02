class Trash {
    constructor(ctx, type) {
        this.ctx = ctx;
        this.h = 50;
        this.w = 40;
        this.y = 0 - this.h;
        this.x = Math.floor(Math.random() * (CANVAS_WIDTH - 200) + 200);
        this.vy = +2;
        this.type = type;

        
        this.types = {
            // key: [url img, width, height, x, y]
            mask: ['./img/mask.png', 27, 27, this.x, this.y],
            beer: ['./img/beer.png', 30, 30, this.x, this.y],
            water: ['./img/water.png', 22, 32, this.x, this.y],
            pepsi: ['./img/pepsi.png', 23, 31, this.x, this.y],
            bag: ['./img/plastic-bag.png', 25, 31, this.x, this.y],
            garbage: ['./img/garbage.png', 36, 36, this.x, this.y]
        }

        this.img = new Image();
        this.img.src = this.types[this.type][0];
        
    }

    draw() { 
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    }

    move(){
        this.y += this.vy
    }

    isVisible() {
        return this.y <= this.ctx.canvas.height;
    }

    collideWidth(el) {
        const collideX = el.x + el.w > this.x && el.x < this.x + this.w
        const collideY = el.y < this.y + this.h && el.y + el.h > this.y

        return collideX && collideY
    }
}

