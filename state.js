export const states = {
  STANDING_RIGHT: 0,
  STANDING_LEFT: 1,
  WALKING_RIGHT: 2,
  WALKING_LEFT: 3,
}

class State {
  constructor(state){
    this.state = state;
  }
}

export class StandingLeft extends State {
  constructor(player){
    super('STANDING_LEFT');
    this.player = player;
  }
  enter(){
    this.player.leftFrameYOffset = 360;
    this.player.frameY = 0;
    this.player.frameX = 13;
    this.player.frameDirection = -1;
    this.player.numberOfFrames = 1;
    this.player.spriteHeightOffset = 0;
    this.player.speed = 0;
  }
  handleInput(input){
    if (input === 'PRESS right') this.player.setState(states.STANDING_RIGHT);
    if (input === 'PRESS left') this.player.setState(states.WALKING_LEFT);
  }
}

export class StandingRight extends State {
  constructor(player){
    super('STANDING_RIGHT');
    this.player = player;
  }
  enter(){
    this.player.leftFrameYOffset = 0;
    this.player.frameY = 0;
    this.player.frameX = 0;
    this.player.frameDirection = 1;
    this.player.numberOfFrames = 1;
    this.player.spriteHeightOffset = 0;
    this.player.speed = 0;
  }
  handleInput(input){
    if (input === 'PRESS left') this.player.setState(states.STANDING_LEFT);
    if (input === 'PRESS right') this.player.setState(states.WALKING_RIGHT);
  }
}

export class WalkingLeft extends State {
  constructor(player){
    super('WALKING_LEFT');
    this.player = player;
  }
  enter(){
    this.player.leftFrameYOffset = 360;
    this.player.frameY = 50;
    this.player.frameX = 13;
    this.player.frameDirection = -1;
    this.player.numberOfFrames = 14;
    this.player.spriteHeightOffset = 10;
    this.player.speed = -this.player.maxSpeed;
  }
  handleInput(input){
    if (input === 'PRESS right') this.player.setState(states.WALKING_RIGHT);
    if (input === 'Release left') this.player.setState(states.STANDING_LEFT);
  }
}

export class WalkingRight extends State {
  constructor(player){
    super('WALKING_RIGHT');
    this.player = player;
  }
  enter(){
    this.player.leftFrameYOffset = 0;
    this.player.frameY = 50;
    this.player.frameX = 0;
    this.player.frameDirection = 1;
    this.player.numberOfFrames = 14;
    this.player.spriteHeightOffset = 10;
    this.player.speed = this.player.maxSpeed;
  }
  handleInput(input){
    if (input === 'PRESS left') this.player.setState(states.WALKING_LEFT);
    if (input === 'Release right') this.player.setState(states.STANDING_RIGHT);
  }
}
