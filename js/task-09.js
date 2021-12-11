// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const color = document.querySelector(" .color");
btn.addEventListener('click', changeColor);
function changeColor() {
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}