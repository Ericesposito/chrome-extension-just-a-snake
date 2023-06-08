// class Body{
//     constructor(el) {
//     this.node = document.createElement('div');
//     this.node.setAttribute('id', 'body');
//     el.appendChild(this.node);

//     this.currentDirection = 'right';
//     this.SPEED =750;

//     this.node.style.top = (head.getYaxis - 50).toString() + 'px';
//     this.node.style.left = (head.getXaxis - 50).toString() + 'px';

//     // Refactor the below line to create a bound version of `this.Move`.
//     // We must do this in order to retain the context of `this` in an asynchronous setTimeout call
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
//     this.boundMove = this.move;

//     // const interval = setInterval(() => this.boundMove(), this.SPEED);
    
//   }

//   get getYaxis(){
//     return this.node.style.top;
//   }

//   get getXaxis(){
//     return this.node.style.left;
//   }
// }