const applyCoupon = (order)=> {
    const discountPrice = order.total * 0.1;
    const newPrice = order.total - discountPrice;
    // order.total = newPrice;


    return {...order,total:newPrice}
}

const retunResult = applyCoupon({orderId: 101,total: 500,customer: 'Imran'});
console.log(retunResult);