

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');
const misses = document.querySelectorAll('.tries');
let missed = 0;


// eventlistener that that checks to see if the user clicks the Start Game


startButton.addEventListener('click', () => {
    if (overlay.style.display == 'none') {
        listoverlayDiv.style.display = 'block';
    } else {
    overlay.style.display = 'none';

    }
});

// Create a array to hold the phrases

const phrases = [
    'made in javascript',
    'cryptocurrency',
    'i love coding',
    'future developer' ,
    'techdegree project'
];


// Function to randomly choose a phrase from the phrases array.
// Create a variable to store a random number based on the length of the array

function getRandomPhraseAsArray(arr){
    let randomNumber = Math.floor(Math.random() * phrases.length);
    return arr[randomNumber].split([,]);

}

const splitPhrases = getRandomPhraseAsArray(phrases);


//addPhraseToDisplay function that loops through an array of characters

function addPhraseToDisplay(arr){
    let phraseUl = document.querySelector('#phrase ul');

    for (let i=0; i<arr.length; i++){

        let li = document.createElement('li');

        phraseUl.appendChild(li);
        li.textContent = arr[i]; // adding the text content as a seperate li element
    if (arr[i] === ' ') {
      li.classList.add("space"); // this class is for the spaces
    } else {
        li.classList.add("letter"); // give the class of letter to the letters
    }
    }

}
addPhraseToDisplay(splitPhrases);



const letters = document.querySelectorAll('.letter');


// make sure the letters are lowercase, also use their length to check and run through the phrases letters
// give the correct letters a class of show, the matched variable is updated
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

const hearts =  document.querySelectorAll(".tries img");


// add event listener on the keyboard using the click event
// add the class of chosen on the key that's pressed, store these values in the variable
// check if match = null, if so replace one of the full hearts with the empty heart
// change heart by 1 each time up to the 5 missed hearts then lose
//calling the checkwin and the reset functions here as well

  qwerty.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.className = "chosen ";
      e.target.disabled = true;
      const match = checkLetter(e.target.textContent.toLowerCase());
      if (match === null) {
        // change heart icon from live to lost
        hearts[missed].src = 'images/lostHeart.png';
        // add addition incorrect guess 
        missed++;
      }
      checkWin();
    }
    reset();
  });

function checkWin () {
  const show = document.querySelectorAll('.show');
  let title = document.querySelector('.title');
  if(letters.length === show.length) {
    overlay.classList.add("win");
    title.textContent = 'Bingo, You Won!';
    overlay.style.display = 'flex';

  } else if (missed > 4) {
    overlay.classList.add("lose");
    title.textContent = 'Try again, if you dare.';
    overlay.style.display = 'flex';

  }

}

// reload function to the game to refesh page
function reset() {
  startButton.textContent = 'Reset The Game';

  startButton.addEventListener("click", ()  => {
    overlay.style.display = 'flex';
    window.location.reload();

  });
}
