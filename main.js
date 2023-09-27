//Letters
let letters = "abcdefghijklmnopqrstuvwxyz";

//Get Array From Letters
let lettersAraay = Array.from(letters);

//Select Letters Container
let lettersContainer = document.querySelector(".letters");

//Generate Letters
lettersAraay.forEach((letter) => {
  //Create Span
  let span = document.createElement("span");
  //Create Letter TextNode
  let theLetter = document.createTextNode(letter);
  //Apend The Letter To Span
  span.appendChild(theLetter);
  //Add Class on Span
  span.className = "letter-box";
  //Append Span To letters Container
  lettersContainer.appendChild(span);
});

// Object Of Words + Category

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

//Get Rondom Property

let allKeys = Object.keys(words);

//Rondom Number Depend On Keys Length
let rondomPropNumber = Math.floor(Math.random() * allKeys.length);

//Category
let rondomPropName = allKeys[rondomPropNumber];

//Category Words
let rondomPropValue = words[rondomPropName];

//Rondom Number Depend On Keys Words
let rondomValueNumber = Math.floor(Math.random() * rondomPropValue.length);

//The Choosen Word
let rondomValueValue = rondomPropValue[rondomValueNumber];

//Set Category Info
document.querySelector(".game-info .category span").innerHTML = rondomPropName;

//Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

//Covert Choosen Word To Array
let lettersAndSpace = Array.from(rondomValueValue);

//Create Spans Depends On Word
lettersAndSpace.forEach((letter) => {
  //Create Empty Span
  let emptySpan = document.createElement("span");
  //If Letters Is Space
  if (letter === " ") {
    //Add Class To The Span
    emptySpan.className = "has-space";
  }
  //Append Spans To The Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);
});

//Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

//Set Wrong Attempts
let worngAttempts = 0;
let rightAttemps = 0;
// Select The Drow Element
let theDrow = document.querySelector(".hangman-drow");

// Handel Clicking On Letters
document.addEventListener("click", (e) => {
  //Set The Choose Status
  let theStatus = false;
  if ((e.target.className = "letter-box")) {
    e.target.classList.add("clicked");
    //Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    //The Choosen Word
    let choosenWord = Array.from(rondomValueValue.toLowerCase());
    choosenWord.forEach((wordLetter, wordIndex) => {
      //If The Clicked Letter Equal To One Of The Choosen Word Letter
      if (theClickedLetter == wordLetter) {
        //Set Status To Correct
        theStatus = true;
        //Loop On All Guess Spans
        guessSpans.forEach((span, spanIndex) => {
          //Find Span
          if (wordIndex === spanIndex) {
            rightAttemps++;
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });
    //Out Side Loop
    //If Letter Is Wrong
    if (theStatus !== true) {
      //Increase The Wrong Attempts
      worngAttempts++;
      //Add Class Wrong On The Drow Element
      theDrow.classList.add(`wrong-${worngAttempts}`);
      //Play Fail Sound
      document.getElementById("fail").play();
      if (worngAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
    } else if (rightAttemps == lettersAndSpace.length) {
      winGame();
    } else {
      //Play Success Sound
      document.getElementById("success").play();
    }
  }
});

//End Game Function

function endGame() {
  //Create Popup Div
  let div = document.createElement("div");

  //Create TextNode
  let divText = document.createTextNode(
    `Game Over, The Word Is ${rondomValueValue}`
  );

  //Append Text To Div
  div.appendChild(divText);

  //Add Class On Div
  div.className = "popup";

  //Append To The Body
  document.body.appendChild(div);
}

function winGame() {
  //Create Popup Div
  let div = document.createElement("div");

  //Create TextNode
  let divText = document.createTextNode(
    `Congratulations, The Word Is ${rondomValueValue}`
  );

  //Append Text To Div
  div.appendChild(divText);

  //Add Class On Div
  div.className = "popup";

  //Append To The Body
  document.body.appendChild(div);
}
