const randomizeButton = document.querySelector('.randomize_button--generate');
const clearButton = document.querySelector('.randomize_button--clear');
const randomNumber = document.querySelector('.randomize_number');
const randomizeHistory = document.querySelector('.randomize_history');
const inputFrom = document.querySelector('#random-from');
const inputTo = document.querySelector('#random-to');

let history = [];

randomizeButton.addEventListener('click', handleRandomizeButton);
clearButton.addEventListener('click', handleClearButton);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleRandomizeButton() {
    randomNumber.textContent = getRandomNumber(inputFrom.value, inputTo.value);
    history.push(randomNumber.textContent);
    randomizeHistory.textContent = history.join(', ');
}

function handleClearButton() {
    randomNumber.textContent = '0';
    history = [];
    randomizeHistory.textContent = '';
}


