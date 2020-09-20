// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories,
//то есть элементов li.item.Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в
//консоль текст заголовка элемента(тега h2) и количество элементов в категории
//(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

// const categoriesList = document.querySelector("#categories");
// console.log(categoriesList);

const categoriesNames = document.querySelectorAll(".item");
console.log(`В списке ${categoriesNames.length} категории.`);

// console.log(`Категория: ${categoriesNames[0].firstElementChild.textContent}`);
// const categoriesListItems = categoriesNames[0].lastElementChild.children;
// console.log(`Количество элементов: ${categoriesListItems.length}`);

// for (let i = 0; i < categoriesNames.length; i += 1) {
//   console.log(`Категория: ${categoriesNames[i].firstElementChild.textContent}`);
//   const categoriesListItems = categoriesNames[i].lastElementChild.children;
//   console.log(`Количество элементов: ${categoriesListItems.length}`);
// }

categoriesNames.forEach((categoriesName) =>
  console.log(
    `Категория: ${categoriesName.firstElementChild.textContent}\nКоличество элементов: ${categoriesName.lastElementChild.children.length}`
  )
);
