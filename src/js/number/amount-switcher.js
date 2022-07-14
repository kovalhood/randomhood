import { inputAmount } from "./refs";

const amountSwitcher = document.querySelector('#amount-switcher');
const multipleWrapper = document.querySelector('.randomize__multiple');
const sectionTitle = document.querySelector('.section__title');
const appearWrapper = document.querySelector('.appear-wrapper');

let multipleNumbers = false;

amountSwitcher.addEventListener('click', handleAmountSwitch);

function handleAmountSwitch() {
    multipleNumbers = !multipleNumbers;

    if (multipleNumbers === true) {
        multipleWrapper.classList.remove('hidden-multiple');
        appearWrapper.classList.add('appear-wrapper--show');
        sectionTitle.textContent = "Generate random numbers";
        amountSwitcher.textContent = "Single ▲";
        inputAmount.value = 2;
    }

    if (multipleNumbers === false) {
        multipleWrapper.classList.add('hidden-multiple');
        
        setTimeout(() => {
            appearWrapper.classList.remove('appear-wrapper--show');
            sectionTitle.textContent = "Generate random number";
            amountSwitcher.textContent = "Multiple ▼";
            inputAmount.value = 1;
        }, 100);
    }
}

export { multipleNumbers };