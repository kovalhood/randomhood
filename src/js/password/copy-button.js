import { passwordGenerationResult } from "./password";

const copyButton = document.querySelector('#password--result-copy');
const passwordResultLabel = document.querySelector('#password-result-label');

copyButton.addEventListener('click', handleCopyToClipboard);

function handleCopyToClipboard() {
    passwordResultLabel.classList.remove('password__result-label--hidden');
    passwordResultLabel.classList.add('password__result-label--visible');
    passwordResultLabel.textContent = 'Copied';
    copyButton.disabled = true;
    copyButton.innerHTML = `<svg
          class="password__result-copy--icon"
          width="20"
          height="20"
          aria-label="plus"
        >
          <use href="./images/icons.svg#plus"></use>
        </svg>`
    
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
        copyButton.innerHTML = `<svg
          class="password__result-copy--icon"
          width="20"
          height="20"
          aria-label="plus"
        >
          <use href="./images/icons.svg#copy"></use>
        </svg>`
        copyButton.classList.remove('password__result-copy--disabled');

        
    }, 2000);
};

export { copyButton, passwordResultLabel };