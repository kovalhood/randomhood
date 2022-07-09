import { inputFrom, inputTo, inputAmount, sortType, duplicatesCheckbox, quantity } from './refs';
import { fromMin, fromMax, toMin, toMax, amountMin, amountMax } from './limits';
import {
    fromRemoveButtonOff, fromRemoveButtonOn, fromAddButtonOff, fromAddButtonOn,
    toRemoveButtonOff, toRemoveButtonOn, toAddButtonOff, toAddButtonOn,
    amountRemoveButtonOff, amountRemoveButtonOn, amountAddButtonOff, amountAddButtonOn
} from './button-switchers';

quantity.fromRemove.addEventListener('click', handleFromRemoveClick);
quantity.fromAdd.addEventListener('click', handleFromAddClick);
quantity.toRemove.addEventListener('click', handleToRemoveClick);
quantity.toAdd.addEventListener('click', handleToAddClick);
quantity.amountRemove.addEventListener('click', handleAmountRemoveClick);
quantity.amountAdd.addEventListener('click', handleAmountAddClick);

inputFrom.addEventListener('change', handleInputFromChange);
inputTo.addEventListener('change', handleInputToChange);
inputAmount.addEventListener('change', handleInputAmountChange);

// From quantity buttons
function handleFromRemoveClick() {
    inputFrom.value = Number(inputFrom.value) - 1;

    if (inputFrom.value == fromMin) {
        fromRemoveButtonOff();
    }

    if (inputFrom.value <= fromMax - 1) {
        fromAddButtonOn();
    }
}

function handleFromAddClick() {
    inputFrom.value = Number(inputFrom.value) + 1;

    if (inputFrom.value >= fromMin + 1) {
        fromRemoveButtonOn();
    }

    if (inputFrom.value == fromMax) {
        fromAddButtonOff();
    }
}

function handleInputFromChange() {
    if (inputFrom.value < fromMin) {
        inputFrom.value = fromMin;
        fromRemoveButtonOff();
        fromAddButtonOn();
    }

    if (inputFrom.value > fromMax) {
        inputFrom.value = fromMax;
        fromRemoveButtonOn();
        fromAddButtonOff();
    }
}

// To quantity buttons
function handleToRemoveClick() {
    inputTo.value = Number(inputTo.value) - 1;

    if (inputTo.value == toMin) {
        toRemoveButtonOff();
    }

    if (inputTo.value <= toMax - 1) {
        toAddButtonOn();
    }
}

function handleToAddClick() {
    inputTo.value = Number(inputTo.value) + 1;

    if (inputTo.value >= toMin + 1) {
        toRemoveButtonOn();
    }

    if (inputTo.value == toMax) {
        toAddButtonOff();
    }
}

function handleInputToChange() {
    if (inputTo.value < toMin) {
        inputTo.value = toMin;
        toRemoveButtonOff();
        toAddButtonOn();
    }

    if (inputTo.value > toMax) {
        inputTo.value = toMax;
        toRemoveButtonOn();
        toAddButtonOff();
    }
}

// Amount quantity buttons
function handleAmountRemoveClick() {
    inputAmount.value = Number(inputAmount.value) - 1;

    if (inputAmount.value == amountMin) {
        amountRemoveButtonOff();
    }

    if (inputAmount.value <= amountMax - 1) {
        amountAddButtonOn();
    }
}

function handleAmountAddClick() {
    inputAmount.value = Number(inputAmount.value) + 1;

    if (inputAmount.value >= amountMin + 1) {
        amountRemoveButtonOn();
    }

    if (inputAmount.value == amountMax) {
        amountAddButtonOff();
    }
}

function handleInputAmountChange() {
    if (inputAmount.value < amountMin) {
        inputAmount.value = amountMin;
        amountRemoveButtonOff();
        amountAddButtonOn();
    }

    if (inputAmount.value > amountMax) {
        inputAmount.value = amountMax;
        amountRemoveButtonOn();
        amountAddButtonOff();
    }
}