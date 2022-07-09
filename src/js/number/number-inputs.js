import { inputFrom, inputTo, inputAmount, sortType, duplicatesCheckbox } from './refs';

const quantity = {
    fromRemove: document.querySelector('#quantity--from-remove'),
    fromAdd: document.querySelector('#quantity--from-add'),
    toRemove: document.querySelector('#quantity--to-remove'),
    toAdd: document.querySelector('#quantity--to-add'),
    amountRemove: document.querySelector('#quantity--amount-remove'),
    amountAdd: document.querySelector('#quantity--amount-add'),
}

quantity.fromRemove.addEventListener('click', handleFromRemoveClick);
quantity.fromAdd.addEventListener('click', handleFromAddClick);
quantity.toRemove.addEventListener('click', handleToRemoveClick);
quantity.toAdd.addEventListener('click', handleToAddClick);
quantity.amountRemove.addEventListener('click', handleAmountRemoveClick);
quantity.amountAdd.addEventListener('click', handleAmountAddClick);

// From quantity buttons
function handleFromRemoveClick() {
    inputFrom.value = Number(inputFrom.value) - 1;

    if (inputFrom.value == 0) {
        return quantity.fromRemove.disabled = true;
    }
}

function handleFromAddClick() {
    inputFrom.value = Number(inputFrom.value) + 1;

    if (inputFrom.value >= 1) {
        quantity.fromRemove.disabled = false;
    }
}

// To quantity buttons
function handleToRemoveClick() {
    inputTo.value = Number(inputTo.value) - 1;

    if (inputTo.value == 1) {
        return quantity.toRemove.disabled = true;
    }
}

function handleToAddClick() {
    inputTo.value = Number(inputTo.value) + 1;

    if (inputTo.value >= 2) {
        quantity.toRemove.disabled = false;
    }
}

// Amount quantity buttons
// To quantity buttons
function handleAmountRemoveClick() {
    inputAmount.value = Number(inputAmount.value) - 1;

    if (inputAmount.value == 1) {
        return quantity.amountRemove.disabled = true;
    }
}

function handleAmountAddClick() {
    inputAmount.value = Number(inputAmount.value) + 1;

    if (inputAmount.value >= 2) {
        quantity.amountRemove.disabled = false;
    }
}