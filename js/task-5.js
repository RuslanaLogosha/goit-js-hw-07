// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const inputEl = document.querySelector("#name-input");
const helloName = document.querySelector("#name-output");
const defaultHelloName = "незнакомец";

const onInputChange = function (event) {
  if (event.currentTarget.value !== "") {
    helloName.textContent = event.currentTarget.value;
  } else {
    helloName.textContent = defaultHelloName;
  }
};

inputEl.addEventListener("input", onInputChange);
