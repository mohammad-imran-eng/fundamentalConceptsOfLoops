
const generateReportCard = (student)=> {
    if(typeof student !== 'object' || Array.isArray(student)){
        return "Invalid"
    }
    if(typeof student.bangla !== 'number' || typeof student.english !== 'number' || typeof student.math !== 'number'){
        return "Invalid"
    }
    const total = student.bangla + student.english + student.math;
    // console.log(total);
    const average = total / 3;
    // console.log(average);
    let grade;

    if(average >= 90){
        grade = "A+"
    } else if(average >= 80){
        grade = "A"
    } else if(average >= 70){
        grade = "B"
    } else {
        grade = "F"
    }

    const returnObj = {
        name: student.name,
        total,
        average,
        grade
    }
    return returnObj
}

const studentObj =  { name:'Ayan', bangla:78, english:85, math:"92" }
const result = generateReportCard(studentObj);

console.log(result);