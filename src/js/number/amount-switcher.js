import { inputAmount } from "./refs";

const amountSwitcher = document.querySelector('#amount-switcher');
const multipleWrapper = document.querySelector('.randomize__multiple');

let multipleNumbers = false;

amountSwitcher.addEventListener('click', handleAmountSwitch);

function handleAmountSwitch() {
    multipleNumbers = !multipleNumbers;

    if (multipleNumbers === true) {
        multipleWrapper.classList.remove('hidden')
        amountSwitcher.textContent = "Single ▲"
        inputAmount.value = 2;
    }

    if (multipleNumbers === false) {
        multipleWrapper.classList.add('hidden');
        amountSwitcher.textContent = "Multiple ▼"
        inputAmount.value = 1;
    }
}

export { multipleNumbers };