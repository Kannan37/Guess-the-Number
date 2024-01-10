'use strict';
let number = document.querySelector('.number');
let guessSolve = Math.trunc(Math.random() * 20) + 1;

// number.textContent = guessNum;
// console.log(typeof guessSolve);

let guess = document.querySelector('.guess');
console.log(guess);
let flag = 0;
let message = document.querySelector('.message');
let scoreval = document.querySelector('.score');
let score = 20;
console.log(scoreval);

let check = document.querySelector('.check');

function clickEvent() {
  if(flag==1){
    location.reload();
  }
  if (!guess.value) {
    message.textContent = '🚫 No number clicked...';
  } 
  else if (guess.value >= 1 && guess.value <= 20) {
    if (guess.value == guessSolve) {
      message.textContent = 'Congralation😍 You Found the Number...';
      number.textContent = guessSolve;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '34rem';
      document.querySelector('.highscore').innerHTML = score;
      document.querySelector('.number').value = guessSolve;
      document.getElementById('check').innerHTML = "Again!";
      flag=1;
      
    } else if (guess.value > guessSolve) {
      if (score > 0) {
        message.textContent = 'Too High...';
        score--;
        scoreval.textContent = score;
      } else {
        message.textContent = 'you lost';
      }
    } else {
      if (score > 0) {
        message.textContent = 'Too Low...';
        score--;
        scoreval.textContent = score;
      } else {
        message.textContent = 'you lost';
      }
    }
  } else {
    message.textContent = 'Click The between 1 to 20...';
  }
}

function refresh(){
  location.reload();
}

// check = addEventListener('click', clickEvent);

// let again = document.querySelector('.btn again');
// function againClick() {
//   score = 20;
//   number.textContent = '?';
//   // guessSolve = Math.trunc(Math.random() * 20) + 1;
//   // message.textContent = 'start guessing...';
// }

// again = addEventListener('click', againClick);
