var isalive =true;
console.log(typeof(isalive));

let name ="gayatri";
console.log(`email is ${name +'@'+'i-exceed.com'} `);

let x ;
console.log(typeof(x));

let myeducation={
    "school":"St.Peter's",
        "college":"Reva University",
    "degree":"B.E. in CSE",
    "year":2025}
console.log(typeof(myeducation));
console.log(myeducation);

//bigint
let big = 1234567890123456789012345678901234567890n;
console.log(typeof(big));

let y= BigInt(1234567890123456789012345678901234567890);
console.log(typeof(y));
console.log(y);

let a=0.1;
let b=0.2;
let c=a+b;  
console.log(c);

let balance=1000n;// 10.00
let deposit=25n;
balance+=deposit;
console.log(Number(balance)/100);
