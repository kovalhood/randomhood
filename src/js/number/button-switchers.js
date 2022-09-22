import { quantity } from './refs';

// From quantity buttons
function fromRemoveButtonOff() {
    quantity.fromRemove.classList.remove('randomize__quantity');
    quantity.fromRemove.classList.add('randomize__quantity--disabled');
    return quantity.fromRemove.disabled = true;
}

function fromRemoveButtonOn() {
    quantity.fromRemove.classList.add('randomize__quantity');
    quantity.fromRemove.classList.remove('randomize__quantity--disabled');
    quantity.fromRemove.disabled = false;
}

function fromAddButtonOff() {
    quantity.fromAdd.classList.remove('randomize__quantity');
    quantity.fromAdd.classList.add('randomize__quantity--disabled');
    quantity.fromAdd.disabled = true;
}

function fromAddButtonOn() {
    quantity.fromAdd.classList.add('randomize__quantity');
    quantity.fromAdd.classList.remove('randomize__quantity--disabled');
    quantity.fromAdd.disabled = false;
}

function defaultFromQuantityButtons() {
    fromRemoveButtonOn();
    fromAddButtonOn();
}

// To quantity buttons
function toRemoveButtonOff() {
    quantity.toRemove.classList.remove('randomize__quantity');
    quantity.toRemove.classList.add('randomize__quantity--disabled');
    return quantity.toRemove.disabled = true;
}

function toRemoveButtonOn() {
    quantity.toRemove.classList.add('randomize__quantity');
    quantity.toRemove.classList.remove('randomize__quantity--disabled');
    quantity.toRemove.disabled = false;
}

function toAddButtonOff() {
    quantity.toAdd.classList.remove('randomize__quantity');
    quantity.toAdd.classList.add('randomize__quantity--disabled');
    quantity.toAdd.disabled = true;
}

function toAddButtonOn() {
    quantity.toAdd.classList.add('randomize__quantity');
    quantity.toAdd.classList.remove('randomize__quantity--disabled');
    quantity.toAdd.disabled = false;
}

function defaultToQuantityButtons() {
    toRemoveButtonOn();
    toAddButtonOn();
}

// Amount buttons
function amountRemoveButtonOff() {
    quantity.amountRemove.classList.remove('randomize__quantity');
    quantity.amountRemove.classList.add('randomize__quantity--disabled');
    return quantity.amountRemove.disabled = true;
}

function amountRemoveButtonOn() {
    quantity.amountRemove.classList.add('randomize__quantity');
    quantity.amountRemove.classList.remove('randomize__quantity--disabled');
    quantity.amountRemove.disabled = false;
}

function amountAddButtonOff() {
    quantity.amountAdd.classList.remove('randomize__quantity');
    quantity.amountAdd.classList.add('randomize__quantity--disabled');
    quantity.amountAdd.disabled = true;
}

function amountAddButtonOn() {
    quantity.amountAdd.classList.add('randomize__quantity');
    quantity.amountAdd.classList.remove('randomize__quantity--disabled');
    quantity.amountAdd.disabled = false;
}

function defaultAmountQuantityButtons() {
    amountRemoveButtonOff();
    amountAddButtonOn();
}

export {
    fromRemoveButtonOff, fromRemoveButtonOn, fromAddButtonOff, fromAddButtonOn, defaultFromQuantityButtons,
    toRemoveButtonOff, toRemoveButtonOn, toAddButtonOff, toAddButtonOn, defaultToQuantityButtons,
    amountRemoveButtonOff, amountRemoveButtonOn, amountAddButtonOff, amountAddButtonOn, defaultAmountQuantityButtons
};