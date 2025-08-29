let trainee={name:"Gayatri"};
 
let trainer={
    name:"sivam",
    displayName:function()
    {
        return this.name;
    },
    calculateMyAge:function(dob)
    {
        this.dob=dob;
        return new Date().getFullYear()-this.dob;
    }
};

console.log(trainer.displayName());                  // "sivam"
console.log(trainer.displayName.bind(trainee)());    // "Gayatri"
console.log(trainer.calculateMyAge(1980));           // 45 (if current year = 2025)

let trainee_age = trainer.calculateMyAge.bind(trainee);
console.log(trainee_age(2002));                      
