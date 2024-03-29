const inputs = document.getElementsByClassName('js-fake-input');
const selects = document.getElementsByClassName('js-select');

const sortingEl = document.querySelector("#sort-type");
const fakeInputEl = document.querySelector('.js-fake-input');

// All of that is created for centering text in selected field on iOS Safari
for (let i = 0; i < inputs.length; i++) {
    getSelected(i);
    selects[i].addEventListener("change", function() {
    getSelected(i);
    });
}

// Taking selected element
function getSelected(i){
    inputs[i].value = selects[i].options[selects[i].selectedIndex].text;
}

// Losing focus from selected element after picking option
sortingEl.addEventListener('change', handleSelectChange);

function handleSelectChange() {
    fakeInputEl.value === 'None' ? fakeInputEl.classList.remove('sort--selected') : fakeInputEl.classList.add('sort--selected');
    this.blur();
}