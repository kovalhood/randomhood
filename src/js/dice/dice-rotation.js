function diceRotation(random, dice) {
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
}

export { diceRotation };