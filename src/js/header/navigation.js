const navLogo = document.querySelector('#nav-logo');
const navNumber = document.querySelector('#nav-number');
const navYesNo = document.querySelector('#nav-yesno');
const navDice = document.querySelector('#nav-dice');
const navCoin = document.querySelector('#nav-coin');
const navPassword = document.querySelector('#nav-password');

const sectionNumber = document.querySelector('#section-number');
const sectionYesNo = document.querySelector('#section-yesno');
const sectionDice = document.querySelector('#section-dice');
const sectionCoin = document.querySelector('#section-coin');
const sectionPassword = document.querySelector('#section-password');

// Click on links in header
navLogo.addEventListener('click', handleNavLogoClick);
navNumber.addEventListener('click', handleNavNumberClick);
navYesNo.addEventListener('click', handleYesNoClick);
navDice.addEventListener('click', handleDiceClick);
navCoin.addEventListener('click', handleCoinClick);
navPassword.addEventListener('click', handlePasswordClick);

// Handlers for navigation links
function handleNavLogoClick() {
    navNumber.classList.add('current');
    navYesNo.classList.remove('current');
    navDice.classList.remove('current');
    navCoin.classList.remove('current');
    navPassword.classList.remove('current');

    sectionNumber.classList.remove('hidden');
    sectionYesNo.classList.add('hidden');
    sectionDice.classList.add('hidden');
    sectionCoin.classList.add('hidden');
    sectionPassword.classList.add('hidden');
}

function handleNavNumberClick() {
    navNumber.classList.add('current');
    navYesNo.classList.remove('current');
    navDice.classList.remove('current');
    navCoin.classList.remove('current');
    navPassword.classList.remove('current');

    sectionNumber.classList.remove('hidden');
    sectionYesNo.classList.add('hidden');
    sectionDice.classList.add('hidden');
    sectionCoin.classList.add('hidden');
    sectionPassword.classList.add('hidden');
}

function handleYesNoClick() {
    navNumber.classList.remove('current');
    navYesNo.classList.add('current');
    navDice.classList.remove('current');
    navCoin.classList.remove('current');
    navPassword.classList.remove('current');

    sectionNumber.classList.add('hidden');
    sectionYesNo.classList.remove('hidden');
    sectionDice.classList.add('hidden');
    sectionCoin.classList.add('hidden');
    sectionPassword.classList.add('hidden');
}

function handleDiceClick() {
    navNumber.classList.remove('current');
    navYesNo.classList.remove('current');
    navDice.classList.add('current');
    navCoin.classList.remove('current');
    navPassword.classList.remove('current');

    sectionNumber.classList.add('hidden');
    sectionYesNo.classList.add('hidden');
    sectionDice.classList.remove('hidden');
    sectionCoin.classList.add('hidden');
    sectionPassword.classList.add('hidden');
}

function handleCoinClick() {
    navNumber.classList.remove('current');
    navYesNo.classList.remove('current');
    navDice.classList.remove('current');
    navCoin.classList.add('current');
    navPassword.classList.remove('current');

    sectionNumber.classList.add('hidden');
    sectionYesNo.classList.add('hidden');
    sectionDice.classList.add('hidden');
    sectionCoin.classList.remove('hidden');
    sectionPassword.classList.add('hidden');
}

function handlePasswordClick() {
    navNumber.classList.remove('current');
    navYesNo.classList.remove('current');
    navDice.classList.remove('current');
    navCoin.classList.remove('current');
    navPassword.classList.add('current');

    sectionNumber.classList.add('hidden');
    sectionYesNo.classList.add('hidden');
    sectionDice.classList.add('hidden');
    sectionCoin.classList.add('hidden');
    sectionPassword.classList.remove('hidden');
}