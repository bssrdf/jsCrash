var a = {
    index: 1
};
    // later
console.log( a ); // ??
    // even later
// a.index++;

function increment(){
    a.index += 50;
}
function check(){
    console.log(a);
}
let pid = setInterval(check, 500);
function stopcheck(){
    clearInterval(pid);
}

setTimeout(increment, 3000);
setTimeout(stopcheck, 4000);

// console.log( a ); // ??




  