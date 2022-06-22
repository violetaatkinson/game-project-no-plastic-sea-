class Game {
	constructor(ctx) {
		this.ctx = ctx;
		this.intervalId = null;
		this.background = new Background(this.ctx);
		this.trashes = [];
		this.healths = [];
		this.obstacles = [];
		this.submarine = new Submarine(this.ctx);
		this.tickObstacle = 0;
		this.tickTrash = 0;
		this.tickHealth = 0;
	}

	start() {
		this.intervalId = setInterval(() => {
			this.clear();
			this.draw();
			this.checkCollisions();
			this.move();
			this.tickObstacle++;
			this.tickTrash++;
			this.tickHealth++;

			if (this.tickObstacle % 400 === 0) {
				this.tickObstacle = 0;
				this.addObstacle();
			}

			if (this.tickTrash % 180 === 0) {
				this.tickTrash = 0;
				this.addTrash();
			}

			if (this.tickHealth % 450 === 0) {
				this.tickHealth = 0;
				this.modifyHealth();
			}
		}, 1000 / 60);
	}

	clear() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}

	move() {
		this.background.move();
		this.submarine.move();
		this.obstacles.forEach((obs) => obs.move());
		this.trashes.forEach((trs) => trs.move());
		this.healths.forEach((hs) => hs.move());
	}

	draw() {
		this.background.draw();
		this.submarine.draw();
		this.obstacles.forEach((obs) => obs.draw());
		this.trashes.forEach((trs) => trs.draw());
		this.healths.forEach((hs) => hs.draw());
	}

	addObstacle() {
		this.obstacles.push(new Obstacle(this.ctx));
	}

	addTrash() {
		const trasharr = ["mask", "can", "water", "coke", "bag", "garbage"];

		this.trashes.push(
			new Trash(this.ctx, trasharr[Math.floor(Math.random() * trasharr.length)])
		);
	}

	clearTrashes() {
		this.trashes = this.trashes.filter((trs) => trs.isVisible());
	}

	modifyHealth() {
		const healtharr = ["life", "hazard"];

		this.healths.push(
			new Health(
				this.ctx,
				healtharr[Math.floor(Math.random() * healtharr.length)]
			)
		);
	}

	checkCollisions() {
		this.trashes.forEach((trs, index) => {
			const prevTorpedosLength = this.submarine.weapon.torpedos.length;

			this.submarine.weapon.torpedos = this.submarine.weapon.torpedos.filter(
				(torpedo) => {
					return !trs.collideWidth(torpedo);
				}
			);

			if (prevTorpedosLength !== this.submarine.weapon.torpedos.length) {
				this.trashes.splice(index, 1);
			}
		});
	}
}

