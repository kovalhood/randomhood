import { handleNavNumberClick, handleYesNoClick, handleDiceClick, handleCoinClick, handlePasswordClick } from "./navigation";
import { handleMobileNavNumberClick, handleMobileYesNoClick, handleMobileDiceClick, handleMobileCoinClick, handleMobilePasswordClick } from "./mobile-menu";
import { navNumber } from "./navigation";
import { mobileNavNumber } from "./mobile-menu";

// Local storage logic for loading previous page on refresh
loadingPreviousPage();

function settingCurrentPage(page) {
    // Logic for storing time of latest activity on page
    let currentTime = new Date();
    let expirationTime = new Date();

    // Setting 30 minutes expiration time
    expirationTime.setTime(currentTime.getTime() + (30 * 60 * 1000));

    localStorage.setItem('current-page', `${page}`);
    localStorage.setItem('page-expiration-time', expirationTime);
}

function loadingPreviousPage() {
    // Comparing latest page load time and current page load time
    let pageLoadTime = new Date();
    let latestPageLoadTime = localStorage.getItem('page-expiration-time');

    // If the difference is less than 30 minutes, then we will see latest page loaded
    // If the difference is more than 30 minutes, then Number page will be loaded as default page
    if (String(pageLoadTime) > String(latestPageLoadTime)) {
        localStorage.setItem('current-page', 'Number');
    }

    // Working with current page display
    const previousPage = localStorage.getItem('current-page');

    if (previousPage === 'Number') {
        handleNavNumberClick();
        handleMobileNavNumberClick();
        return;
    }

    else if (previousPage === 'YesNo') {
        handleYesNoClick();
        handleMobileYesNoClick();
        return;
    }

    else if (previousPage === 'Dice') {
        handleDiceClick();
        handleMobileDiceClick();
        return;
    }

    else if (previousPage === 'Coin') {
        handleCoinClick();
        handleMobileCoinClick();
        return;
    }

    else if (previousPage === 'Password') {
        handlePasswordClick();
        handleMobilePasswordClick();
        return;
    }

    // If local storage is empty, we need to set Number as our default current page
    navNumber.classList.add('current');
    mobileNavNumber.classList.add('mobile-current');
}

export { settingCurrentPage };