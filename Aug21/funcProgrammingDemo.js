
'use strict';
// This code demonstrates the use of a function defined within an if-else block.
let age=17;
if(age< 18){
    var greet =function(){
        console.log("You are not old enough to vote.");
    }
}
else{
    var greet = function(){
        console.log("You are old enough to vote.");
    }


}
greet(); 



//rest parameters in function
function func(a, b, ...rest) {
  console.log(a);      // first argument
  console.log(b);      // second argument
  console.log(rest);   // array of remaining arguments
}
func(1, 2, 3, 4, 5);
// a = 1, b = 2, rest = [3, 4, 5]
