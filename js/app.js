//Create a new game
const game = new Game();
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');

startButton.addEventListener('click', game.startGame());

keyboard.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    game.handleInteractions(event.target, event.target.textContent);
  }
});