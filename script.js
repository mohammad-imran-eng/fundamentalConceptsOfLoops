// for (let i = 1; i <= 5; i++) {
//     console.log("Hello");
// }

// print numbers 1 to 100 using for loop

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// write a while loop that's print number from 10 down to 1

// let count = 10;
// while(count>=0){
//     console.log(count);
//     count--
// }

// let count = 1;
// while(count<=7){
//     console.log("Loop চলছে");
//     count++
// }

// Write a for loop that prints all even numbers between 1 and 30.

// for(let i =1; i<=30;i++){
//     if(i%2 === 0){
//         console.log("Event number"+ i);
//     }
// }



// let count = 0;
// for(let i = 1;i<=20;i++){
//      count = count + i;
// }

// console.log(count);


// multiplication table using for loops

// for(let i = 1;i<=10;i++){
//     console.log("7", " X ", i, "=" ,7*i)
// }


// for(let i = 20;i>=1;i--){
//     console.log(i);
// }


// let count = 0;
// for(let i = 1; i<=50;i++){   
    
//     if(i%2 === 0){
//         count = count + i;
//     }
// }

// console.log(count);

// for(let i= 1; i<=50;i++){
    
//     if(i === 30){
//         console.log(i);
//         break;
//     }
    
// }

// Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.

// for(let i = 1; i<=20;i++){
//     if(i === 4){
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 1; i<=5;i++){
//     console.log(i);
// }

// let i = 1;
// while(i<=5){
//     console.log(i)
//     i++
// }

// let i = 1;
// do {
//     console.log(i);
//     i++
// }
// while(i<5){
//     console.log(i);
// }

for(let i = 1; i<=100;i++){
    if(1 > 40){
        break;
    }
    if(i%5 === 0){
        continue;
    }
    console.log(i);
}