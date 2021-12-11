const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
function makeAbracadabra(event) {
    text.style.fontSize = event.currentTarget.value + "px";
}
range.addEventListener('input', makeAbracadabra)