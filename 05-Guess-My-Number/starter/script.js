let number = generate();
console.log(number);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', () => {
  let message = document.querySelector('.message');
  let body = document.querySelector('body');
  let hiddenGuess = document.querySelector('.number');
  let hscore = document.querySelector('.highscore');
  let scr = document.querySelector('.score');
  let guess = document.querySelector('.guess');
  if (body.style.backgroundColor == 'rgb(96, 179, 71)') return;
  if (score == 0) {
    document.querySelector('.message').textContent = '🔒 You Lose';
    message.textContent = '🔒 You Lose';
    body.style.setProperty('background-color', ' #B33F40');
    hiddenGuess.textContent = number;
    return;
  }
  let guessNumber = guess.value;
  if (!guessNumber) {
    message.textContent = '⛔ INVALID INPUT';
    return;
  }
  if (guessNumber == number) {
    hiddenGuess.style.width = '30rem';
    if (score > highScore) highScore = score;
    hscore.textContent = highScore;
    hiddenGuess.innerHTML = number;
    body.style.setProperty('background-color', '#60b347');
    message.textContent = '🎉Correct!';
    return;
  } else if (guessNumber < number)
    document.querySelector('.message').textContent = '📉 Too low';
  else message.textContent = '📈 Too high';
  score--;
  scr.innerHTML = score;
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.number').style.width = '';
  number = generate();
  console.log(number);
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.setProperty('background-color', '#222');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  score = 20;
});

function generate() {
  return Math.floor(Math.random() * 20) + 1;
}
