// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputValidationEl = document.querySelector("#validation-input");
const onInputBlur = function (event) {
  inputValidationEl.classList.add("invalid");
  if (
    event.currentTarget.value.length === Number(inputValidationEl.dataset.length)
  ) {
    inputValidationEl.classList.replace("invalid", "valid");
  }
};
inputValidationEl.addEventListener("blur", onInputBlur);
