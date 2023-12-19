const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



// const styleEl = document.querySelector("body");

const styleCssEl = document.createElement('style');
// styleCssEl.classList.add('item-flex');

styleCssEl.textContent = ".item-flex {list-style: width: 260px; none; display: flexbox;}";

// styleCssEl.insertAdjacentHTML("beforeend", styleCssEl);

console.log(styleCssEl);




const imageEl = document.querySelector(".gallery");

imageEl.classList.add('item-flex');

const imagesMarkup = images.map(image => {return `<li><img alt="${image.alt}" src="${image.url}" width="300px"></li>`;}).join("");

imageEl.insertAdjacentHTML("afterend", imagesMarkup, styleCssEl);

console.log(imageEl);





// чернетка, на буквах А, В, С легше скласти логіку, і потімт записати в нормальних іменах
// const A = document.querySelector(".gallery");

// const B = images.map(image => {return `<li><img alt="${image.alt}" src="${image.url}" width="300px"></li>`;}).join("");

// A.insertAdjacentHTML("beforeend", B);

// console.log(A);