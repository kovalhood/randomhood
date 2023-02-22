import { createOrRemoveDice } from './dice-create-or-remove';

const rollButton = document.querySelector('.roll-button');

const diceAmountMin = 1;
const diceAmountMax = 6;

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















const randomDice = () => {
    // Here we need to take into account amount of dices rolling

    if (diceQuantityInput.value === '1') {
        rollDice(document.querySelector('.dice-1'));
        return;
    }

    else if (diceQuantityInput.value === '2') {
        rollDice(document.querySelector('.dice-1'));
        rollDice(document.querySelector('.dice-2'));
        return;
    }
        
    else if (diceQuantityInput.value === '3') {
        rollDice(document.querySelector('.dice-1'));
        rollDice(document.querySelector('.dice-2'));
        rollDice(document.querySelector('.dice-3'));
        return;
    }
        
    else if (diceQuantityInput.value === '4') {
        rollDice(document.querySelector('.dice-1'));
        rollDice(document.querySelector('.dice-2'));
        rollDice(document.querySelector('.dice-3'));
        rollDice(document.querySelector('.dice-4'));
        return;
    }
        
    else if (diceQuantityInput.value === '5') {
        rollDice(document.querySelector('.dice-1'));
        rollDice(document.querySelector('.dice-2'));
        rollDice(document.querySelector('.dice-3'));
        rollDice(document.querySelector('.dice-4'));
        rollDice(document.querySelector('.dice-5'));
        return;
    }
        
    else if (diceQuantityInput.value === '6') {
        rollDice(document.querySelector('.dice-1'));
        rollDice(document.querySelector('.dice-2'));
        rollDice(document.querySelector('.dice-3'));
        rollDice(document.querySelector('.dice-4'));
        rollDice(document.querySelector('.dice-5'));
        rollDice(document.querySelector('.dice-6'));
        return;
    }
}

const rollDice = (dice) => {
    // Let's generate random number for dice
    let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    // Setting up animation for dice
    dice.style.animation = 'rolling 4s';

    // Disabling roll button
    rollButton.disabled = true;
    rollButton.classList.remove('roll-button--enabled');
    rollButton.classList.add('roll-button--disabled');

    // Disabling amount functionality
    diceRemoveButtonOff();
    diceAddButtonOff();
    diceQuantityInput.disabled = true;
    document.querySelector('.dice__input-label').classList.add('dice__input-label--hidden');

    setTimeout(() => {
        if (random === 1) {
            console.log('1');
            dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }

        else if (random === 6) {
            console.log('6');
            dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
        }

        else if (random === 2) {
            console.log('2');
            dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
        }

        else if (random === 5) {
            console.log('5');
            dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
        }

        else if (random === 3) {
            console.log('3');
            dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
        }

        else if (random === 4) {
            console.log('4');
            dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
        }

        // Stopping animation of rolling
        dice.style.animation = 'none';

        // Enabling roll button
        rollButton.disabled = false;
        rollButton.classList.add('roll-button--enabled');
        rollButton.classList.remove('roll-button--disabled');

        // Enabling amount functionality
        if (Number(diceQuantityInput.value) != '1') {
            diceRemoveButtonOn();
        }
        if (Number(diceQuantityInput.value) != '6') {
            diceAddButtonOn();
        }
        diceQuantityInput.disabled = false;
        document.querySelector('.dice__input-label').classList.remove('dice__input-label--hidden');
    }, 4050);
};

rollButton.addEventListener('click', randomDice);