class Torpedo{
    constructor(ctx, x, y){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = 36;
        this.h = 36;
        this.vx = 3;
        this.img = new Image();
        this.img.src = "./img/torpedo.png";
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    move() {
        this.x += this.vx;
    }

    isVisible() {
        return this.x < this.ctx.canvas.width;
    }
}