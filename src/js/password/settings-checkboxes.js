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
    settingCheckboxStatus(lowercaseCheckbox, lowercaseCheckboxLabel);
}

function handleUppercaseCheckboxClick() {
    settingCheckboxStatus(uppercaseCheckbox, uppercaseCheckboxLabel);
}

function handleNumberCheckboxClick() {
    settingCheckboxStatus(numbersCheckbox, numbersCheckboxLabel);
}

function handleSymbolCheckboxClick() {
    settingCheckboxStatus(symbolsCheckbox, symbolsCheckboxLabel);
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