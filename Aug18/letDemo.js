function iterateme()
 {
    for(let i=0;i<5;i++)
    {
        console.log(i);
    }
   //  console.log(i);
 }
 iterateme();

//  let x=1000;
// let x=100;
// console.log(x); //no duplicate declaration allowed

//let is block level no leakage outside the loop
function iteratewithlet()
{
   for(let i=0;i<10;i++)
   {
       console.log(i);
   }
   //console.log("outside",i);
}
iteratewithlet();
 

