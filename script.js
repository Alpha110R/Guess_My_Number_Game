'use strict';
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let flagWin = false;


document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    restartGame();
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('🤷‍♂️ No Number!');
    } else {
        if (flagWin == false) {
            if (guess === secretNumber) {
                winGame(score, highScore);
            } else {
                score--;
                if (score < 1) {
                    loseGame();
                }
                else {
                    hintToGuessTheNumber(guess, secretNumber, score);
                }
            }
        }
        else {
            if (score > 0)
                displayMessage('🙌👏 YOU WON ALREADY!');
        }
    }
});

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    flagWin = false;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
}

const winGame = function (score, highScore) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉Correct number');
    flagWin = true;
    checkHighScore(score, highScore);
}

const checkHighScore = function (score, highScore) {
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}

const loseGame = function () {
    document.querySelector('body').style.backgroundColor = '#DC143C';
    displayMessage('😢YOU LOST THE GAME');
    document.querySelector('.score').textContent = 0;
    flagWin = true;
}

const hintToGuessTheNumber = function (guess, secretNumber, score) {
    displayMessage(guess < secretNumber ? 'The guess is too low, go higher!' : 'The guess is to high, go lower!');
    document.querySelector('.score').textContent = score;
}



