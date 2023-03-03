import { passwordLengthMin, passwordLengthMax } from './length-limits';

const passwordLengthInput = document.querySelector('#password-length');
const passwordLengthRemove = document.querySelector('#password--length-remove');
const passwordLengthAdd = document.querySelector('#password--length-add');

passwordLengthRemove.addEventListener('click', handleLengthRemoveClick);
passwordLengthAdd.addEventListener('click', handleLengthAddClick);

passwordLengthInput.addEventListener('change', handlePasswordLengthChange);

passwordLengthInput.addEventListener('keydown', handleInputKeydown);

function handleInputKeydown(event) {
    ["e", "E", "+", "-", "."].includes(event.key) && event.preventDefault();
}

function handleLengthRemoveClick() {
    passwordLengthInput.value = Number(passwordLengthInput.value) - 1;

    if (passwordLengthInput.value == passwordLengthMin) {
        console.log(passwordLengthMin, passwordLengthMax);
        lengthRemoveButtonOff();
    }

    if (passwordLengthInput.value <= passwordLengthMax - 1) {
        lengthAddButtonOn();
    }
}

function handleLengthAddClick() {
    passwordLengthInput.value = Number(passwordLengthInput.value) + 1;

    if (passwordLengthInput.value >= passwordLengthMin + 1) {
        lengthRemoveButtonOn();
    }

    if (passwordLengthInput.value == passwordLengthMax) {
        lengthAddButtonOff();
    }
}

function handlePasswordLengthChange() {
    if (passwordLengthInput.value <= passwordLengthMin) {
        passwordLengthInput.value = passwordLengthMin;
        lengthRemoveButtonOff();
        lengthAddButtonOn();
    }

    if (passwordLengthInput.value >= passwordLengthMax) {
        passwordLengthInput.value = passwordLengthMax;
        lengthRemoveButtonOn();
        lengthAddButtonOff();
    }
}

function lengthRemoveButtonOff() {
    passwordLengthRemove.classList.remove('password__length');
    passwordLengthRemove.classList.add('password__length--disabled');
    return passwordLengthRemove.disabled = true;
}

function lengthRemoveButtonOn() {
    passwordLengthRemove.classList.add('password__length');
    passwordLengthRemove.classList.remove('password__length--disabled');
    passwordLengthRemove.disabled = false;
}

function lengthAddButtonOff() {
    passwordLengthAdd.classList.remove('password__length');
    passwordLengthAdd.classList.add('password__length--disabled');
    passwordLengthAdd.disabled = true;
}

function lengthAddButtonOn() {
    passwordLengthAdd.classList.add('password__length');
    passwordLengthAdd.classList.remove('password__length--disabled');
    passwordLengthAdd.disabled = false;
}