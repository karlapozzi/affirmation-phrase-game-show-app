//Create a new game
let game = null;
const playButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');

//Listen for clicks on the start/play game button
playButton.addEventListener('click', () => {
  game = new Game();
  game.resetGame();
  game.startGame();
});

//Listen for clicks on the game's keyboard buttons
keyboard.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    game.handleInteractions(event.target, event.target.textContent);
  }
});