function foo(x=1, y=2) {
    return x + y;
};
    // versus
var bar = (x=1,y=2) => x + y;


console.log(foo(1,4));
console.log(bar(1,4));


console.log(foo());
console.log(bar());