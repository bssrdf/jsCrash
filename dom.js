//console.log(window);
//window.alert(1);
// single element
const form = document.getElementById('my-form');

console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

console.log(document.querySelectorAll('item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));