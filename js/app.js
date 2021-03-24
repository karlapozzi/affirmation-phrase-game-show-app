//Create a new game
let game = null;
const playButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');

playButton.addEventListener('click', () => {
  game = new Game();
  game.resetGame();
  game.startGame();
});

keyboard.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    game.handleInteractions(event.target, event.target.textContent);
  }
});