import { settingCurrentPage } from "./local-storage-page";
import { mobileNavNumber, mobileNavYesNo, mobileNavDice, mobileNavCoin, mobileNavPassword } from "./mobile-menu";

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

// Click logic for links in header
navLogo.addEventListener('click', handleNavLogoClick);
navNumber.addEventListener('click', handleNavNumberClick);
navYesNo.addEventListener('click', handleYesNoClick);
navDice.addEventListener('click', handleDiceClick);
navCoin.addEventListener('click', handleCoinClick);
navPassword.addEventListener('click', handlePasswordClick);

// Handlers for navigation links
function handleNavLogoClick() {
    // Setting Number as current page on tablet and desktop
    navNumber.classList.add('current');
    navYesNo.classList.remove('current');
    navDice.classList.remove('current');
    navCoin.classList.remove('current');
    navPassword.classList.remove('current');

    // Setting Number as current page on mobile
    mobileNavNumber.classList.add('mobile-current');
    mobileNavYesNo.classList.remove('mobile-current');
    mobileNavDice.classList.remove('mobile-current');
    mobileNavCoin.classList.remove('mobile-current');
    mobileNavPassword.classList.remove('mobile-current');

    sectionNumber.classList.remove('hidden');
    sectionYesNo.classList.add('hidden');
    sectionDice.classList.add('hidden');
    sectionCoin.classList.add('hidden');
    sectionPassword.classList.add('hidden');

    settingCurrentPage('Number');
}

function handleNavNumberClick() {
    // Setting Number as current page on tablet and desktop
    navNumber.classList.add('current');
    navYesNo.classList.remove('current');
    navDice.classList.remove('current');
    navCoin.classList.remove('current');
    navPassword.classList.remove('current');

    // Setting Number as current page on mobile
    mobileNavNumber.classList.add('mobile-current');
    mobileNavYesNo.classList.remove('mobile-current');
    mobileNavDice.classList.remove('mobile-current');
    mobileNavCoin.classList.remove('mobile-current');
    mobileNavPassword.classList.remove('mobile-current');

    sectionNumber.classList.remove('hidden');
    sectionYesNo.classList.add('hidden');
    sectionDice.classList.add('hidden');
    sectionCoin.classList.add('hidden');
    sectionPassword.classList.add('hidden');

    settingCurrentPage('Number');
}

function handleYesNoClick() {
    // Setting YesNo as current page on tablet and desktop
    navNumber.classList.remove('current');
    navYesNo.classList.add('current');
    navDice.classList.remove('current');
    navCoin.classList.remove('current');
    navPassword.classList.remove('current');

    // Setting YesNo as current page on mobile
    mobileNavNumber.classList.remove('mobile-current');
    mobileNavYesNo.classList.add('mobile-current');
    mobileNavDice.classList.remove('mobile-current');
    mobileNavCoin.classList.remove('mobile-current');
    mobileNavPassword.classList.remove('mobile-current');

    sectionNumber.classList.add('hidden');
    sectionYesNo.classList.remove('hidden');
    sectionDice.classList.add('hidden');
    sectionCoin.classList.add('hidden');
    sectionPassword.classList.add('hidden');

    settingCurrentPage('YesNo');
}

function handleDiceClick() {
    // Setting Dice as current page on tablet and desktop
    navNumber.classList.remove('current');
    navYesNo.classList.remove('current');
    navDice.classList.add('current');
    navCoin.classList.remove('current');
    navPassword.classList.remove('current');

    // Setting Dice as current page on mobile
    mobileNavNumber.classList.remove('mobile-current');
    mobileNavYesNo.classList.remove('mobile-current');
    mobileNavDice.classList.add('mobile-current');
    mobileNavCoin.classList.remove('mobile-current');
    mobileNavPassword.classList.remove('mobile-current');

    sectionNumber.classList.add('hidden');
    sectionYesNo.classList.add('hidden');
    sectionDice.classList.remove('hidden');
    sectionCoin.classList.add('hidden');
    sectionPassword.classList.add('hidden');

    // handler for dice z-index fix
    document.querySelector('.dice-wrapper').style.opacity = '100';
    document.querySelector('.dice-wrapper').style.visibility = 'visible';
    
    settingCurrentPage('Dice');
}

function handleCoinClick() {
    // Setting Coin as current page on tablet and desktop
    navNumber.classList.remove('current');
    navYesNo.classList.remove('current');
    navDice.classList.remove('current');
    navCoin.classList.add('current');
    navPassword.classList.remove('current');

    // Setting Coin as current page on mobile
    mobileNavNumber.classList.remove('mobile-current');
    mobileNavYesNo.classList.remove('mobile-current');
    mobileNavDice.classList.remove('mobile-current');
    mobileNavCoin.classList.add('mobile-current');
    mobileNavPassword.classList.remove('mobile-current');

    sectionNumber.classList.add('hidden');
    sectionYesNo.classList.add('hidden');
    sectionDice.classList.add('hidden');
    sectionCoin.classList.remove('hidden');
    sectionPassword.classList.add('hidden');

    // handler for coin animation
    document.querySelector('.coin').style.animation = 'none';
    
    settingCurrentPage('Coin');
}

function handlePasswordClick() {
    // Setting Password as current page on tablet and desktop
    navNumber.classList.remove('current');
    navYesNo.classList.remove('current');
    navDice.classList.remove('current');
    navCoin.classList.remove('current');
    navPassword.classList.add('current');

    // Setting Password as current page on mobile
    mobileNavNumber.classList.remove('mobile-current');
    mobileNavYesNo.classList.remove('mobile-current');
    mobileNavDice.classList.remove('mobile-current');
    mobileNavCoin.classList.remove('mobile-current');
    mobileNavPassword.classList.add('mobile-current');

    sectionNumber.classList.add('hidden');
    sectionYesNo.classList.add('hidden');
    sectionDice.classList.add('hidden');
    sectionCoin.classList.add('hidden');
    sectionPassword.classList.remove('hidden');

    settingCurrentPage('Password');
}

export { handleNavNumberClick, handleYesNoClick, handleDiceClick, handleCoinClick, handlePasswordClick, navNumber, navYesNo, navDice, navCoin, navPassword };