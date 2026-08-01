
// const factorial = (number)=> {
//     let result = 1;
//     for(let i=1;i<= number;i++){
//         result = result * i;
//     }
//     return result;
// } 

// const result = factorial(5);
// console.log(result);


let number = 15;

for(let i =1; i<=number;i++){
      if(i%3===0 && i%5===0){
        console.log("fizzBuzz");
    }
   else if(i % 3 === 0){
        console.log("fizz");
    }
    else if(i% 5=== 0){
        console.log("buzz");
    }
   
    else {
        console.log(i);
    }
}