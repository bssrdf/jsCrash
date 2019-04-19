function multiplier(factor) {
    return number => number * factor;
}

//console.log(multiplier(5));

let twice = multiplier(2);
console.log(twice(5));
    // → 10
let triple = multiplier(3);
console.log(triple(10));


function add(counter) {    
 //   function plus() {counter += 1;}    
    return () => {
        counter += 1; 
        console.log(counter);
    }
}

let increment = add(0);

increment();
increment();
increment();
