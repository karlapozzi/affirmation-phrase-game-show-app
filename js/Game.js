//Game class

class Game {

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

  startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  }

  handleInteractions(button, letter) {
    button.disabled = true;
    if (this.activePhrase.checkLetter(letter)) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        this.gameOver();
      }
    } else {
      button.classList.add('wrong');
      this.removeLife();
    }
  }

  removeLife() {
    const tries = document.getElementsByClassName('tries');
    tries[this.missed].firstElementChild.src = "images/lostHeart.png";
    this.missed += 1; 
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  checkForWin() {
    return (document.getElementsByClassName('hide').length ? 0 : true);
  }

  gameOver() {
    const overlay = document.getElementById('overlay');
    const message = document.querySelector('h1');
    document.querySelector('button').textContent = 'Play Again?';
    overlay.style.display = 'block';
    if (this.checkForWin()) {
      overlay.className = 'win';
      message.textContent = 'Phrase HUNTED, you win!!'
    } else {
      overlay.className = 'lose';
      message.textContent = 'The phrase escaped you. Better luck next time.'
    }
  }

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