var check = ['x', 'y', 'z'];
console.log(Object.keys(check));

var dict = {};

dict['y'] = 5;
dict['x'] = 3;


console.log(Object.keys(dict));

var object = { 70: 'x', 21: 'y', 35: 'z' }; 
console.log(Object.keys(object)); 

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};
console.log(Object.keys(descriptions)); 
    
var getNode = function(key, value){
  node = {
    prev: null,
    next: null,
    val: value,
    key,
  };
  return node;
};
var node = getNode(10, 'a');
console.log(Object.keys(node)); 
