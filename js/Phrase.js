//Phrase class

class Phrase {

  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const list = document.getElementById('phrase').firstElementChild;
    const letters = [];

    for (let i = 0; i < this.phrase.length; i++) {
      letters.push(this.phrase[i]);
    }

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === ' ') {
        list.innerHTML += `<li class="space"> </li>`;
      } else {
        list.innerHTML += `<li class="hide letter ${letters[i]}">${letters[i]}</li>`;
      }
    }
  }  

  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      this.showMatchedLetter(letter);
    }
  }

  showMatchedLetter(letter) {
    const letterListItems = document.querySelector('ul').children;
    for (let i=0; i < letterListItems.length; i++) {
      if (letterListItems[i].textContent === letter) {
        letterListItems[i].className = `show letter ${letter}`;
      }
    }
  }

}
