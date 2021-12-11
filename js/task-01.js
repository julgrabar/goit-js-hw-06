
const listOfCat = document.querySelectorAll("h2");
const categories = document.querySelector("#categories");
console.log("Number of categories:", listOfCat.length);
 
console.log("Category:", listOfCat[0].textContent);
console.log("Elements:", categories.firstElementChild.firstElementChild.nextElementSibling.children.length);

console.log("Category:",listOfCat[1].textContent);
console.log("Elements:", categories.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.children.length);

console.log("Category:", listOfCat[2].textContent);
console.log("Elements:", categories.lastElementChild.firstElementChild.nextElementSibling.children.length);
