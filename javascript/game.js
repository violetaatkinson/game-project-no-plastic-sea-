class Game {
	constructor(ctx) {
		this.ctx = ctx;
		this.intervalId = null;
		this.background = new Background(this.ctx);
		this.trashes = [];
		this.healths = [];
		this.obstacles = [];
		this.turtles = []
		this.submarine = new Submarine(this.ctx);
		this.tickObstacle = 0;
		this.tickTurtle = 0;
		this.tickTrash = 0;
		this.tickHealth = 0;
		this.score = 0;
		this.sound = new Audio();
		this.sound.src = '/audio/01. Yellow Submarine (Original Uk Mono Mix).mp3';

	}

	start() {
		this.intervalId = setInterval(() => {
			this.clear();
			this.draw();
			this.checkCollisions();
			this.sound.play();
			console.log(this.score)
			this.move();
			this.tickObstacle++;
			this.tickTurtle++;
			this.tickTrash++;
			this.tickHealth++;

			if (this.tickObstacle % 400 === 0) {
				this.tickObstacle = 0;
				this.addObstacle();
			}


			if (this.tickTurtle % 300 === 0) {
				this.tickTurtle = 0;
				this.addTurtle();
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
		this.turtles.forEach((tur) => tur.move());
		this.trashes.forEach((trs) => trs.move());
		this.healths.forEach((hs) => hs.move());
	}

	draw() {
		this.background.draw();
		this.submarine.draw();
		this.obstacles.forEach((obs) => obs.draw());
		this.turtles.forEach((tur) => tur.draw());
		this.trashes.forEach((trs) => trs.draw());
		this.healths.forEach((hs) => hs.draw());
	}

	addObstacle() {
		this.obstacles.push(new Obstacle(this.ctx));
	}

	addTurtle() {
	this.turtles.push(new Turtles(this.ctx));
		
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

	
	createLife() {
		if(this.submarine.health < 7) {
			const containerHearts = document.getElementById('hearts')
			const newLife = document.createElement('img')
			newLife.classList.add('life')
			newLife.src = '/img/life.png'
			newLife.alt = 'life'
			containerHearts.appendChild(newLife)
			this.submarine.health++
		}
		
	}

	removePoints(){
		if(this.submarine.weapon.torpedo) {
			
			this.score -= 5;
		}
		console.log(this.score)
	}

	removeLife() {
		const lifes = document.querySelectorAll('.life')
		const lifesLength = lifes.length
		lifes[lifesLength - 1].remove()
		this.submarine.receiveDamage(1)

	}

	checkCollisions() {
		// trashes colison and erases trash and torpedo
		this.trashes.forEach((trs, index) => {
			const prevTorpedosLength = this.submarine.weapon.torpedos.length;

			this.submarine.weapon.torpedos = this.submarine.weapon.torpedos.filter(
				(torpedo) => {
					return !trs.collideWidth(torpedo);
				}
			);

			if (prevTorpedosLength !== this.submarine.weapon.torpedos.length) {
				this.trashes.splice(index, 1);
				 this.score += 10
			}
		});

		// submarine colision with hearts and toxins
		this.healths.forEach((hls,index) => {
			if (hls.collide(this.submarine) && hls.type === 'life') {
				this.healths.splice(index, 1)
				this.createLife()
			} else if (hls.collide(this.submarine) && hls.type === 'hazard') {
				this.healths.splice(index, 1)
				this.removeLife()
			}
		})

       // sumarine colision with whale less life and erase whale
		this.obstacles.forEach((obs, index) => {
			if (obs.collide(this.submarine)) {
				this.obstacles.splice(index, 1)
				this.removeLife()

				console.log('message')
				
			}
			if (this.submarine.health <= 0) {
				this.endGame()
				this.gameOver()
			}
		})

		this.turtles.filter(tur => !tur.isFree).forEach((tur, index) => {
			const prevTorpedosLength = this.submarine.weapon.torpedos.length;
			this.submarine.weapon.torpedos = this.submarine.weapon.torpedos.filter(
				(torpedo) => {
					return !tur.collide(torpedo);
				}
			);

			if (prevTorpedosLength !== this.submarine.weapon.torpedos.length) {
				tur.isFree = true;
				this.score += 10
			}
		})
	}

	endGame() {
		clearInterval(this.intervalId);
		this.intervalId = null;

		this.ctx.beginPath();
		this.ctx.fillStyle = 'black'
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.ctx.closePath();
	}

	gameOver() {
		clearInterval(this.intervalId);
		this.intervalId = null;
		this.ctx.font = "30px Arial";
		this.ctx.fillStyle = "white";
		this.ctx.textAlign = "center";
		this.ctx.fillText("GAME OVER", this.ctx.canvas.width / 2, this.ctx.canvas.height / 3);
		const dataBoardNode = document.getElementById("data-board");
		dataBoardNode.classList.add('visibility');
	}
}
