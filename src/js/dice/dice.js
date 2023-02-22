import { diceQuantityInput, diceRemoveButtonOff, diceRemoveButtonOn, diceAddButtonOff, diceAddButtonOn } from './dice-amount-logic';
import { diceRotation } from './dice-rotation';

const rollButton = document.querySelector('.roll-button');

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
    let randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

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
        diceRotation(randomNumber, dice);

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