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

// const categoriesNames = document.querySelectorAll(".item");
// console.log(`В списке ${categoriesNames.length} категории.`);

// console.log(`Категория: ${categoriesNames[0].firstElementChild.textContent}`);
// const categoriesListItems = categoriesNames[0].lastElementChild.children;
// console.log(`Количество элементов: ${categoriesListItems.length}`);

// for (let i = 0; i < categoriesNames.length; i += 1) {
//   console.log(`Категория: ${categoriesNames[i].firstElementChild.textContent}`);
//   const categoriesListItems = categoriesNames[i].lastElementChild.children;
//   console.log(`Количество элементов: ${categoriesListItems.length}`);
// }

// categoriesNames.forEach((categoriesName) =>
//   console.log(
//     `Категория: ${categoriesName.firstElementChild.textContent}\nКоличество элементов: ${categoriesName.lastElementChild.children.length}`
//   )
// );

//===========
// const a = /abc/;
// const b = /def/;


// console.log(/\s+/.exec('9,8,7,6,5,4,3,2,1 Старт!').index);

// const a = { b: 1 }
// const b = typeof (JSON.parse(JSON.stringify(a)));
// console.log(typeof(JSON.parse(JSON.stringify(a))));
// console.log(typeof(JSON.stringify(a)));

// console.log(a)
// console.log(b)
// console.log(a===b)

// const a = null;
// console.log(a == null);

// const a = [1, 2, 3, 4, 5];
// console.log(a.filter((i,el) => el !== 4));

// let from = 1;
// console.log(from);

// let t = setInterval(() => {
//   setTimeout(() => {
//     clearInterval(t);
// }, 3000)
// console.log('hi');
// },1000)

// const result = /\d*/.exec('У Вани было 5 яблок, а у Пети 4.').index
// console.log(result);

// // 
// var num1 = [1, 2, 3];
// var num2 = [4, 5, 6];
// var num3 = [7, 8, 9];
// var nums = num1.concat(num2, num3)
// console.log(nums)

// let a = '3' + 2 - 1;
// console.log(typeof (a));

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(array.forEach((el, ind) => { array[ind] = el + 1 }));


// console.log(5+ +'5')

// let a = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log([...a.slice(0,5),6,...a.slice(5)])

// console.log('привет, Geekbrains'.slice(-10));

// const a = fetch('www.google.').then(response => {
//   console.log(response.status)
// })

// console.log(a)

// let _Var = 1;
// console.log(_Var)

// const a = /abc/;
// console.log(typeof(a+1))

// const a = undefined;
// console.log(a==null)


// for (var i = 0; i <= 10; i++) { };
// console.log(i)

// console.log(new Date(1543990506864).getTime())

// const a = null;
// console.log(a==undefined)
// 'use strict'
// var a = 1;
// console.log((a > 0) ? (a += 1, a++) : a)

// let from = 1;
// console.log(from)

// const a = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
// const b = new Set(a);
// b.join(' ');
// console.log(b)

// const person = { name: 'Иван', age: 23 };
// person = {
//   ...person, age: 25, job: 'dfdfdf'
// };
// console.log(person)
// 'use strict'
// const a = () => 2;
// const b = () => 4;
// console.log(a+b)


// const a = /abc/;

// console.log(+!null)


// const a = 5;
// const b = a => a;
// console.log(b)

// const a = /abc/;
// console.log(typeof a)

// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];

// const sortByActiveDays = (a, b) => b.daysActive - a.daysActive;

// console.log(users.sort(sortByActiveDays));
// var a = 'hello'
// function b() {
//   console.log(a)
//   var a = 'eer'
//   console.log(a)
// }
// b();


// async function bar() {
//   return Promise.resolve(18);
// }
// async function foo(){ }
//   const resl = foo();
//   const res2 = bar();
// console. log(resl, res2);

// async function b() {
//   return Promise.resolve(10)
// }

// async function f() { }
// const r1 = f()
// const r2 = b()

// console.log(r1)
// function f() {
//     console.log(typeof(this.toString())); // 123
// }
// f.call(123);

// var f = function() {
//     // Функция f вызывается с помощью простого вызова - f(),
//     // поэтому this ссылается на глобальный объект
//     this.x = 5; // window.x = 5;
    
//     // В пункте 1.1 также указано, что в самовызывающихся функциях this также ссылается на глобальный объект
//     (function() {
//         this.x = 3;  // window.x = 3
//     })();
//     console.log(this.x); // console.log(window.x)
// };

// new f();

// for (var i = 0; i < 3; i++) {
//   setTimeout(function() { console.log(i); }, 1000 + i);
// }

// for (var i = 0; i < 3; i++) {
//   console.log(i)
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(function(i_local) { 
//     return function() { alert(i_local); } 
//   }(i), 1000 + i);
// }


// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
  
//     console.log(`The index of this number is: ${i} `);
  //  console.log(arr.length)
//}
// console.log(i)
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

// const max = 10;

// for (let i = 0; i <= max; i += 1) {
//   console.log(i);
// }
// console.log(i)

// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   // using the ES6 let syntax, it creates a new binding
//   // every single time the function is called
//   // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

// var myVar = 1;

// function setMyVar() {
//   myVar = 2;
// }

// setMyVar();

// console.log(myVar);

// var myVar;
// function setMyVar() {
//   var myVar = 2;
// }

// setMyVar();

// console.log(myVar);
// console.log(myVar);
// var myVar;

// var myVar = 1;
// function doSomething() {
  
//   if (true) {
//     console.log(myVar);
//     var myVar = 2;
//     console.log(myVar);
//   }
// }

// doSomething()

// console.log(varTest);
// var varTest = 1;

// console.log(letTest);
// let letTest = 2;


// var var1;
// console.log(var1);

// console.log(var2);
// var var2 = 1;


// let var1;
// console.log(var1);

// console.log(var2);
// let var2 = 1;


// let mutableVar = 1;
// const immutableVar = 2;

// mutableVar = 3;
// immutableVar = 4;

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(typeof (a))
// console.log(a===c)


// function bark() {
//   console.log('Woof!');
// }

// bark.animal = 'dog';
// console.log(bark.animal);