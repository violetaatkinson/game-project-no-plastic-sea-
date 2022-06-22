class Health {
    constructor(ctx, type) {
        this.ctx = ctx;
        this.h = 27;
        this.w = 27;
        this.y = 0 - this.h;
        this.x = Math.floor(Math.random() * (CANVAS_WIDTH - 200) + 200);
        this.vy = +2;
        this.type = type;

        this.types = {
            // key: [url img, width, height, x, y]
            life: ['/img/life.png', 30, 35, this.x, this.y],
            hazard: ['/img/hazard.png', 30, 35, this.x, this.y]
        }

        this.img = new Image();
        this.img.src = this.types[this.type][0];
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    }

    move() {
        this.y += this.vy
    }
}