const form = document.querySelector('.login-form')
form.addEventListener('submit', makeSubmit);
function makeSubmit(event) {
    event.preventDefault();
    if (form.email.value !== "" && form.password.value !== "") {
        const result = { Email: form.email.value, Password: form.password.value };
        console.log(result);
        form.reset();
        return result;
    }else{
        alert("Bсе поля должны быть заполнены!")}
}
