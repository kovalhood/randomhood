const dice = document.querySelector('.dice');
const rollButton = document.querySelector('.roll-button');

const randomDice = () => {
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber >= 1 && randomNumber <= 6) {
        rollDice(randomNumber);
    }
    else {
        randomDice();
    }
}

const rollDice = random => {
    dice.style.animation = 'rolling 4s';

    setTimeout(() => {
        switch (random) {
            case 1:
                console.log('1');
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            
            case 6:
                console.log('6');
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            
            case 2:
                console.log('2');
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            
            case 5:
                console.log('5');
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            
            case 3:
                console.log('3');
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            
            case 4:
                console.log('4');
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
        
            default:
                break;
        }
        dice.style.animation = 'none';
    }, 4050);
};

rollButton.addEventListener('click', randomDice);