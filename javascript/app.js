// Get the element with the ID of qwerty and save it to a variable.
const qwerty = document.getElementById('qwerty');
// Get the element with the ID of phrase and save it to a variable.
const phrase = document.getElementById('phrase');
// Create a missed variable, initialized to 0
var missed = 0;
const beginButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
var letters = document.getElementsByClassName('letter');
const hearts = scoreboard.getElementsByTagName('IMG');
// Attach a event listener to the “Start Game” button to hide the start screen overlay.
beginButton.addEventListener('click', () => {
    if (overlay.style.display == 'none') {
        listoverlayDiv.style.display = 'block';
    } else {
    overlay.style.display = 'none';

    }
});

// Create a phrases array that contains at least 5 different phrases as strings.
const phrases = [
    'made in javascript',
    'teamtreehouse is the best',
    'i love coding',
    'future developer' ,
    'techdegree project'
];
// Create a getRandomPhraseAsArray function.

function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in
    let randomNumber = arr.length;
    let i = Math.floor(Math.random() * randomNumber);
    arr[i].split('');
    return arr[i];

}

const phraseArray = getRandomPhraseAsArray(phrases);

//Set the game display.

function addPhraseToDisplay(arr){
  let phrase = document.querySelector('#phrase ul');
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i < arr.length; i++) {
      let ul = document.querySelector('#phrase ul');
      let li = document.createElement('li');
      phrase.appendChild(li);
      li.append(arr[i]);

    if (arr[i] === ' ') {
        li.classList.add('space');
    } else {
      li.classList.add('letter');

    }


    }
}
addPhraseToDisplay(phraseArray);
// Create a checkLetter function.

const checkLetter = (button) => {
    let matched = null;
    for (i = 0; i < letters.length; i++) {
        if (button === letters[i].textContent.toLowerCase()) {
          letters[i].classList.add("show");
          matched = true;
        }
    }
    return matched;
};

qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === "BUTTON") {
      e.target.className = "chosen";
      e.target.disabled = true;
      const match = checkLetter(e.target.textContent.toLowerCase());
      if (match === null) {
        hearts[missed].src = 'images/lostHeart.png';
        missed++;
      }
checkWin();
  }
  reset();

});

// Create a checkWin function.

function checkWin () {
  const show = document.querySelectorAll('.show');
  let title = document.querySelector('.title');

  if (letters.length === show.length) {
    overlay.classList.add("win");
    title.textContent = "Congratulations, you won!";
    overlay.style.display = 'flex';
  } else if (missed > 4) {
    overlay.classList.add('lose');
    title.textContent = 'Sorry, try again if you dare.';
    overlay.style.display = 'flex';
  }
};

// Add a button to the “success” and “failure” screens that reset the game.
function reset() {
  beginButton.textContent = 'Try Again';
  beginButton.addEventListener("click", () => {
    overlay.style.display = 'flex';
    window.location.reload();


  });





}
