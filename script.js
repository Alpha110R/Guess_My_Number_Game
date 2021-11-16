'use strict';

const createDefaultParameters = () => {
    return {
        secretNumber: Math.floor(Math.random() * 20) + 1,
        score: 20,
        highScore: 0,
        flagWin: false
    }
}

const querySelectors = () => {
    return {
        body: document.querySelector('body'),
        againButton: document.querySelector('.again'),
        guessedNumber: document.querySelector('.number'),
        messagePlace: document.querySelector('.message'),
        checkButton: document.querySelector('.check'),
        score: document.querySelector('.score'),
        numberInput: document.querySelector('.guess'),
        highScore: document.querySelector('.highscore')
    }
}

const subscribeForEvents = () => {
    selectors.againButton.addEventListener('click', () => {
        selectors.body.style.backgroundColor = '#222';
        selectors.guessedNumber.style.width = '15rem';
        restartGame();
    });

    selectors.checkButton.addEventListener('click', checkGuessedNumber)
}

const displayMessage = (message) => {
    selectors.messagePlace.textContent = message;
}

const disableGuessedInput = () => {
    clearGuessNumberBox();
    selectors.numberInput.disabled = true;
}

const enabledGuessedInput = () => {
    clearGuessNumberBox();
    selectors.numberInput.disabled = false;
}

const clearGuessNumberBox = () => {
    selectors.numberInput.value = null;
}

const restartGame = () => {
    enabledGuessedInput();
    defaultParameters.secretNumber = Math.floor(Math.random() * 20) + 1;
    defaultParameters.score = 20;
    defaultParameters.flagWin = false;
    selectors.guessedNumber.textContent = '?';
    displayMessage('Start guessing...');
    selectors.score.textContent = 20;
    selectors.numberInput.value = '';
}

const winGame = (score, highScore) => {
    disableGuessedInput();
    selectors.body.style.backgroundColor = '#60b347';
    selectors.guessedNumber.style.width = '30rem';
    selectors.guessedNumber.textContent = defaultParameters.secretNumber;
    displayMessage('🎉Correct number');
    defaultParameters.flagWin = true;
    assignHighScore(score, highScore);
}

const assignHighScore = (score, highScore) => {
    if (score <= highScore) {
        return
    }

    highScore = score;
    selectors.highScore.textContent = highScore;
}

const loseGame = () => {
    disableGuessedInput();
    selectors.body.style.backgroundColor = '#DC143C';
    displayMessage('😢YOU LOST THE GAME');
    selectors.score.textContent = 0;
    defaultParameters.flagWin = true;
}

const hintToGuessTheNumber = (guess, secretNumber, score) => {
    displayMessage(guess < secretNumber ? 'The guess is too low, go higher!' : 'The guess is to high, go lower!');
    selectors.score.textContent = score;
}

const checkGuessedNumber = () => {
    const guessNumber = Number(selectors.numberInput.value);

    if (!guessNumber) {
        displayMessage('🤷‍♂️ No Number!');
    } else {
        handleGuess(guessNumber)
    }
}

const handleGuess = (guessNumber) => {
    if (defaultParameters.flagWin === true) {
        displayMessage('🙌👏 YOU WON ALREADY!');
        return
    }

    if (guessNumber === defaultParameters.secretNumber) {
        winGame(defaultParameters.score, defaultParameters.highScore);
        return
    }

    defaultParameters.score--;

    if (defaultParameters.score < 1) {
        loseGame();
        return
    }

    hintToGuessTheNumber(guessNumber, defaultParameters.secretNumber, defaultParameters.score);
}



const defaultParameters = createDefaultParameters();
const selectors = querySelectors();

subscribeForEvents();