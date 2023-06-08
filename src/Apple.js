class Apple{
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.jpg');

    const apple = el.appendChild(this.node);

    // When game resets, maybe removeChild and re-appendChild? 
    
    let leftNum =  Math.floor(12 * Math.random())*50;
    let topNum =  Math.floor(12 * Math.random())*50;

    this.node.style.left = leftNum.toString() + 'px';
    this.node.style.top = topNum.toString() + 'px';
  }
  

  get getXaxis(){
    return this.node.style.left;
  }

  get getYaxis(){
    return this.node.style.top;
  }

  set setXaxis(newCoord) {
    console.log('hello from inside setXaxis')
    this.node.style.left = newCoord.toString() +'px';
  }
  set setYaxis(newCoord) {
    this.node.style.top = newCoord.toString() + 'px';
  }
}

