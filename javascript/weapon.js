class Weapon {
    constructor(shooter) {
        this.torpedos = [];
        this.ctx = shooter.ctx
        this.shooter = shooter;

        this.tickTorpedo = 0;
        this.isReloading = false;
        this.torpedosCounter = 0;
    }

    shoot() {
        this.tickTorpedo++;

        if (this.tickTorpedo > 5) {
            this.tickTorpedo = 0;
            if (!this.isReloading) {
                this.torpedos.push(new Torpedo(this.ctx, this.shooter.x + this.shooter.w - 20, this.shooter.y + this.shooter.h / 2));
                this.torpedosCounter++;
            }
        }

        if (this.torpedosCounter === 1) {
            this.isReloading = true;
            this.torpedosCounter = 0;
            setTimeout(() => {
                this.isReloading = false;
            }, 500)
        }

    }

    clearTorpedos() {
        this.torpedos = this.torpedos.filter(torpedo => torpedo.isVisible())
    }

    draw() {
        this.clearTorpedos()
        this.torpedos.forEach(torpedo => torpedo.draw())
    }

    move() {
        this.torpedos.forEach(torpedo => torpedo.move())
    }
}