const strengthIndicator = document.querySelector('#password-strength');

const lowercaseChars = /[a-z]+/;
const uppercaseChars = /[A-Z]/;
const numbersChars = /[0-9]+/;
const symbolsChars = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/;

const badStrength = 3;
const mediumStrength = 6;
const goodStrength = 9;
const greatStrength = 12;

function handleStrengthUpdate(password) {
    let strength = 0;

    const length = password.length;

    const lowercaseCount = handleLowercaseCount(password);
    const uppercaseCount = handleUppercaseCount(password);
    const numbersCount = handleNumbersCount(password);
    const symbolsCount = handleSymbolsCount(password);

    // Adding strength for length of password (min = 1, max = 4)
    if (length === 4) {
        strength += 1;
    }
    if (length > 4 && length < 8) {
        strength += 2;
    }
    if (length >= 8 && length < 12) {
        strength += 3;
    }
    if (length >=12) {
        strength += 4;
    }

    // Adding strength for amount of types in password (min = 1, max = 4)
    if (password.match(lowercaseChars)) {
        strength += 1;
    }
    if (password.match(uppercaseChars)) {
        strength += 1;
    }
    if (password.match(numbersChars)) {
        strength += 1;
    }
    if (password.match(symbolsChars)) {
        strength += 1;
    }

    // Adding strength for amount of specific chars in password (min = 1, max = 4)
    if (lowercaseCount >= 3) {
        strength += 1;
    }
    if (uppercaseCount >= 3) {
        strength += 1;
    }
    if (numbersCount >= 3) {
        strength += 1;
    }
    if (symbolsCount >= 3) {
        strength += 1;
    }

    console.log(strength);

    if (strength === badStrength) {
        strengthIndicator.classList.add('password__strength--bad');
        strengthIndicator.classList.remove('password__strength--medium');
        strengthIndicator.classList.remove('password__strength--good');
        strengthIndicator.classList.remove('password__strength--great');
    }

    else if (strength > badStrength && strength < mediumStrength) {
        strengthIndicator.classList.remove('password__strength--bad');
        strengthIndicator.classList.add('password__strength--medium');
        strengthIndicator.classList.remove('password__strength--good');
        strengthIndicator.classList.remove('password__strength--great');
    }

    else if (strength >= mediumStrength && strength < goodStrength) {
        strengthIndicator.classList.remove('password__strength--bad');
        strengthIndicator.classList.remove('password__strength--medium');
        strengthIndicator.classList.add('password__strength--good');
        strengthIndicator.classList.remove('password__strength--great');
    }

    else if (strength >= greatStrength) {
        strengthIndicator.classList.remove('password__strength--bad');
        strengthIndicator.classList.remove('password__strength--medium');
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