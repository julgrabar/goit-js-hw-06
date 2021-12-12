const input = document.querySelector('#validation-input');
input.addEventListener('blur', (event) => {
    input.classList.remove('invalid', 'valid');
    event.currentTarget.value.trim().length === Number(input.dataset.length)? input.classList.add('valid') : input.classList.add('invalid');
    
})