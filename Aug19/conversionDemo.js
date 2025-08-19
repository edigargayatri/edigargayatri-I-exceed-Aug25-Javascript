

// Conversion Numerical | Boolean
 
let x="123";
console.log(Number(x));
console.log(typeof x);
 
let y=null;
console.log(y);
console.log(typeof y);
console.log(Number(y));
 
let z=undefined;
console.log(z);
console.log(typeof z);
console.log(Number(z));
 
let a=false;
console.log(typeof a);
console.log(Number(a));
 
let a1=true;
console.log(typeof a1);
console.log(Number(a1));
 
let a2="hi";
console.log(Number(a2));
 
// Boolean of 0 ,null, undefined ,NaN resultant with false
let res=Boolean(1);
console.log(res)

 let value=true
 console.log(String(value))

console.log(String(null))
console.log(String(undefined))
 console.log(String(false))
console.log(String(0))
console.log(String(1))
console.log(String(NaN))
console.log(String(Infinity))

console.log("Glow" > "Glee");      // true, because "l" > "l", "o" > "e"
console.log(2 > 1);                // true
console.log("2" < 1);              // false, "2" becomes 2, 2 < 1 is false
console.log("123" < "20");         // false, string comparison: "1" < "2" is true, but "123" > "20"
console.log("123" < 20);           // false, "123" becomes 123, 123 < 20 is false
console.log("123" > 20);           // true, "123" becomes 123, 123 > 20 is true
console.log(true==1)
console.log(false==0)
