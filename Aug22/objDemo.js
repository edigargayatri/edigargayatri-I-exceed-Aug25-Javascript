//prototype object creation

const bankaccount = {
    balance:1000,
    deposit:function(amount){
        this.balance += amount;
    },
    withdraw:function(amount){
        this.balance -= amount;
    } ,  
    getBalance:function(amt)
    {
        return this.balance;
    }        
};  
const myAccount = Object.create(bankaccount);
myAccount.deposit(500); 
console.log(myAccount.getBalance()); //1500
myAccount.withdraw(200);
console.log(myAccount.getBalance()); //1300

const yourAccount = Object.create(bankaccount);
yourAccount.deposit(1000); 
console.log(yourAccount.getBalance()); //2000
yourAccount.withdraw(500);
console.log(yourAccount.getBalance()); //1500
console.log(bankaccount.getBalance()); //1000
//bankaccount is prototype for myAccount and yourAccount
//myAccount and yourAccount are instances of bankaccount

//writable
let buissnessaccount = Object.create(bankaccount, {
    interestRate: { 
        value: 0.05,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
buissnessaccount.deposit(1000);
console.log(buissnessaccount.getBalance()); //2000
buissnessaccount.withdraw(500);
console.log(buissnessaccount.getBalance()); //1500
buissnessaccount.interestRate = 0.07; //changing interest rate
console.log(buissnessaccount.interestRate); //0.07

//non-writable
let personalaccount = Object.create(bankaccount, {
    interestRate: { 
        value: 0.03,
        writable: false, //non-writable
        enumerable: true,
        configurable: true
    }
});
personalaccount.deposit(1000);
console.log(personalaccount.getBalance()); //2000
personalaccount.withdraw(500);
console.log(personalaccount.getBalance()); //1500
console.log(personalaccount.interestRate); //0.03
//personalaccount.interestRate = 0.04; //this will not change the interest
//console.log(personalaccount.interestRate); //still 0.03