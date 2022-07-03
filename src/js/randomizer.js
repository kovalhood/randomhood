const randomizeButton = document.querySelector('.button_randomize');
const randomNumber = document.querySelector('.number_rundomize');

let history = [];

randomizeButton.addEventListener('click', handleRandomizeButton);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleRandomizeButton() {
    randomNumber.textContent = getRandomNumber(0, 100);
    history.push(randomNumber.textContent);
    console.log(history);
}


