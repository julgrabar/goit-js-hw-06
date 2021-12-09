const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.addEventListener('change', (event) => {
    console.log(event.currentTarget.value);
    text.style.fontSize = event.currentTarget.value + "px";
    console.log(text.style.fontSize)
})