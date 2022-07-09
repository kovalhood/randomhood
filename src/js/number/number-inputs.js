const inputFrom = document.querySelector('#random-from');
const inputTo = document.querySelector('#random-to');
const inputAmount = document.querySelector('#random-amount');
const sortType = document.querySelector('#sort-type');
const duplicatesCheckbox = document.querySelector('#duplicates-checkbox');

const quantity = {
    fromRemove: document.querySelector('#quantity--from-remove'),
    fromAdd: document.querySelector('#quantity--from-add'),
    toRemove: document.querySelector('#quantity--to-remove'),
    toAdd: document.querySelector('#quantity--to-add'),
}

quantity.fromRemove.addEventListener('click', handleFromRemoveClick);
quantity.fromAdd.addEventListener('click', handleFromAddClick);
quantity.toRemove.addEventListener('click', handleToRemoveClick);
quantity.toAdd.addEventListener('click', handleToAddClick);

// From quantity buttons
function handleFromRemoveClick() {
    inputFrom.value = Number(inputFrom.value) - 1;

    if (inputFrom.value == 0) {
        return quantity.fromRemove.disabled = true;
    }
}

function handleFromAddClick() {
    inputFrom.value = Number(inputFrom.value) + 1;

    if (inputFrom.value == 1) {
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

    if (inputTo.value == 2) {
        quantity.toRemove.disabled = false;
    }
}