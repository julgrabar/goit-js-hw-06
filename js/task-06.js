const input = document.querySelector('#validation-input');
input.addEventListener('blur', (event) => {
    input.classList.remove('invalid', 'valid')
    if (event.currentTarget.value.trim().length === input[data-length]) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
})