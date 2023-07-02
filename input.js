export default class InputHandler {
  constructor(){
    this.lastKey = '';
    window.addEventListener(
      'keydown',
      (event) => {
        switch(event.key){
          case 'ArrowLeft':
            this.lastKey = 'PRESS left';
            break;
          case 'ArrowRight':
            this.lastKey = 'PRESS right';
            break;
          case 'ArrowUp':
            this.lastKey = 'PRESS up';
            break;
          case 'ArrowDown':
            this.lastKey = 'PRESS down';
            break;
          default:
            break;
        }
      }
    );
    window.addEventListener(
      'keyup',
      (event) => {
        switch(event.key){
          case 'ArrowLeft':
            this.lastKey = 'Release left';
            break;
          case 'ArrowRight':
            this.lastKey = 'Release right';
            break;
          case 'ArrowUp':
            this.lastKey = 'Release up';
            break;
          case 'ArrowDown':
            this.lastKey = 'Release down';
            break;
          default:
            break;
        }
      }
    );
  }
}
