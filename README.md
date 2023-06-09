# Snake

## Summary

Snake is one of the [first video game genres](https://en.wikipedia.org/wiki/Snake_(video_game_genre)). We will be creating a browser based version using our understanding of OOP and DOM manipulation. This will be your first dynamic, single-page app. It's a game, so have some fun and get creative once the basic functionality is created!

## Learning objectives

- Using JavaScript to change the look and behavior of the DOM
- React to user input
- Utilize object-oriented programming
## Challenges

### Building Snake

1. Three classes have been provided to you

   - Head
   - Body
   - Apple

Because each of the files is included in a script tag on index.html, these three classes are available to our main.js file (which is included AFTER the other script tags). If you need to access classes (or instances of classes) from other classes, you may need to experiment leaving out the `var`, `let`, or `const` keywords. Always be careful when messing with the global scope!

Also keep in mind: in order to call methods on our classes asynchronously (e.g. in a setTimeout callback or event handler), they must be *bound* to their context to prevent the value of `this` from  being lost. This is because when functions are called asynchronously, they do not run in the same scope that they were defined in - so `this` will no longer refer to the same object! 


1. Head Class

   - [ ] Make the head of the snake be able to turn based on the arrow keys
   - [ ] When the head of the snake reaches a border, end the game

1. Apple Class

   - [ ] The apple should appear randomly on the screen
   - [ ] The apple should appear within the size of the board
   - [ ] Remove the apple when the head of the snake reaches the apple
   - [ ] Another apple should appear on the screen
   - [ ] The apple should not appear on the snake

## Extension Challenges

1. Head Class

   - [ ] The head of the snake should not be able to move backwards

1. Body Class

   - [ ] Add a segment to the snake when the head of the snake reaches an apple
   - [ ] End the game when the snake runs into its own segment

1. Make it your own!

   - [ ] Once you've gotten the core functionality down, feel free to have fun! Modify the functionality, look, even sound of your game. Get creative!

1. jQuery
   - [ ] Refactor your code with jQuery!

## Testing

While we can certainly write tests for this unit, the more intuitive approach is to try playing the game by opening `index.html` in your browser.
