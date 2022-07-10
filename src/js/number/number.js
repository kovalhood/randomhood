import { inputFrom, inputTo, inputAmount, sortType, duplicatesCheckbox, quantity } from './refs';
import { multipleNumbers } from './amount-switcher';

const randomizeButton = document.querySelector('.randomize__button--generate');
const resetButton = document.querySelector('.randomize__button--reset');

const numberWrapper = document.querySelector('.randomize__number-wrapper');
const textBeforeNumber = document.querySelector('.randomize__number-text');
const randomNumberEl = document.querySelector('.randomize__number');

let generatedNumbers = [];

randomizeButton.addEventListener('click', handleRandomize);
resetButton.addEventListener('click', handleReset);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleRandomize() {
    numbersGeneration(inputFrom.value, inputTo.value, inputAmount.value);
    generatedNumbers = [];
}

// Setting default values to our elements
function handleReset() {
    randomNumberEl.textContent = '0';
    numberWrapper.classList.add('hidden');

    inputFrom.value = 1;
    inputTo.value = 10;
    
    multipleNumbers ? inputAmount.value = 2 : inputAmount.value = 1;

    sortType.value = '1';
    duplicatesCheckbox.checked = false;

    quantity.fromRemove.classList.add('randomize__quantity');
    quantity.fromRemove.classList.remove('randomize__quantity--disabled');
    quantity.fromRemove.disabled = false;
    quantity.fromAdd.classList.add('randomize__quantity');
    quantity.fromAdd.classList.remove('randomize__quantity--disabled');
    quantity.fromAdd.disabled = false;

    quantity.toRemove.classList.add('randomize__quantity');
    quantity.toRemove.classList.remove('randomize__quantity--disabled');
    quantity.toRemove.disabled = false;
    quantity.toAdd.classList.add('randomize__quantity');
    quantity.toAdd.classList.remove('randomize__quantity--disabled');
    quantity.toAdd.disabled = false;

    quantity.amountRemove.classList.remove('randomize__quantity');
    quantity.amountRemove.classList.add('randomize__quantity--disabled');
    quantity.amountRemove.disabled = true;
    quantity.amountAdd.classList.add('randomize__quantity');
    quantity.amountAdd.classList.remove('randomize__quantity--disabled');
    quantity.amountAdd.disabled = false;
}

function numbersGeneration(from, to, amount) {
    if (to - from <= 0) {
        handleReset();
        return console.log('error');
    }
    
    amount = Math.floor(amount);

    if (amount === 1) {
        console.log('1')
        generatedNumbers.push(getRandomNumber(from, to));
    }

    if (amount > 1) {
        console.log('>1')
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
                handleReset();
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
    }
    

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