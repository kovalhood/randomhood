const randomizeButton = document.querySelector('.randomize__button--generate');
const clearButton = document.querySelector('.randomize__button--clear');
const resetButton = document.querySelector('.randomize__button--reset');

const inputFrom = document.querySelector('#random-from');
const inputTo = document.querySelector('#random-to');
const inputAmount = document.querySelector('#random-amount');
const sortType = document.querySelector('#sort-type');
const duplicatesCheckbox = document.querySelector('#duplicates-checkbox');

const numberWrapper = document.querySelector('.randomize__number-wrapper');
const textBeforeNumber = document.querySelector('.randomize__number-text');
const randomNumberEl = document.querySelector('.randomize__number');

let generatedNumbers = [];

randomizeButton.addEventListener('click', handleRandomize);
clearButton.addEventListener('click', handleClear);
resetButton.addEventListener('click', handleReset);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleRandomize() {
    multipleNumbersGeneration(inputFrom.value, inputTo.value, inputAmount.value);
    generatedNumbers = [];
    // console.log(sortType.value);
    // console.log(duplicatesCheckbox.checked);
}

function handleClear() {
    randomNumberEl.textContent = '0';
    numberWrapper.classList.add('hidden');
}

function handleReset() {
    randomNumberEl.textContent = '0';
    numberWrapper.classList.add('hidden');

    inputFrom.value = 1;
    inputTo.value = 10;
    inputAmount.value = 1;
}

function multipleNumbersGeneration(from, to, amount) {
    // Allow duplicates
    if (duplicatesCheckbox.checked) {
        console.log('true')
        for (let i = 0; i < amount; i+=1) {
            generatedNumbers.push(getRandomNumber(from, to));
        }
        console.log(generatedNumbers);
    }

    // Disallow duplicates 
    else if (!duplicatesCheckbox.checked) {
        console.log('false')
        if (to - from + 1 - amount < 0) {
            handleClear();
            return console.log('error');
        }

        for (let i = 0; i < amount; i+=1) {
            let includesNumber = true;
            let randomNumber;

            while (includesNumber) {
                // while operator stops execution when includesNumber = false, 
                // and then number pushes into array generatedNumbers
                randomNumber = getRandomNumber(from, to);
                includesNumber = generatedNumbers.includes(randomNumber);
            }

            generatedNumbers.push(randomNumber);
        }
        console.log(generatedNumbers);
    }

    sortGeneratedNumbers(generatedNumbers);

    numberWrapper.classList.remove('hidden');

    randomNumberEl.textContent = generatedNumbers.join(', ');
    textBeforeNumberHandler();
}

function sortGeneratedNumbers(array) {
    if (sortType.value === '1') {
        console.log('None')
        return console.log(array);
    };

    if (sortType.value === '2') {
        console.log('Ascending')
        array.sort((a, b) => a - b);
        return console.log(array);
    };

    if (sortType.value === '3') {
        console.log('Descending')
        array.sort((a, b) => b - a);
        return console.log(array);
    }
}

function textBeforeNumberHandler() {
    if (generatedNumbers.length > 1) {
        return textBeforeNumber.textContent = 'Your numbers: ';
    }
    
    textBeforeNumber.textContent = 'Your number: ';
}