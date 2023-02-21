const dice1 = document.querySelector('.dice-1');
const dice2 = document.querySelector('.dice-2');
const rollButton = document.querySelector('.roll-button');

const randomDice = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const randomNumber1 = Math.floor(Math.random() * 10);

    if (randomNumber >= 1 && randomNumber <= 6) {
        rollDice(randomNumber, dice1);
        rollDice(randomNumber1, dice2);
    }
    else {
        randomDice();
    }
}

const rollDice = (random, dice) => {
    dice.style.animation = 'rolling 4s';
    rollButton.disabled = true;
    rollButton.classList.remove('roll-button--enabled');
    rollButton.classList.add('roll-button--disabled');

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

        dice.style.animation = 'none';
        rollButton.disabled = false;
        rollButton.classList.add('roll-button--enabled');
        rollButton.classList.remove('roll-button--disabled');
    }, 4050);
};

rollButton.addEventListener('click', randomDice);