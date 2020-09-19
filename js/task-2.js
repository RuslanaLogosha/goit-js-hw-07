const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = ingredients[i];
  listEl.append(listItemEl);
}
