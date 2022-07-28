import { inputAmount } from "./refs";

const amountSwitcher = document.querySelector('#amount-switcher');
const textSwitcher = document.querySelector('.amount-switcher--text');
const iconDown = document.querySelector('#amount-icon--down');
const iconUp = document.querySelector('#amount-icon--up');
const multipleWrapper = document.querySelector('.randomize__multiple');
const sectionTitle = document.querySelector('.section__title');
const appearWrapper = document.querySelector('.appear-wrapper');
const numberWrapper = document.querySelector('.randomize__number-wrapper');
const resultEl = document.querySelector('.randomize__number');

let multipleNumbers = false;

amountSwitcher.addEventListener('click', handleAmountSwitch);

function handleAmountSwitch() {
    multipleNumbers = !multipleNumbers;

    if (multipleNumbers === true) {
        appearWrapper.classList.add('appear-wrapper--show');
        numberWrapper.classList.add('hidden');
        resultEl.classList.add('randomize__number--multiple');

        sectionTitle.textContent = "Generate random numbers";
        textSwitcher.innerText = "Single";
        iconDown.classList.add('hidden-icon');
        iconUp.classList.remove('hidden-icon');
        inputAmount.value = 2;

        // Setting timeout for correct work on iOS
        setTimeout(() => {
            multipleWrapper.classList.remove('hidden-multiple');
        }, 100);
    }

    if (multipleNumbers === false) {
        multipleWrapper.classList.add('hidden-multiple');
        numberWrapper.classList.add('hidden');
        resultEl.classList.remove('randomize__number--multiple');

        sectionTitle.textContent = "Generate random number";
        textSwitcher.innerText = "Multiple";
        iconDown.classList.remove('hidden-icon');
        iconUp.classList.add('hidden-icon');
        
        // Setting timeout for correct work on iOS
        setTimeout(() => {
            appearWrapper.classList.remove('appear-wrapper--show');
        }, 100);

        setTimeout(() => {
            inputAmount.value = 1;
        }, 200);
    }
}

export { multipleNumbers };