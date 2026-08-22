const usersArray = (users)=> {
    const countryNameArr = []
    for(let user of users){
        console.log(user.address.country);
        if(user.address.country === "Bangladesh"){
            countryNameArr.push(user.name)
        }
    }
    return countryNameArr
}


console.log(usersArray([
    {
        name: "Rahim",
        address: {
            city: "Dhaka",
            country: "Bangladesh"
        }
    },
    {
        name: "Karim",
        address: {
            city: "Chittagong",
            country: "Bangladesh"
        }
    },
    {
        name: "John",
        address: {
            city: "London",
            country: "UK"
        }
    }
]))