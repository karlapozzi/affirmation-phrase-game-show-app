//Game class

class Game {

//When a new game is created, missed guesses set to zero, phrase objects created, and active phrase set to null
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('Brando'),
      new Phrase('Karla'),
      new Phrase('Nellie'),
      new Phrase('Konan'),
      new Phrase('Pozzi')
    ];
    this.activePhrase = null;
  }

//Method to start the game by hiding overlay and getting, then displaying, a random phrase
  startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

//Method to get a random phrase from the Game object
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  }

//Method to handle player's interactions/guesses 
  handleInteractions(button, letter) {
    button.disabled = true;
    //If the guess is right, mark keyboard letter as chosen and show matched letters in phrase
    if (this.activePhrase.checkLetter(letter)) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letter);
    //If the guess reveals the full phrase, the game is over!
      if (this.checkForWin()) {
        this.gameOver();
      }
    //If the guess is wrong, disable keyboard letter by marking as wrong and remove a life
    } else {
      button.classList.add('wrong');
      this.removeLife();
    }
  }

//Method to remove a life by updating HTML heart image and increasing missed guess count
  removeLife() {
    const tries = document.getElementsByClassName('tries');
    tries[this.missed].firstElementChild.src = "images/lostHeart.png";
    this.missed += 1; 
    //If missed guess count gets to 5, the player loses
    if (this.missed === 5) {
      this.gameOver();
    }
  }

//Method to check for win
  checkForWin() {
    //The player wins by "showing"/guessing all the letters, which means hidden letter count would be 0
    return (document.getElementsByClassName('hide').length ? 0 : true);
  }

//Method to handle the game ending
  gameOver() {
    const overlay = document.getElementById('overlay');
    const message = document.querySelector('h1');
    document.querySelector('button').textContent = 'Play Again?';
    overlay.style.display = 'block';
    //If the player wins, show win phrase and overlay
    if (this.checkForWin()) {
      overlay.className = 'win';
      message.textContent = 'Phrase HUNTED, you win!!'
    //If not, that means they lost and lose phrase and overlay is shown 
    } else {
      overlay.className = 'lose';
      message.textContent = 'The phrase escaped you. Better luck next time.'
    }
  }

//Method to reset the game by clearing phrase letters, heart guesses/lives, and keyboard guesses 
  resetGame() {
    document.querySelector('ul').innerHTML = '';
    const tries = document.getElementsByClassName('tries');
    let keys = document.getElementsByClassName('key');
    for (let i = 0; i < keys.length; i++) {
      keys[i].className = 'key';
      keys[i].disabled = false;
    }
    for (let i = 0; i < tries.length; i++) {
      tries[i].firstElementChild.src = "images/liveHeart.png";
    }
  }

}