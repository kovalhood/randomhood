const randomizeButton = document.querySelector('.randomize__button--generate');
const clearButton = document.querySelector('.randomize__button--clear');

const inputFrom = document.querySelector('#random-from');
const inputTo = document.querySelector('#random-to');
const inputAmount = document.querySelector('#random-amount');

const numberWrapper = document.querySelector('.randomize__number-wrapper');
const textBeforeNumber = document.querySelector('.randomize__number-text');
const randomNumber = document.querySelector('.randomize__number');

let generatedNumbers = [];

randomizeButton.addEventListener('click', handleRandomizeButton);
clearButton.addEventListener('click', handleClear);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleRandomizeButton() {
    numbersGeneration(inputFrom.value, inputTo.value, inputAmount.value);
    generatedNumbers = [];
}

function handleClear() {
    randomNumber.textContent = '0';
    numberWrapper.classList.add('hidden');
}

function numbersGeneration(from, to, amount) {
    if (to - amount < 0) {
        handleClear();
        return console.log('error');
    }

    numberWrapper.classList.remove('hidden');

    for (let i = 0; i < amount; i++) {
        let includesNumber = true;

        while (includesNumber) {
            // while operator stops execution when includesNumber = false, 
            // and then number pushes into array generatedNumbers
            let number = getRandomNumber(from, to);
            includesNumber = generatedNumbers.includes(number);
        }

        generatedNumbers.push(number);
        randomNumber.textContent = generatedNumbers.join(', ');
    }
    textBeforeNumberHandler();
}

function textBeforeNumberHandler() {
    if (generatedNumbers.length > 1) {
        return textBeforeNumber.textContent = 'Your numbers: ';
    }
    
    textBeforeNumber.textContent = 'Your number: ';
}

