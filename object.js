var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();
myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
//myObj[str]              = 'String value';
myObj.str               = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';
console.log(myObj);

function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += objName + '.' + i + ' = ' + obj[i] + '\n';
      }
    }
    return result;
  }
  console.log(showProps(myObj, 'myObj'));

var check = ['x', 'y', 'z'];
console.log(Object.keys(check));

var dict = {};

dict['y'] = 5;
dict['x'] = 3;


console.log(Object.keys(dict));
console.log(Object.values(dict));

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


obj = {
    a: 1,
    b: 2,
  };
  let copyobj = obj;
  
  obj.a = 5;
  console.log(copyobj.a);


function copy(mainObj) {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;
    for (key in mainObj) {
      objCopy[key] = mainObj[key]; // copies each property to the objCopy object
    }
    return objCopy;
}
const mainObj = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4,
    },
}
  console.log(copy(mainObj));

  obj = {
    a: 1,
    b: 2,
  };
  let objCopy = Object.assign({}, obj);
  console.log(objCopy);  
  objCopy.b = 80;
  console.log(objCopy); // result - { a: 1, b: 80 }
  console.log(obj); // result - { a: 1, b: 2 }

  obj = {
    a: 1,
    b: {
      c: 2,
    },
  }
  let newObj = Object.assign({}, obj);
  console.log(newObj); // { a: 1, b: { c: 2} }
  obj.a = 10;
  console.log(obj); // { a: 10, b: { c: 2} }
  console.log(newObj); // { a: 1, b: { c: 2} }
  newObj.a = 20;
  console.log(obj); // { a: 10, b: { c: 2} }
  console.log(newObj); // { a: 20, b: { c: 2} }
  newObj.b.c = 30;
  console.log(obj); // { a: 10, b: { c: 30} }
  console.log(newObj); // { a: 20, b: { c: 30} }


  let someObj = {
    a: 2
  }
  console.log('someObj', someObj);
  obj = Object.create(someObj, { 
    b: {
      value: 2,  
    },
    c: {
      value: 3,
      enumerable: true,  
    },
  });
  console.log(obj);
  objCopy = Object.assign({}, obj);
  console.log(objCopy); // { c: 3 }


  var comb = {...dict, ...object};
  console.log('spreaded objects:', comb);

  obj = {b : {value : 2}, c: { val : 3, enumerable: true, }, d: 10};

  // ES6 way of getting properties from an object
  let {value} = obj.b;
  let {enumerable} = obj.c;
  let {b, c} = obj;
  console.log(value);
  console.log(enumerable);
  console.log(b);
  console.log(c);
