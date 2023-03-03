import { passwordLengthInput } from "./password-length";
import { lowercaseCheckbox, uppercaseCheckbox, numbersCheckbox, symbolsCheckbox } from "./settings-checkboxes";

const generatePasswordButton = document.querySelector('.password__button');

generatePasswordButton.addEventListener('click', handleGeneratePasswordClick);

function handleGeneratePasswordClick() {
    console.log(passwordLengthInput.value);
    console.log(lowercaseCheckbox.checked);
    console.log(uppercaseCheckbox.checked);
    console.log(numbersCheckbox.checked);
    console.log(symbolsCheckbox.checked);
}