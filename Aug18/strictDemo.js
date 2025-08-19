'use strict';
function strictDemo() {
    return x+x;
}
console.log(strictDemo(10,30)); 

'use strict';
//x=010;
// This will throw an error in strict mode
console.log(x);


'use strict';
x=10;
console.log(x);

'use strict';
function deleteDemo() {
    var x = 1000;
    console.log(delete x); // This will throw an error in strict mode
    console.log(x);
}