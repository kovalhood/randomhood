import { inputAmount } from "./refs";

const amountSwitcher = document.querySelector('#amount-switcher');
const multipleWrapper = document.querySelector('.randomize__multiple');

let multipleNumbers = false;

amountSwitcher.addEventListener('click', handleAmountSwitch);

function handleAmountSwitch() {
    multipleNumbers = !multipleNumbers;

    console.log(multipleNumbers);
    if (multipleNumbers === true) {
        multipleWrapper.classList.remove('hidden')
        inputAmount.value = 2;
    }

    if (multipleNumbers === false) {
        multipleWrapper.classList.add('hidden');
        inputAmount.value = 1;
    }
}

export { multipleNumbers };