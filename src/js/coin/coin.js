let headsCount = 0;
let tailsCount = 0;
const coinEl = document.querySelector('.coin');
const coinFlipButton = document.querySelector('.coin-flip-button');
const coinResetButton = document.querySelector('.coin-reset-button');

coinFlipButton.addEventListener('click', handleCoinFlip);

function handleCoinFlip() {
    let randomCoin = Math.floor(Math.random() * 2);
    coinEl.style.animation = 'none';

    if (randomCoin) {
        setTimeout(function () {
            coinEl.style.animation = 'spin-heads 3s forwards';
        }, 100);
        headsCount += 1;
    }

    else {
        setTimeout(function () {
            coinEl.style.animation = 'spin-tails 3s forwards';
        }, 100);
        tailsCount += 1;
    }

    // setTimeout(function () {
    //         coinEl.style.animation = 'none';
    //     }, 3050);
}