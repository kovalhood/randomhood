import { passwordGenerationResult } from "./password";

const copyButton = document.querySelector('#password--result-copy');
const passwordResultLabel = document.querySelector('#password-result-label');

copyButton.addEventListener('click', handleCopyToClipboard);

function handleCopyToClipboard() {
    passwordResultLabel.classList.remove('password__result-label--hidden');
    passwordResultLabel.classList.add('password__result-label--visible');
    copyButton.disabled = true;
    copyButton.classList.add('password__result-copy--disabled');

    // Get the text field
    let copyText = passwordGenerationResult;

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    setTimeout(() => {
        passwordResultLabel.classList.add('password__result-label--hidden');
        passwordResultLabel.classList.remove('password__result-label--visible');
        copyButton.disabled = false;
        copyButton.classList.remove('password__result-copy--disabled');
    }, 3000);
};