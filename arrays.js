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