let age = 30;
age = 31;
console.log(age);

var origNum = "23";

console.log(origNum);

var newNum = age + origNum

console.log(newNum);

const x = null;

const y = undefined;

var l;

console.log(typeof x);

console.log(typeof y);

console.log(typeof l);

const s ='tech, computer, it, code';

console.log(s.split(','));

const numbers = new Array(1, 2, 3, 4, 5);

const nums = [1, 3, 4, 6, 9];

console.log(numbers);

console.log(nums);

const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits);

fruits.push('mongo');

console.log(fruits);

const person = { firstName: 'John', 
lastName:'Doe', 
age: 30,
hobbies:  ['music', 'sports'],
address: {
    street: '1267 Main St',
    city: 'Boston',
    state: 'MA'
} 
};

person.email = "john@homtial.com";

console.log(person);

console.log(typeof person);

//destructuring an object
const {firstName, lastName, address:{city}} = person;

console.log(firstName);
console.log(city);

const todo = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleteted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleteted: true
    },
    {
        id: 3,
        text: 'dentist appointment',
        isCompleteted: false
    }
];

console.log(todo);

const meeting = todo[1].text;

console.log(meeting);

for(let i=0; i<10; i++){
    console.log(`For loop number: ${i}`);
}


const s2 = 'ABCABA';

let s3 = [2, 4, 10, 8, 6];

const s1Ind = s2.indexOf('B');

console.log(s1Ind);

console.log(s3);


[s3[1], s3[2]] = [s3[2], s3[1]];

console.log(s3);

var ar1 = [[6,9], [10, 20], [5, 11], [1,2], [2,100], [3,4]];

console.log(ar1);
ar1.sort()
console.log(ar1);
ar1.sort(function(a,b){return a[1]-b[1];});
console.log(ar1);
