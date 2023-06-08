class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    
    el.appendChild(this.node);

    this.currentDirection = null;
    this.SPEED =350;

    this.node.style.top = '300px';
    this.node.style.left = '300px';

    // Refactor the below line to create a bound version of `this.Move`.
    // We must do this in order to retain the context of `this` in an asynchronous setTimeout call
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    this.boundMove = this.move.bind(this);

    setTimeout(this.boundMove, this.SPEED);
    
  }


  
  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));
    
    if (direction === 'right') {
      head.style.left = `${(leftPosition += 50)}px`;
    }
    if (direction === 'left') {
      head.style.left = `${(leftPosition -= 50)}px`;
    }
    if (direction === 'up') {
      head.style.top = `${(topPosition -= 50)}px`;
    }
    if (direction === 'down') {
      head.style.top = `${(topPosition += 50)}px`;
    }


    
    if (leftPosition < 0 || leftPosition + 100 > 650 || topPosition < 0 || topPosition + 100 > 650) {
      return alert('GAME OVER');
    }
    // const moveTimeout = setTimeout(() => this.boundMove(), this.SPEED);
    // moveTimeout();
    setTimeout(this.boundMove, this.SPEED);
  }


  get getYaxis(){
    return this.node.style.top;
  }

  get getXaxis(){
    return this.node.style.left;
  }


}
