const categories = document.querySelector("#categories");

const arrayOfCategories = categories.querySelectorAll(".item");

const numberOfCategories = categories.querySelectorAll(".item").length;
console.log("Number of categories:", numberOfCategories);

arrayOfCategories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const numberOfElements = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}\nElements: ${numberOfElements}`);
});



// // чернетка розв'язання
// // вибираємо ul з ідентифікатором #categories
// const A = document.querySelector("#categories"); 

// // із ul з ідентифікатором #categories вибираємо всі елементи з класом .item, 
// // отримуємо список із ul; 
// // рахуємо довжину масива із ul
// const B = A.querySelectorAll(".item");
// const C = B.length; 
// console.log("Number of categories:", C);

// // для кожного елементу масиву B перебираємо категорії
// B.forEach((H) => {
//   // текст заголовка
//   const F = H.querySelector("h2").textContent;
//   // кількість елементів
//   const G = H.querySelectorAll("li").length;
//   console.log(`Category: ${F}\nElements: ${G}`);
// });




// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });