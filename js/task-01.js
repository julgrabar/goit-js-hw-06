// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const NumCat = document.querySelectorAll("h2");
const categories = document.querySelector("#categories");
console.log("Number of categories:", NumCat.length);
// console.log(NumCat)
console.log("Category:", categories.firstElementChild.firstElementChild.textContent);
console.log("Elements:", categories.firstElementChild.firstElementChild.nextElementSibling.children.length);

console.log("Category:", categories.firstElementChild.nextElementSibling.firstElementChild.textContent);
console.log("Elements:", categories.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.children.length);

console.log("Category:", categories.lastElementChild.firstElementChild.textContent);
console.log("Elements:", categories.lastElementChild.firstElementChild.nextElementSibling.children.length);
