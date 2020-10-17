// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let counterValue = 0;
const decrementFn = function (counterValue) {
  return counterValue -= 1;
};
const incrementFn = function (counterValue) {
  return counterValue += 1;
};

const decrementBtn = document.querySelector("button[data-action=decrement]");
const incrementBtn = document.querySelector("button[data-action=increment]");
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue = decrementFn(counterValue);
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue = incrementFn(counterValue);
  valueEl.textContent = counterValue;
});

