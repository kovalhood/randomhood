import { settingCurrentPage } from "./local-storage-page";
import { navNumber, navYesNo, navDice, navCoin, navPassword, containerNumber, containerYesNo, containerDice, containerCoin, containerPassword } from "./navigation";

const openMobileMenu = document.querySelector('.mobile-nav-menu__button--open');
const closeMobileMenu = document.querySelector('.mobile-nav-menu__button--close');
const mobileMenuEl = document.querySelector('.mobile-nav-menu__wrapper');

const mobileNavNumber = document.querySelector('#mobile-nav-number');
const mobileNavYesNo = document.querySelector('#mobile-nav-yesno');
const mobileNavDice = document.querySelector('#mobile-nav-dice');
const mobileNavCoin = document.querySelector('#mobile-nav-coin');
const mobileNavPassword = document.querySelector('#mobile-nav-password');

const sectionNumber = document.querySelector('#section-number');
const sectionYesNo = document.querySelector('#section-yesno');
const sectionDice = document.querySelector('#section-dice');
const sectionCoin = document.querySelector('#section-coin');
const sectionPassword = document.querySelector('#section-password');

const themeSelector = document.querySelector('meta[name="theme-color"]');

// Click on Open/Close handlers
openMobileMenu.addEventListener('click', menuOpenHandler);
closeMobileMenu.addEventListener('click', menuCloseHandler);

// Links handlers
mobileNavNumber.addEventListener('click', handleMobileNavNumberClick);
mobileNavYesNo.addEventListener('click', handleMobileYesNoClick);
mobileNavDice.addEventListener('click', handleMobileDiceClick);
mobileNavCoin.addEventListener('click', handleMobileCoinClick);
mobileNavPassword.addEventListener('click', handleMobilePasswordClick);

function menuOpenHandler() {
    mobileMenuEl.classList.add('is-open');
    themeSelector.setAttribute("content", "#6b48f2");
    document.body.style.overflow = 'hidden';

    // handler for dice z-index fix
    document.querySelector('.dice-wrapper').style.opacity = '0';
    document.querySelector('.dice-wrapper').style.visibility = 'none';
}

function menuCloseHandler() {
    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
    document.body.style.overflow = 'visible';

    // handler for dice z-index fix
    setTimeout(() => {
        document.querySelector('.dice-wrapper').style.opacity = '100';
        document.querySelector('.dice-wrapper').style.visibility = 'visible';
    }, 90);
}

function handleMobileNavNumberClick() {
    // Setting Number as current page on mobile
    mobileNavNumber.classList.add('mobile-current');
    mobileNavYesNo.classList.remove('mobile-current');
    mobileNavDice.classList.remove('mobile-current');
    mobileNavCoin.classList.remove('mobile-current');
    mobileNavPassword.classList.remove('mobile-current');

    // Setting Number as current page on tablet and desktop
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

    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
    document.body.style.overflow = 'visible';

    // Adding smooth animation (need to do that here, because sections have display: none property)
    containerNumber.classList.add('show');
    containerYesNo.classList.remove('show');
    containerDice.classList.remove('show');
    containerCoin.classList.remove('show');
    containerPassword.classList.remove('show');

    settingCurrentPage('Number');
}

function handleMobileYesNoClick() {
    // Setting YesNo as current page on mobile
    mobileNavNumber.classList.remove('mobile-current');
    mobileNavYesNo.classList.add('mobile-current');
    mobileNavDice.classList.remove('mobile-current');
    mobileNavCoin.classList.remove('mobile-current');
    mobileNavPassword.classList.remove('mobile-current');

    // Setting YesNo as current page on tablet and desktop
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

    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
    document.body.style.overflow = 'visible';

    // Adding smooth animation (need to do that here, because sections have display: none property)
    containerNumber.classList.remove('show');
    containerYesNo.classList.add('show');
    containerDice.classList.remove('show');
    containerCoin.classList.remove('show');
    containerPassword.classList.remove('show');

    settingCurrentPage('YesNo');
}

function handleMobileDiceClick() {
    // Setting Dice as current page on mobile
    mobileNavNumber.classList.remove('mobile-current');
    mobileNavYesNo.classList.remove('mobile-current');
    mobileNavDice.classList.add('mobile-current');
    mobileNavCoin.classList.remove('mobile-current');
    mobileNavPassword.classList.remove('mobile-current');

    // Setting Dice as current page on tablet and desktop
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

    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
    document.body.style.overflow = 'visible';

    // handler for dice z-index fix
    setTimeout(() => {
        document.querySelector('.dice-wrapper').style.opacity = '100';
        document.querySelector('.dice-wrapper').style.visibility = 'visible';
    }, 90);

    // Adding smooth animation (need to do that here, because sections have display: none property)
    containerNumber.classList.remove('show');
    containerYesNo.classList.remove('show');
    containerDice.classList.add('show');
    containerCoin.classList.remove('show');
    containerPassword.classList.remove('show');

    settingCurrentPage('Dice');
}

function handleMobileCoinClick() {
    // Setting Coin as current page on mobile
    mobileNavNumber.classList.remove('mobile-current');
    mobileNavYesNo.classList.remove('mobile-current');
    mobileNavDice.classList.remove('mobile-current');
    mobileNavCoin.classList.add('mobile-current');
    mobileNavPassword.classList.remove('mobile-current');

    // Setting Coin as current page on tablet and desktop
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

    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
    document.body.style.overflow = 'visible';

    // handler for coin animation
    document.querySelector('.coin').style.animation = 'none';

    // Adding smooth animation (need to do that here, because sections have display: none property)
    containerNumber.classList.remove('show');
    containerYesNo.classList.remove('show');
    containerDice.classList.remove('show');
    containerCoin.classList.add('show');
    containerPassword.classList.remove('show');

    settingCurrentPage('Coin');
}

function handleMobilePasswordClick() {
    // Setting Password as current page on mobile
    mobileNavNumber.classList.remove('mobile-current');
    mobileNavYesNo.classList.remove('mobile-current');
    mobileNavDice.classList.remove('mobile-current');
    mobileNavCoin.classList.remove('mobile-current');
    mobileNavPassword.classList.add('mobile-current');

    // Setting Password as current page on tablet and desktop
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

    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
    document.body.style.overflow = 'visible';

    // Adding smooth animation (need to do that here, because sections have display: none property)
    containerNumber.classList.remove('show');
    containerYesNo.classList.remove('show');
    containerDice.classList.remove('show');
    containerCoin.classList.remove('show');
    containerPassword.classList.add('show');

    settingCurrentPage('Password');
}

export { handleMobileNavNumberClick, handleMobileYesNoClick, handleMobileDiceClick, handleMobileCoinClick, handleMobilePasswordClick, mobileNavNumber, mobileNavYesNo, mobileNavDice, mobileNavCoin, mobileNavPassword };