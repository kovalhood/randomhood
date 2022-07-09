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

// Click on Open/Close Handlers
openMobileMenu.addEventListener('click', menuOpenHandler);
closeMobileMenu.addEventListener('click', menuCloseHandler);

// Links Handlers
mobileNavNumber.addEventListener('click', handleMobileNavNumberClick);
mobileNavYesNo.addEventListener('click', handleMobileYesNoClick);
mobileNavDice.addEventListener('click', handleMobileDiceClick);
mobileNavCoin.addEventListener('click', handleMobileCoinClick);
mobileNavPassword.addEventListener('click', handleMobilePasswordClick);

function menuOpenHandler() {
    mobileMenuEl.classList.add('is-open');
    themeSelector.setAttribute("content", "#6b48f2");
}

function menuCloseHandler() {
    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
}

function handleMobileNavNumberClick() {
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

    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
}

function handleMobileYesNoClick() {
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

    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
}

function handleMobileDiceClick() {
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

    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
}

function handleMobileCoinClick() {
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

    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
}

function handleMobilePasswordClick() {
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

    mobileMenuEl.classList.remove('is-open');
    themeSelector.setAttribute("content", "#ffffff");
}