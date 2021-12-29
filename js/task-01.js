const categories = document.querySelector("#categories");
let children = categories.querySelectorAll("#categories>li");
console.log("Number of categories:", children.length);
children.forEach(function(child) {
    console.log("Category:", child.querySelector('h2').textContent);
    console.log("Elements:", child.querySelectorAll('ul>li').length)
});