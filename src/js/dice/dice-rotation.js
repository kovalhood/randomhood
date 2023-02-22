function diceRotation(random, dice) {
    if (random === 1) {
        dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }

    else if (random === 6) {
        dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
    }

    else if (random === 2) {
        dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
    }

    else if (random === 5) {
        dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
    }

    else if (random === 3) {
        dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
    }

    else if (random === 4) {
        dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
    }
}

export { diceRotation };