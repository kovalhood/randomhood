const inputFrom = document.querySelector('#random-from');
const inputTo = document.querySelector('#random-to');
const inputAmount = document.querySelector('#random-amount');
const sortType = document.querySelector('#sort-type');
const duplicatesCheckbox = document.querySelector('#duplicates-checkbox');
const labelDuplicatesCheckbox = document.querySelector('.randomize__checkbox-label');

const quantity = {
    fromRemove: document.querySelector('#quantity--from-remove'),
    fromAdd: document.querySelector('#quantity--from-add'),
    toRemove: document.querySelector('#quantity--to-remove'),
    toAdd: document.querySelector('#quantity--to-add'),
    amountRemove: document.querySelector('#quantity--amount-remove'),
    amountAdd: document.querySelector('#quantity--amount-add'),
}

export { inputFrom, inputTo, inputAmount, sortType, duplicatesCheckbox, labelDuplicatesCheckbox, quantity };