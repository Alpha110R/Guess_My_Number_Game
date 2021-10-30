'use strict';
/*console.log(document.querySelector('.message'));// . to choose a class, if we
//wanted to choose ID we need to write # and the ID
document.querySelector('.message').textContent ='🎉 Correct number';
document.querySelector('.guess').value;//gets the value in the input section, to set the value
//I could write .value = 20 and it will display on the browser

document.querySelector('.check').addEventListener('click', function() {//this is the event handler
    console.log(document.querySelector('.guess').value);
})//function is like a value, like an integer or a string so it can be an argument
*/


let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let flagWin = false;
//document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

function restartGame(secretNumber) {
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    flagWin = false;

}



document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.floor(Math.random() * 20) + 1;
    restartGame(secretNumber);
    score = 20;
});

document.querySelector('.check').addEventListener('click', function () {//this is the event handler
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {//if the user didnt write anything in the box and click check, the guess will be 0 and 0 is a false value
        displayMessage('🤷‍♂️ No Number!');
    } else {
        if (flagWin == false) {
            if (guess === secretNumber) {
                //CSS manipulation
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';

                document.querySelector('.number').textContent = secretNumber;
                displayMessage('🎉Correct number');
                if (score > highScore) {
                    highScore = score;
                    document.querySelector('.highscore').textContent = highScore;
                }
                flagWin = true;

            } else {
                score--;
                if (score < 1) {
                    document.querySelector('body').style.backgroundColor = '#DC143C';
                    displayMessage('😢YOU LOST THE GAME');
                    document.querySelector('.score').textContent = 0;
                    flagWin = true; //to get out of the option to win and change the background
                }
                else {
                    // if (guess < secretNumber)
                    //     document.querySelector('.message').textContent = 'The guess is too low, go higher!';
                    // else {
                    //     document.querySelector('.message').textContent = 'The guess is to high, go lower!';
                    // }
                    displayMessage(guess < secretNumber ? 'The guess is too low, go higher!' : 'The guess is to high, go lower!');
                    document.querySelector('.score').textContent = score;
                }
            }
        }
        else {
            if (score > 0)
                displayMessage('🙌👏 YOU WON ALREADY!');
        }
    }
});



