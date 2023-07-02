import { StandingLeft, StandingRight, WalkingLeft, WalkingRight } from "./state.js";

export default class Player {
  constructor(gameWidth, gameHeight){
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.state = [
      new StandingRight(this),
      new StandingLeft(this),
      new WalkingRight(this),
      new WalkingLeft(this)
    ];
    this.currentState = this.state[0];
    this.image = document.getElementById('spritesheet');
    this.width = 100;
    this.height = 50;
    this.spriteHeightOffset = 0;
    this.x = (this.gameWidth/2)-(this.width/2);
    this.y = this.gameHeight - this.height;
    this.frameX = 0;
    this.frameY = 0;
    this.frameDirection = 1;
    this.leftFrameYOffset = 0;
    this.leftFrameXOffset = 13;
    this.numberOfFrames = 0;
    this.speed = 0;
    this.maxSpeed = 10;
  }

  draw(context){
    if (this.frameDirection > 0) {
      if (this.frameX < this.numberOfFrames - 1) this.frameX++;
      else this.frameX = 0;
    } else {
      if ( this.frameX > this.leftFrameXOffset - this.numberOfFrames + 1 ) this.frameX--;
      else this.frameX = this.leftFrameXOffset;
    }

    context.drawImage(this.image, this.width * this.frameX, this.frameY + this.leftFrameYOffset, this.width, this.height + this.spriteHeightOffset, this.x, this.y - this.spriteHeightOffset, this.width, this.height + this.spriteHeightOffset);
  }

  update(lastKeyInput){
    this.currentState.handleInput(lastKeyInput);
    this.x += this.speed;
    if (this.x <= 0) {
      this.x = 0;
    }
    else if ( this.x >= this.gameWidth - this.width ){
      this.x = this.gameWidth - this.width;
    }
  }

  setState(newState){
    this.currentState = this.state[newState];
    this.currentState.enter();
  }
}
