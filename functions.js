function foo(x,y) {
    return x + y;
};
    // versus
var bar = (x,y) => x + y;


console.log(foo(1,4));
console.log(bar(1,4));
