let totalScoreP0;
let totalScoreP1;
let dice;

let p0;
let p1;

newGame();
document.querySelector('.btn--new').addEventListener('click', newGame);

function switchPlayers() {
  if (p0.classList.contains('player--active')) {
    p1.classList.add('player--active');
    p0.classList.remove('player--active');
  } else {
    p0.classList.add('player--active');
    p1.classList.remove('player--active');
  }
}

//if user rolls the dice
document.querySelector('.btn--roll').addEventListener('click', () => {
  let activePlayer = document.querySelector('.player--active');
  let currentScoreElement;

  if (activePlayer.classList.contains('player--0')) {
    currentScoreElement = document.querySelector('#current--0');
    console.log('current player 0');
  } else {
    currentScoreElement = document.querySelector('#current--1');
    console.log('current player 1');
  }
  // console.log(currentScoreElement);
  let scoreCurrent = parseInt(currentScoreElement.textContent);
  let dice = document.querySelector('.dice');
  dice.style.display = 'block';
  let number = Math.floor(Math.random() * 6) + 1;
  dice.setAttribute('src', `dice-${number}.png`);
  if (number == 1) {
    currentScoreElement.textContent = 0;
    switchPlayers();
    return;
  }
  scoreCurrent += number;
  // console.log(typeof scoreCurrent);
  currentScoreElement.textContent = scoreCurrent;
});

//if user holds the score
document.querySelector('.btn--hold').addEventListener('click', () => {
  let activePlayer = document.querySelector('.player--active');
  let currentScoreElement;
  let totalScore;
  if (activePlayer.classList.contains('player--0')) {
    currentScoreElement = document.querySelector('#current--0');
    totalScore = document.querySelector('#score--0');
  } else {
    currentScoreElement = document.querySelector('#current--1');
    totalScore = document.querySelector('#score--1');
  }
  totalScore.textContent =
    parseInt(totalScore.textContent) +
    parseInt(currentScoreElement.textContent);

  if (totalScore.textContent >= 100) {
    activePlayer.classList.add('player--winner');
    document.querySelector('.btn--roll').disabled = true;
    document.querySelector('.btn--hold').disabled = true;
  }

  currentScoreElement.textContent = parseInt(0);

  switchPlayers();
});

function newGame() {
  totalScoreP0 = document.querySelector('#score--0');
  totalScoreP1 = document.querySelector('#score--1');
  totalScoreP0.textContent = 0;
  totalScoreP1.textContent = 0;
  dice = document.querySelector('.dice');
  dice.style.display = 'none';
  p0 = document.querySelector('.player--0');
  p1 = document.querySelector('.player--1');
}
