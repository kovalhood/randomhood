const strengthIndicator = document.querySelector('#password-strength');

const lowercaseChars = /[a-z]+/;
const uppercaseChars = /[A-Z]/;
const numbersChars = /[0-9]+/;
const symbolsChars = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/;

const badStrength = 9;
const mediumStrength = 15;
const goodStrength = 19;
const greatStrength = 25;

function handleStrengthUpdate(password) {
    let strength = 0;

    const length = password.length;

    const lowercaseCount = handleLowercaseCount(password);
    const uppercaseCount = handleUppercaseCount(password);
    const numbersCount = handleNumbersCount(password);
    const symbolsCount = handleSymbolsCount(password);

    // Adding strength for length of password (min = 1, max = 11)
    if (length === 4) {
        strength += 1;
    }
    if (length > 4 && length < 8) {
        strength += 3;
    }
    if (length >= 8 && length < 12) {
        strength += 5;
    }
    if (length >=12 && length < 16) {
        strength += 7;
    }
    if (length >= 16 && length < 22) {
        strength += 9;
    }
    if (length >= 22) {
        strength += 11;
    }

    // Adding strength for amount of types in password (min = 2, max = 8)
    if (password.match(lowercaseChars)) {
        strength += 2;
    }
    if (password.match(uppercaseChars)) {
        strength += 2;
    }
    if (password.match(numbersChars)) {
        strength += 2;
    }
    if (password.match(symbolsChars)) {
        strength += 2;
    }

    // Adding strength for amount of specific chars in password (min = 3, max = 12)
    if (lowercaseCount >= 3) {
        strength += 3;
    }
    if (uppercaseCount >= 3) {
        strength += 3;
    }
    if (numbersCount >= 3) {
        strength += 3;
    }
    if (symbolsCount >= 3) {
        strength += 3;
    }

    // Styling strength indicator depending on password strength
    if (strength <= badStrength) {
        strengthIndicator.classList.add('password__strength--bad');
        strengthIndicator.classList.remove('password__strength--average');
        strengthIndicator.classList.remove('password__strength--good');
        strengthIndicator.classList.remove('password__strength--great');
    }

    if (strength > badStrength && strength <= mediumStrength) {
        strengthIndicator.classList.remove('password__strength--bad');
        strengthIndicator.classList.add('password__strength--average');
        strengthIndicator.classList.remove('password__strength--good');
        strengthIndicator.classList.remove('password__strength--great');
    }

    if (strength > mediumStrength && strength <= goodStrength) {
        strengthIndicator.classList.remove('password__strength--bad');
        strengthIndicator.classList.add('password__strength--average');
        strengthIndicator.classList.remove('password__strength--good');
        strengthIndicator.classList.remove('password__strength--great');
    }

    if (strength >= goodStrength && strength < greatStrength) {
        strengthIndicator.classList.remove('password__strength--bad');
        strengthIndicator.classList.remove('password__strength--average');
        strengthIndicator.classList.add('password__strength--good');
        strengthIndicator.classList.remove('password__strength--great');
    }

    if (strength >= greatStrength) {
        strengthIndicator.classList.remove('password__strength--bad');
        strengthIndicator.classList.remove('password__strength--average');
        strengthIndicator.classList.remove('password__strength--good');
        strengthIndicator.classList.add('password__strength--great');
    }
};

// Counting amount of chars in a password string
function handleLowercaseCount(password) {
    return password.split('').filter(a => a.match(lowercaseChars)).join('').length;
};
function handleUppercaseCount(password){
    return password.split('').filter(a => a.match(uppercaseChars)).join('').length;
};
function handleNumbersCount(password){
    return password.split('').filter(a => a.match(numbersChars)).join('').length;
};
function handleSymbolsCount(password){
    return password.split('').filter(a => a.match(symbolsChars)).join('').length;
};

export { handleStrengthUpdate };