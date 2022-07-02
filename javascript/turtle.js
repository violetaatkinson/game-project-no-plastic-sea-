class Turtles {
	constructor(ctx) {
		this.ctx = ctx;
		this.w = 70;
		this.h = 50;
		this.y = Math.floor(Math.random() * (CANVAS_HEIGHT - this.h));
		this.x = 700;
		this.img = new Image();
		this.img.src = "./img/turtle.png";
		this.plasticImg = new Image();
		this.plasticImg.src = "./img/plastic.png";
		this.vx = -1.5;
		this.isFree = false;
	}

	draw() {
		this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
		if (!this.isFree) {
			this.ctx.drawImage(
				this.plasticImg,
				this.x - 15,
				this.y - 25,
				this.w * 1.5,
				this.h * 1.5
			);
		}
	}

	move() {
		this.x += this.vx;
	}

	isVisible() {
        return this.x + this.w >= 0;
    }

	collide(el) {
		const collideX = el.x + el.w > this.x && el.x < this.x + this.w;
		const collideY = el.y < this.y + this.h && el.y + el.h > this.y;

		return collideX && collideY;
	}
}
