let counterValue = document.querySelector("#value");
let counter = 0;
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
decrBtn.addEventListener("click", () => {
    counter -= 1;
    counterValue.innerHTML = counter;
    
});
incrBtn.addEventListener("click", () => {
    counter += 1;
    counterValue.innerHTML = counter;
}
)
