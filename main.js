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
