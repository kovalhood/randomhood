import { diceAmountMin, diceAmountMax } from './dice-limits';
import { createOrRemoveDice } from './dice-create-or-remove';

const diceQuantityInput = document.querySelector('#dice-amount');
const diceQuantityRemove = document.querySelector('#dice-remove');
const diceQuantityAdd = document.querySelector('#dice-add');

diceQuantityRemove.addEventListener('click', handleQuantityRemoveClick);
diceQuantityAdd.addEventListener('click', handleQuantityAddClick);

diceQuantityInput.addEventListener('change', handleDiceQuantityChange);

diceQuantityInput.addEventListener('keydown', handleInputKeydown);
function handleInputKeydown(event) {
    ["e", "E", "+", "-", "."].includes(event.key) && event.preventDefault();
}

function handleQuantityRemoveClick() {
    diceQuantityInput.value = Number(diceQuantityInput.value) - 1;
    createOrRemoveDice();

    if (diceQuantityInput.value == diceAmountMin) {
        diceRemoveButtonOff();
    }

    if (diceQuantityInput.value <= diceAmountMax - 1) {
        diceAddButtonOn();
    }
}

function handleQuantityAddClick() {
    diceQuantityInput.value = Number(diceQuantityInput.value) + 1;
    createOrRemoveDice();

    if (diceQuantityInput.value >= diceAmountMin + 1) {
        diceRemoveButtonOn();
    }

    if (diceQuantityInput.value == diceAmountMax) {
        diceAddButtonOff();
    }
}

function handleDiceQuantityChange() {
    createOrRemoveDice();

    if (diceQuantityInput.value <= diceAmountMin) {
        diceQuantityInput.value = diceAmountMin;
        createOrRemoveDice();
        diceRemoveButtonOff();
        diceAddButtonOn();
    }

    if (diceQuantityInput.value >= diceAmountMax) {
        diceQuantityInput.value = diceAmountMax;
        createOrRemoveDice();
        diceRemoveButtonOn();
        diceAddButtonOff();
    }
}

function diceRemoveButtonOff() {
    diceQuantityRemove.classList.remove('dice__quantity');
    diceQuantityRemove.classList.add('dice__quantity--disabled');
    return diceQuantityRemove.disabled = true;
}

function diceRemoveButtonOn() {
    diceQuantityRemove.classList.add('dice__quantity');
    diceQuantityRemove.classList.remove('dice__quantity--disabled');
    diceQuantityRemove.disabled = false;
}

function diceAddButtonOff() {
    diceQuantityAdd.classList.remove('dice__quantity');
    diceQuantityAdd.classList.add('dice__quantity--disabled');
    diceQuantityAdd.disabled = true;
}

function diceAddButtonOn() {
    diceQuantityAdd.classList.add('dice__quantity');
    diceQuantityAdd.classList.remove('dice__quantity--disabled');
    diceQuantityAdd.disabled = false;
}

export { diceQuantityInput, diceRemoveButtonOff, diceRemoveButtonOn, diceAddButtonOff, diceAddButtonOn };