
const listOfCat = document.querySelectorAll("h2");
const categories = document.querySelector("#categories");
console.log("Number of categories:", listOfCat.length);

const children = categories.children;
for(let i=0; i<listOfCat.length; i+=1){
    console.log("Category:", listOfCat[i].textContent);
    console.log("Elements:", children[i].lastElementChild.children.length)
}