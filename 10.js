const employeeSalary = (e)=> {
    const filteredData = e.filter((data=> data.salary > 30000))
    let totalSalary = 0
     for(let data of filteredData){
        totalSalary += data.salary
    }
    return totalSalary
}

console.log(employeeSalary([
    { name: "Rahim", salary: 30000 },
    { name: "Karim", salary: 45000 },
    { name: "Sakib", salary: 25000 },
    { name: "Nabil", salary: 50000 }
]))