
const stepCounter = (steps)=> {
    if(!Array.isArray(steps)){
        return "Invalid"
    }
    let sum = 0;
    for(item of steps){
        sum += item
        if(typeof item !== 'number'){
            return "Invalid"
        }
    }
    if(sum >= 1000){
        return {totalCount: sum,goalReached: true}
    }
    else {
        return {totalCount: sum,goalReached: false}
    }
}


const result = stepCounter(["hello",100,100]);
console.log(result);