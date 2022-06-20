class Submarine {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = CANVAS_WIDTH / 6
    this.y = CANVAS_HEIGHT / 2
    this.w = 164;
    this.h = 87;
    this.color = 'blue';
    this.img = new Image();
    this.img.src = "/img/submarine.png";
    this.vx = 0;
    this.vy = 0;

    this.actions = {
      up: false,
      down: false,
      left: false,
      right: false
    }


    this._setListeners()
  }

  move() {
    this._applyActions()
    this.x += this.vx;
    this.y += this.vy;
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
    
    
    if(this.actions.right) {
      if (this.x  + this.w >= this.ctx.canvas.width){
        this.vx = 0;
      } else{
        this.vx = 2
      
      }
      
    } else if(this.actions.left){
      if (this.x <= 0) {
        this.vx = 0
      } else {
        this.vx = -2
      }
    } else {
      this.vx = 0
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
    }
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }
}