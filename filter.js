const filterProduct = (products)=> {
    const filteredData = products.filter(product => product.inStock == true)
    return filteredData
}


const result = filterProduct([
    {name:"pant",price:500,inStock: false},
    {name:"shirt",price:5500,inStock: false},
    {name:"lungi",price:5400,inStock: true},
    {name:"shoe",price:1000,inStock: true}
])

console.log(result)