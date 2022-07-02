class Submarine {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;
    this.x = CANVAS_WIDTH / 6
    this.y = CANVAS_HEIGHT / 2
    this.w = 164;
    this.h = 87;
    this.color = 'blue';
    this.img = new Image();
    this.img.src = "/img/submarine.png";
    this.injuredSubmarine = new Image();
		this.injuredSubmarine.src = "/img/submarine - injured.png";
    this.vx = 0;
    this.vy = 0;

    this.health = 7;
    this.damage = 1;

    this.isInjured = false;

    this.actions = {
      up: false,
      down: false,
      left: false,
      right: false,
      enter: false
    }


    this._setListeners()
    this.weapon = new Weapon(this)
  }

  move() {
    this._applyActions()
    this.x += this.vx;
    this.y += this.vy;
    this.weapon.move();
  }

  _setListeners() {
    document.onkeydown = e => this._switchAction(e.keyCode, true)
    document.onkeyup = e => this._switchAction(e.keyCode, false)
  }
  _applyActions() {
    if (this.actions.up) {
      if (this.y <= 0) {
        this.vy = 0;
      } else {
        this.vy = -2;
      }

    } else if (this.actions.down && this.y + this.h <= this.ctx.canvas.height) {
      this.vy = 2;

    } else {
      this.vy = 0;

    }


    if (this.actions.right) {
      if (this.x + this.w >= this.ctx.canvas.width) {
        this.vx = 0;
      } else {
        this.vx = 4

      }

    } else if (this.actions.left) {
      if (this.x <= 0) {
        this.vx = 0
      } else {
        this.vx = -4
      }
    } else {
      this.vx = 0
    }


    if (this.actions.enter) {
      this.weapon.shoot();
      
    }
  }

  _switchAction(key, apply) {
    switch (key) {
      case LEFT:
        this.actions.left = apply
        break;
      case RIGHT:
        this.actions.right = apply
        break;
      case UP:
        this.actions.up = apply
        break;
      case DOWN:
        this.actions.down = apply
        break;
      case ENTER:
        this.actions.enter = apply
        break;
    }
  }

  receiveDamage(damage) {
    /*if(!this.receivingDamage) {
      this.receivingDamage = true;*/
      this.health -= damage
    
     /* setTimeout(() => {
        this.receivingDamage = false;
      }, 3000);*/
    
      return this.health
    /*}*/
  }

  draw() {
    
    this.weapon.draw()
    if (!this.game.isInjured) {
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)}

      else {
      this.ctx.drawImage(this.injuredSubmarine, this.x, this.y, this.w, this.h)
      setTimeout(() => {
        this.game.isInjured = false;
      },500)
      
    }
  }
}

