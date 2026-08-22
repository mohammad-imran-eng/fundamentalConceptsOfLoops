const orders = [
    { id: 1, total: 5000 },
    { id: 2, total: 8000 },
    { id: 3, total: 3000 },
    { id: 4, total: 10000 }
];

const discountedPriceArr = [];

for(let order of orders){
    if(order.total >= 5000){
        const discountOrder = order.total * 0.10;
        const totalPrice = order.total - discountOrder
        discountedPriceArr.push({
            id: order.id,
            total: totalPrice
        });
    }
}

console.log(discountedPriceArr)