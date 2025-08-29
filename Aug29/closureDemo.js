//A closure is the combination of a function 
// and its lexical environment (the scope in which it was created).

function outer() {
    let count = 0;   // variable in outer scope

    function inner() {
        count++;    // inner function can access outer variable
        return count;
    }
    return inner;   // return inner function
}

let counter = outer();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
