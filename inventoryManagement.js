// Write your code here

let products = ["Laptop", "Phone", "Headphones", "Monitor"]

function logFirstProduct() {
  console.log(products[0])
}

function removeLastProduct() {
  products.pop()
}

function addProduct(newProduct) {
  products.push(newProduct)
}

function updateProductName(position,newProduct) {
  products[position] = newProduct
}

// removeLastProduct()
// console.log(products)


// logFirstProduct()
// addProduct("Ducks")
// console.log(products)

// updateProductName(2, "ducksducks")
// console.log(products)

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
