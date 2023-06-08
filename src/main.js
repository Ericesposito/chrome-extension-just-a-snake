// GAME PLAN

// game is listening for keydowns, and keyCount is incrementing

// if keyCount === 15, play thunder rumbling atmosphere

// if keyCount === 25, play creaky door sound

// if keyCount === 35, play werewolf howl

// if 

// suddenly stop thunder rumbling

// jump scare
 
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const head = new Head(board);
  let apple = new Apple(board);

  let keyCount = 0;
  let randomNum;

  body.addEventListener('keydown', (e) => {
    
    keyCount += 1;

    if (keyCount === 5) {
      const doorSound = new Audio('src/sounds/door.mp3');
      doorSound.volume = 0.7;
      doorSound.play();
    }

    if (keyCount === 25) {
      const castleSound = new Audio('src/sounds/spooky-castle.mp3');
      castleSound.volume = 0.5;
      castleSound.play();
    }
    
    if (keyCount === 45) {
      const wolfSound = new Audio('src/sounds/werewolf.mp3');
      wolfSound.volume = 0.9;
      wolfSound.play();
    }

    console.log(keyCount);
    if (keyCount >= 65) {
      randomNum = Math.floor(10 * (Math.random()));
      console.log(randomNum)
    }
    
    
    if (keyCount >= 55 && randomNum === 5) {
      alert('What did the Junior say when watching Senior OSP presentations?')
      // Below will be the audio and scary face scenario
      
      // once you press ok...

      // trigger the ending "boo" and the scream and scary face

      
      const screamSound = new Audio('src/sounds/scream.mp3');
      // adjust between 0 and 1
      screamSound.volume = 0.9;

      screamSound.play();

      // display image
      const scaryFaceImg = document.createElement('img');
  
      scaryFaceImg.src = 'https://avatars.mds.yandex.net/get-pdb/939186/9d689942-9dad-4701-92d8-0b4f1130b168/s1200?webp=false';
      

      // css - make the scary face image be in the middle of the screen

      scaryFaceImg.style.position = 'fixed';
      scaryFaceImg.style.top = '50%';
      scaryFaceImg.style.left = '50%';
      scaryFaceImg.style.transform = 'translate(-50%, -50%)';

      // attach image to document body
      document.body.appendChild(scaryFaceImg);
      console.log(scaryFaceImg);
    }

    if (e.code === 'ArrowLeft' && head.currentDirection !== 'right') {
      console.log('pressed left');
      head.currentDirection = 'left';
    }
    if (e.code === 'ArrowRight' && head.currentDirection !== 'left') {
      console.log('pressed right');
      head.currentDirection = 'right';
    }
    if (e.code === 'ArrowUp' && head.currentDirection !== 'down') {
      console.log('pressed up');
      head.currentDirection = 'up';
    }
    if (e.code === 'ArrowDown' && head.currentDirection !== 'up') {
      console.log('pressed down');
      head.currentDirection = 'down';
    }
    if (head.getXaxis === apple.getXaxis && head.getYaxis === apple.getYaxis){
    
      apple.node.remove();
      apple = new Apple(board);
      board.appendChild(apple);
    }


  });


  //helper function


});


// helper