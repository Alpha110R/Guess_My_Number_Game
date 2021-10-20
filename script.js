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
function startTheGame(secretNumber, score){
    secretNumber = Math.floor(Math.random() * 20)+1;
    score = 20;
}

let secretNumber=0;
let score =0;
let highScore = 0;
startTheGame(secretNumber, score);
document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function() {//this is the event handler
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){//if the user didnt write anything in the box and click check, the guess will be 0 and 0 is a false value
        document.querySelector('.message').textContent ='🤷‍♂️ No Number!';
    }else {
        if(guess === secretNumber){
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.message').textContent = '🎉Correct number';
            if(score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        }else {
            score--;
            if(score<1){
                document.querySelector('.message').textContent = '😢YOU LOST THE GAME';
                document.querySelector('.score').textContent = 0;
            }
            else{
            if(guess < secretNumber)
                  document.querySelector('.message').textContent = 'The guess is too low, go higher!';
            else {
                 document.querySelector('.message').textContent = 'The guess is to high, go lower!';
                 }
                 document.querySelector('.score').textContent = score;
            }
        }
        }
});

document.querySelector('.again').addEventListener('click', startTheGame(secretNumber, score));

