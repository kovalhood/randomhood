const lowercaseCheckbox = document.querySelector('#lowercase-checkbox');
const uppercaseCheckbox = document.querySelector('#uppercase-checkbox');
const numbersCheckbox = document.querySelector('#numbers-checkbox');
const symbolsCheckbox = document.querySelector('#symbols-checkbox');

const lowercaseCheckboxLabel = document.querySelector('#lowercase-checkbox-label');
const uppercaseCheckboxLabel = document.querySelector('#uppercase-checkbox-label');
const numbersCheckboxLabel = document.querySelector('#numbers-checkbox-label');
const symbolsCheckboxLabel = document.querySelector('#symbols-checkbox-label');

lowercaseCheckbox.addEventListener('click', handleLowercaseCheckboxClick);
uppercaseCheckbox.addEventListener('click', handleUppercaseCheckboxClick);
numbersCheckbox.addEventListener('click', handleNumberCheckboxClick);
symbolsCheckbox.addEventListener('click', handleSymbolCheckboxClick);

function handleLowercaseCheckboxClick() {
    uppercaseCheckbox.disabled = false;
    numbersCheckbox.disabled = false;
    symbolsCheckbox.disabled = false;

    settingCheckboxStatus(lowercaseCheckbox, lowercaseCheckboxLabel);

    if (!lowercaseCheckbox.checked && !numbersCheckbox.checked && !symbolsCheckbox.checked) {
        uppercaseCheckbox.disabled = true;
    }

    if (!lowercaseCheckbox.checked && !uppercaseCheckbox.checked && !symbolsCheckbox.checked) {
        numbersCheckbox.disabled = true;
    }

    if (!lowercaseCheckbox.checked && !uppercaseCheckbox.checked && !numbersCheckbox.checked) {
        symbolsCheckbox.disabled = true;
    }
}

function handleUppercaseCheckboxClick() {
    lowercaseCheckbox.disabled = false;
    numbersCheckbox.disabled = false;
    symbolsCheckbox.disabled = false;

    settingCheckboxStatus(uppercaseCheckbox, uppercaseCheckboxLabel);

    if (!uppercaseCheckbox.checked && !numbersCheckbox.checked && !symbolsCheckbox.checked) {
        lowercaseCheckbox.disabled = true;
    }

    if (!uppercaseCheckbox.checked && !lowercaseCheckbox.checked && !symbolsCheckbox.checked) {
        numbersCheckbox.disabled = true;
    }

    if (!uppercaseCheckbox.checked && !lowercaseCheckbox.checked && !numbersCheckbox.checked) {
        symbolsCheckbox.disabled = true;
    }
}

function handleNumberCheckboxClick() {
    lowercaseCheckbox.disabled = false;
    uppercaseCheckbox.disabled = false;
    symbolsCheckbox.disabled = false;

    settingCheckboxStatus(numbersCheckbox, numbersCheckboxLabel);

    if (!numbersCheckbox.checked && !uppercaseCheckbox.checked && !symbolsCheckbox.checked) {
        lowercaseCheckbox.disabled = true;
    }

    if (!numbersCheckbox.checked && !lowercaseCheckbox.checked && !symbolsCheckbox.checked) {
        uppercaseCheckbox.disabled = true;
    }

    if (!numbersCheckbox.checked && !lowercaseCheckbox.checked && !uppercaseCheckbox.checked) {
        symbolsCheckbox.disabled = true;
    }
}

function handleSymbolCheckboxClick() {
    lowercaseCheckbox.disabled = false;
    uppercaseCheckbox.disabled = false;
    numbersCheckbox.disabled = false;

    settingCheckboxStatus(symbolsCheckbox, symbolsCheckboxLabel);

    if (!symbolsCheckbox.checked && !uppercaseCheckbox.checked && !numbersCheckbox.checked) {
        lowercaseCheckbox.disabled = true;
    }

    if (!symbolsCheckbox.checked && !lowercaseCheckbox.checked && !numbersCheckbox.checked) {
        uppercaseCheckbox.disabled = true;
    }

    if (!symbolsCheckbox.checked && !lowercaseCheckbox.checked && !uppercaseCheckbox.checked) {
        numbersCheckbox.disabled = true;
    }
}

function settingCheckboxStatus(element, label) {
    if (element.checked) {
        label.classList.add('password__checkbox-label--on');
        label.textContent = 'On';
    }

    else if (!element.checked) {
        label.classList.remove('password__checkbox-label--on');
        label.textContent = 'Off';
    }
}

export { lowercaseCheckbox, uppercaseCheckbox, numbersCheckbox, symbolsCheckbox };