// commonly used math properties

console.log(Math.PI); 

console.log(Math.E); // Euler's number
console.log(Math.SQRT2); // square root of 2
console.log(Math.SQRT1_2); // square root of 1/2
console.log(Math.LN2); // natural logarithm of 2
console.log(Math.LN10); // natural logarithm of 10

//Math Methods

//Rounding methods

console.log(Math.round(4.7)); 
console.log(Math.round(4.4));  //nearesrt integer
console.log(Math.round(4.5)); // rounds to nearest even number

console.log(Math.ceil(4.1)); // rounds up
console.log(Math.ceil(4.9)); 

console.log(Math.floor(4.9));// rounds down
console.log(Math.floor(4.1));

console.log(Math.trunc(4.9)); // removes decimal part
console.log(Math.trunc(4.1)); // removes decimal part

// //Random numbers
console.log(Math.random()); // generates a random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10

// //Power and square root
console.log(Math.pow(2, 3)); // 2 raised to the power of 3
console.log(Math.sqrt(16)); // square root of 16
console.log(Math.cbrt(27)); // cube root of 27
console.log(Math.hypot(3, 4)); // hypotenuse of a right triangle with sides 3 and 4

// //Trigonometric functions
console.log(Math.sin(Math.PI / 2)); // sine of 90 degrees
console.log(Math.cos(0)); // cosine of 0 degrees
console.log(Math.tan(Math.PI / 4)); // tangent of 45 degrees
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)

// absolute value
console.log(Math.abs(-5)); // absolute value of -5
console.log(Math.abs(5)); // absolute value of 5

//Min and Max
console.log(Math.min(1, 2, 3, -1)); // minimum value
console.log(Math.max(1, 2, 3, -1)); // maximum value
//Logarithmic functions
console.log(Math.log(10)); // natural logarithm of 10
console.log(Math.log10(100)); // base 10 logarithm of 100
console.log(Math.log2(8)); // base 2 logarithm of 8

//Exponential function
console.log(Math.exp(1)); // e raised to the power of 1 

//Sign function
console.log(Math.sign(-5)); // -1 for negative numbers
console.log(Math.sign(0)); // 0 for zero
console.log(Math.sign(5)); // 1 for positive numbers

