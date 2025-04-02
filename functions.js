function foo(x=1, y=2) {
    return x + y;
};
    // versus
var bar = (x=1,y=2) => x + y;


console.log(foo(1,4));
console.log(bar(1,4));


console.log(foo());
console.log(bar());

(() => {
 console.log("unnamed arrow function invocation"); 
})();


var chessboard = function(size){
    let cb = '';
    for(let j=0; j<size; ++j){
        var out1 = j % 2 == 0 ? true : false;
        for(let i=0; i<size; ++i){
            var out2;
            if (out1)
               out2 = i % 2 == 0 ? true : false;
            else
               out2 = i % 2 == 0 ? false : true;
            if(out2)
               cb += ' ';
            else
               cb += '#';               
        }
        cb += '\n';
    }
    return cb;
}

console.log(chessboard(8));


// higher order function

const createScream = logger => message =>
   logger(message.toUpperCase() + "!!!")

const scream = createScream(message => console.log(message))
scream('functions can be returned from other functions')
scream('createScream returns a function')
scream('scream invokes that returned function')
