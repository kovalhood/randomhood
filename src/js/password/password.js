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

    // Counting selected types
    const typesCount = lowercase + uppercase + numbers + symbols;
    // Creating an array of objects of filtered types, only selected ones will be in an array
    const typesArray = [{ lowercase }, { uppercase }, { numbers }, { symbols }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += 1){
        // Generating random number for selecting random type from array
        let randomType = Math.floor(Math.random() * typesCount);

        // Taking random type from our array (key name is our type)
        const functionName = Object.keys(typesArray[randomType])[0];

        // Selecting random function and adding result to generated password string
        generatedPassword += randomFunctions[functionName]();
    }

    // First solution, it is good but random types are going in a straight order
    // Lower, upper, number and symbol, so passwords are always typical in this solution
    // for (let i = 0; i < length; i += typesCount){
    //     typesArray.forEach(type => {
    //         const functionName = Object.keys(type)[0];
    //         generatedPassword += randomFunctions[functionName]();
    //     })
    // }

    // const finalPassword = generatedPassword.slice(0, length);

    return generatedPassword;
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