const randomizeButton = document.querySelector('.button_randomize');
const clearButton = document.querySelector('.button_clear');
const randomNumber = document.querySelector('.number_rundomize');
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
    console.log(history);
}

function handleClearButton() {
    randomNumber.textContent = '0';
    history = [];
    console.log(history);
}


