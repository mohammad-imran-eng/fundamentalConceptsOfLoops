// const employeeProfile = (employee)=> {
//     if(typeof employee !== 'object'){
//         return "Invalid"
//     }

//     const keys = Object.keys(employee);
//     if(!keys.includes("name") || !keys.includes("age")|| !keys.includes("department")){
//         return "Invalid"
//     }

//     const {name,age,department} = employee;

//     return `My name is ${name}.Iam ${age} years old. I work in ${department}`
// }

// const result = employeeProfile({
//     name: "Imran",
//     age: 25,
//     department: "Marketing"
// })

// console.log(result)