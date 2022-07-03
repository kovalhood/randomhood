const randomizeButton = document.querySelector('.randomize_button--generate');
const clearButton = document.querySelector('.randomize_button--clear');

const inputFrom = document.querySelector('#random-from');
const inputTo = document.querySelector('#random-to');
const inputAmount = document.querySelector('#random-amount');

const randomNumber = document.querySelector('.randomize_number');
const randomizeHistory = document.querySelector('.randomize_history');

let generatedNumbers = [];

randomizeButton.addEventListener('click', handleRandomizeButton);
clearButton.addEventListener('click', handleClearButton);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleRandomizeButton() {
    numbersGeneration(inputFrom.value, inputTo.value, inputAmount.value);
    generatedNumbers = [];
}

function handleClearButton() {
    randomNumber.textContent = '0';
}

function numbersGeneration(from, to, amount) {
    if (to - amount < 0) {
        randomNumber.textContent = '0';
        return console.log('error');
    }

    for (let i = 0; i < amount; i++) {
        let includesNumber = true;

        // while operator stops execution when includesNumber = false, 
        // and then number pushes into array generatedNumbers
        while (includesNumber) {
            number = getRandomNumber(from, to);
            includesNumber = generatedNumbers.includes(number);
        }

        generatedNumbers.push(number);
        randomNumber.textContent = generatedNumbers.join(', ');
    }
}

