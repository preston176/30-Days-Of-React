const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

//   products.forEach(element => {
//     console.log(element.price);
    
    
//   });


// products.forEach(element => {
//     console.log(`The price of ${element.product} is ${element.price}`);

// });

// const prices = products.map((product) => product.price);
// console.log(prices);

const filteredProducts = products.filter((product) => product.price > 0.5);

console.log(filteredProducts);