import { duplicatesCheckbox, wrapperDuplicatesCheckbox, labelDuplicatesCheckbox } from './refs';

duplicatesCheckbox.addEventListener('click', handleDuplicatesClick);

function handleDuplicatesClick() {
    if (duplicatesCheckbox.checked) {
        labelDuplicatesCheckbox.classList.add('randomize__checkbox-label--on')
        labelDuplicatesCheckbox.textContent = 'On'
    }

    else if (!duplicatesCheckbox.checked) {
        labelDuplicatesCheckbox.classList.remove('randomize__checkbox-label--on')
        labelDuplicatesCheckbox.textContent = 'Off'
    }
}