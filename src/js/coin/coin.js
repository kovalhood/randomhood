let headsCount = 0;
let tailsCount = 0;
const coinEl = document.querySelector('.coin');
const coinFlipButton = document.querySelector('.coin-flip-button');
const coinResetButton = document.querySelector('.coin-reset-button');

coinFlipButton.addEventListener('click', handleCoinFlip);
coinResetButton.addEventListener("click", handleCoinReset);

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

    setTimeout(updateStats, 3000);
    disableButtons();
}

function updateStats() {
    coinEl.style.animation = 'none';
    document.querySelector(".coin-statistics__heads-count").textContent = `${headsCount}`;
    document.querySelector(".coin-statistics__tails-count").textContent = `${tailsCount}`;
}

function disableButtons(){
    coinFlipButton.disabled = true;
    coinFlipButton.classList.remove('coin-flip-button--enabled');
    coinFlipButton.classList.add('coin-flip-button--disabled');

    coinResetButton.disabled = true;
    coinResetButton.classList.remove('coin-reset-button--enabled');
    coinResetButton.classList.add('coin-reset-button--disabled');

    setTimeout(function(){
        coinFlipButton.disabled = false;
        coinFlipButton.classList.add('coin-flip-button--enabled');
        coinFlipButton.classList.remove('coin-flip-button--disabled');

        coinResetButton.disabled = false;
        coinResetButton.classList.add('coin-reset-button--enabled');
        coinResetButton.classList.remove('coin-reset-button--disabled');
    },3000);
};

function handleCoinReset() {
    headsCount = 0;
    tailsCount = 0;
    updateStats();
};

