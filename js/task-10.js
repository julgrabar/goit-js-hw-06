function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");



function createBoxes(amount) {
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    const size = (30 + ((i - 1) * 10)) + 'px';
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = size;
    div.style.height = size;
    arr.push(div);
  }
  boxes.append(...arr)
}

function getAmount() {
  let amount = input.value;
  createBoxes(amount);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes);



