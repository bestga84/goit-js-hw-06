const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const ulItemEl = document.querySelector('#ingredients');

const listOfIngredients = ingredients.map(name => {
    const liItem = document.createElement('li');
    liItem.classList.add('item');
    liItem.textContent = name;

    return liItem;
});

ulItemEl.append(...listOfIngredients);

console.log(ulItemEl);


// // const liItem = ulItemEl.createElement('li');
// // liItem.classList = "item";
// // liItem.textContent = ingredients[0];
// // list.append(liItem);


// const A = document.querySelector('#ingredients');

// const B = ingredients.map(name => {
//     const C = document.createElement('li');
//     C.classList.add('item');
//     C.textContent = name;

//     return C;
// });

// A.append(...B);

// console.log(A);