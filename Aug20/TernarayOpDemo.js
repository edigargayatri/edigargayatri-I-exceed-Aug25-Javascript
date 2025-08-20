
function Marks(marks){
let res = marks < 40? "Fail" :marks>40 && marks <60?"B grade":marks>60 && 
        marks <80?"A grade":marks>=80 && marks <=100 ?"A+ grade":"Invalid marks"
  return res;
  
}
console.log(Marks(95));