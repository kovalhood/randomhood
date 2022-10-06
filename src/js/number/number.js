import { inputFrom, inputTo, inputAmount, sortType, duplicatesCheckbox, labelDuplicatesCheckbox, quantity } from './refs';
import { multipleNumbers } from './amount-switcher';
import { defaultFromQuantityButtons, defaultToQuantityButtons, defaultAmountQuantityButtons } from './button-switchers';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const randomizeButton = document.querySelector('.randomize__button--generate');
const resetButton = document.querySelector('.randomize__button--reset');

const numberWrapper = document.querySelector('.randomize__number-wrapper');
const textBeforeNumber = document.querySelector('.randomize__number-text');
const randomNumberEl = document.querySelector('.randomize__number');

let generatedNumbers = [];

randomizeButton.addEventListener('click', handleRandomize);
resetButton.addEventListener('click', handleReset);

// Function for generating random number
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random number generation handler
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
    document.querySelector('.js-fake-input').value = 'None';
    document.querySelector('.js-fake-input').classList.remove('sort--selected')
    duplicatesCheckbox.checked = false;
    labelDuplicatesCheckbox.classList.remove('randomize__checkbox-label--on');
    labelDuplicatesCheckbox.textContent = 'Off';

    defaultFromQuantityButtons();
    defaultToQuantityButtons();
    defaultAmountQuantityButtons();
}

// Numbers generation function with controllers
function numbersGeneration(from, to, amount) {
    if (to - from <= 0) {
        handleReset();
        return Notify.failure(`Start value cannot be equal or greater than end value`);
    }

    // Rounding up amount of numbers to generate
    amount = Math.floor(amount);

    if (amount === 1) {
        generatedNumbers.push(getRandomNumber(from, to));
    }

    if (amount > 1) {
        // Allow duplicates
        if (duplicatesCheckbox.checked) {
            for (let i = 0; i < amount; i += 1) {
                generatedNumbers.push(getRandomNumber(from, to));
            }
        }

        // Disallow duplicates
        else if (!duplicatesCheckbox.checked) {
            if (to - from + 1 - amount < 0) {
                handleReset();
                return Notify.failure(`The amount of numbers cannot exceed the difference between the end and start values`);
            }

            for (let i = 0; i < amount; i += 1) {
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
        }

        sortGeneratedNumbers(generatedNumbers);
    }

    numberWrapper.classList.remove('hidden');

    randomNumberEl.textContent = generatedNumbers.join(', ');
    textBeforeNumberHandler();
}

// Sorting dropdown logic
function sortGeneratedNumbers(array) {
    if (sortType.value === '2') {
        array.sort((a, b) => a - b);
    };

    if (sortType.value === '3') {
        array.sort((a, b) => b - a);
    }
}

// Text of result logic
function textBeforeNumberHandler() {
    if (generatedNumbers.length > 1) {
        return textBeforeNumber.textContent = 'Your numbers: ';
    }

    textBeforeNumber.textContent = 'Your number: ';
}