const randomizeButton = document.querySelector('.button_randomize');
const randomNumber = document.querySelector('.number_rundomize');
const inputFrom = document.querySelector('#random-from');
const inputTo = document.querySelector('#random-to');

let history = [];

randomizeButton.addEventListener('click', handleRandomizeButton);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleRandomizeButton() {
    randomNumber.textContent = getRandomNumber(inputFrom.value, inputTo.value);
    history.push(randomNumber.textContent);
    console.log(history);
    // console.log(inputFrom,inputTo)
}


