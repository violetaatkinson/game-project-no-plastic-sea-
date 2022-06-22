class Trash {
    constructor(ctx, type) {
        this.ctx = ctx;
        this.h = 35;
        this.w = 30;
        this.y = 0 - this.h;
        this.x = Math.floor(Math.random() * (CANVAS_WIDTH - 200) + 200);
        this.vy = +2;
        this.type = type;

        //247
        this.types = {
            // key: [url img, width, height, x, y]
            mask: ['/img/trash-1.png', 30, 35, this.x, this.y],
            can: ['/img/trash-2.png', 30, 35, this.x, this.y],
            water: ['/img/trash-3.png', 30, 35, this.x, this.y],
            coke: ['/img/trash-4.png', 30, 35, this.x, this.y],
            bag: ['/img/trash-5.png', 30, 35, this.x, this.y],
            garbage: ['/img/trash-2.png', 30, 35, this.x, this.y]
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

}