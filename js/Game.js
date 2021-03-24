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
    const buttons = document.getElementsByClassName('key');
    for (let i = 0; i < buttons.length; i++) {
      if (letter === buttons[i].textContent) {
        buttons[i].disabled = true;
      }
    }
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
    let letterItems = document.getElementsByClassName('hide');
    return letterItems.length;
  }

  gameOver() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'initial';
    if (this.checkForWin()) {
      overlay.className = 'win';
    } else {
      overlay.className = 'loss';
    }

  }

}