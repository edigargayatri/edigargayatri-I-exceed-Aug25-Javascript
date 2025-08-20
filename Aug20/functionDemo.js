function func(a, b) {
  return a + b;
}
console.log(func(5, 10)); 
console.log(func(20, 30));

//Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 10));

let gmail=(name,age,city)=>name+age+city+'@'+'gmail.com';
console.log(gmail("gayatri", 23, "blore"));

let space =(words) =>words.trim().toUpperCase();
console.log(space("   Gayatri   "));