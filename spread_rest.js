// const numbers = [10,20,40,50,60];

// const maxNumber = Math.max(...numbers)

// console.log(maxNumber);


const student = {
    name: "Imran",
    age: 25,
    roll: 94,
    study: {
        subject: "Programming",
        marks: 50,
    }
}

const keys = Object.keys(student);

for(let element of keys){
    console.log(element,student[element]);
}