const a = [ undefined, , ];
console.log(0 in a) // true
console.log(1 in a) // false


const b = [ , , ];
console.log(0 in b) // true
console.log(1 in b)
// elsewhere in boobooland
//Array.prototype[1] = 'fool!'
// and in my code
const c = [ undefined, , ];
console.log(0 in c) // true
console.log(1 in c) // true

const d = new Array(100);
let i = 0
d.forEach(() => i++);
console.log(i) // 0 - the callback is never called

const todos = [
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

for(let td of todos){
    console.log(td.text);
}

todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoComp = todos.filter(function(todo){
    return todo.isCompleteted === true;
});
console.log(todoComp);

const todoText2 = todos.filter(function(todo){
    return todo.isCompleteted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoText2);