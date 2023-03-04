import { copyButton, passwordResultLabel } from "./copy-button";
import { passwordLengthInput } from "./password-length";
import { lowercaseCheckbox, uppercaseCheckbox, numbersCheckbox, symbolsCheckbox } from "./settings-checkboxes";

const passwordGenerationResult = document.querySelector('#password-result');
const generatePasswordButton = document.querySelector('.password__button');

const randomFunctions = {
    lowercase: getRandomLowercase,
    uppercase: getRandomUppercase,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
}

generatePasswordButton.addEventListener('click', handleGeneratePasswordClick);

function handleGeneratePasswordClick() {
    passwordResultLabel.classList.add('password__result-label--hidden');
    passwordResultLabel.classList.remove('password__result-label--visible');
    copyButton.disabled = false;
    copyButton.classList.remove('password__result-copy--disabled');

    // With the help of '+' symbol length type will be a number
    const passwordLength = +passwordLengthInput.value;
    const hasLowercase = lowercaseCheckbox.checked;
    const hasUppercase = uppercaseCheckbox.checked;
    const hasNumbers = numbersCheckbox.checked;
    const hasSymbols = symbolsCheckbox.checked;

    passwordGenerationResult.value = generatePassword(passwordLength, hasLowercase, hasUppercase, hasNumbers, hasSymbols);
}

// Function for password generation
function generatePassword(length, lowercase, uppercase, numbers, symbols) {
    let generatedPassword = '';

    const typesCount = lowercase + uppercase + numbers + symbols;
    const typesArray = [{ lowercase }, { uppercase }, { numbers }, { symbols }].filter(item => Object.values(item)[0]);
    // console.log(typesArray);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount){
        typesArray.forEach(type => {
            const functionName = Object.keys(type)[0];
            generatedPassword += randomFunctions[functionName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

// Link for charset codes https://net-comber.com/charset.html
// Functions for random letters, numbers and symbols
function getRandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

export { passwordGenerationResult };