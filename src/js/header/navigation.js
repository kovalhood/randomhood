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

const containerNumber = document.querySelector('.number--container');
const containerYesNo = document.querySelector('.yesno--container');
const containerDice = document.querySelector('.dice--container');
const containerCoin = document.querySelector('.coin--container');
const containerPassword = document.querySelector('.password--container');

// Animation duration for switch between pages
const animationDuration = 80;

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

    // Adding smooth animation (need to do that here, because sections have display: none property)
    setTimeout(() => containerNumber.classList.add('show'), animationDuration);
    containerYesNo.classList.remove('show');
    containerDice.classList.remove('show');
    containerCoin.classList.remove('show');
    containerPassword.classList.remove('show');

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

    // Adding smooth animation (need to do that here, because sections have display: none property)
    setTimeout(() => containerNumber.classList.add('show'), animationDuration);
    containerYesNo.classList.remove('show');
    containerDice.classList.remove('show');
    containerCoin.classList.remove('show');
    containerPassword.classList.remove('show');

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

    // Adding smooth animation (need to do that here, because sections have display: none property)
    containerNumber.classList.remove('show');
    setTimeout(() => containerYesNo.classList.add('show'), animationDuration);
    containerDice.classList.remove('show');
    containerCoin.classList.remove('show');
    containerPassword.classList.remove('show');

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
    
    // Adding smooth animation (need to do that here, because sections have display: none property)
    containerNumber.classList.remove('show');
    containerYesNo.classList.remove('show');
    setTimeout(() => containerDice.classList.add('show'), animationDuration);
    containerCoin.classList.remove('show');
    containerPassword.classList.remove('show');

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
    
    // Adding smooth animation (need to do that here, because sections have display: none property)
    containerNumber.classList.remove('show');
    containerYesNo.classList.remove('show');
    containerDice.classList.remove('show');
    setTimeout(() => containerCoin.classList.add('show'), animationDuration);
    containerPassword.classList.remove('show');

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

    // Adding smooth animation (need to do that here, because sections have display: none property)
    containerNumber.classList.remove('show');
    containerYesNo.classList.remove('show');
    containerDice.classList.remove('show');
    containerCoin.classList.remove('show');
    setTimeout(() => containerPassword.classList.add('show'), animationDuration);

    settingCurrentPage('Password');
}

export { handleNavNumberClick, handleYesNoClick, handleDiceClick, handleCoinClick, handlePasswordClick, sectionNumber, navNumber, navYesNo, navDice, navCoin, navPassword, containerNumber, containerYesNo, containerDice, containerCoin, containerPassword };
