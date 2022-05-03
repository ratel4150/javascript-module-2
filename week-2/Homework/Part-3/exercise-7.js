/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/



var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};

products.push(product1);
products.push(product2);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};

let availableProducts=[]

function addToShoppingCart(id){
  let index=id-1
 let addProductToSelectedProducts=products[index]
 if(products[index].stock!=0){
  shoppingCart.selectedProducts.push(addProductToSelectedProducts)
  products[index].stock-=1
 
}else{
  console.log("ya no hay stock")
}
 
 shoppingCart.selectedProducts.push(addProductToSelectedProducts)
 
 let addPriceTotalPrice=shoppingCart.selectedProducts.map((product)=>{
   return product.price
 }).reduce((previousValue, currentValue)=>{
   return previousValue + currentValue
 })
 
shoppingCart.totalPrice=addPriceTotalPrice.toFixed(2);

}

function removeFromShoppingCart(id){
  let index=id-1
 let countProductDelete=shoppingCart.selectedProducts.filter((product)=>{
    return product.id===id
    
  }).map((product,index)=>{
    return index
  })
  
  products[index].stock+=countProductDelete.length
  
  
  
  let removeProductsOfTheSelectedProducts=shoppingCart.selectedProducts.filter((product)=>{
    return product.id!=id
    
  }).map((product)=>{
    return product
  })
  //delete array selectedProducts
  shoppingCart.selectedProducts.length=0
  shoppingCart.selectedProducts=shoppingCart.selectedProducts.concat(removeProductsOfTheSelectedProducts)
  let updatePrice=shoppingCart.selectedProducts.map((product)=>{
   return product.price
 }).reduce((previousValue, currentValue)=>{
   return previousValue + currentValue
 })
 shoppingCart.totalPrice=updatePrice.toFixed(2);
  

}

function shop(){
  
  let extractValueByID=shoppingCart.selectedProducts.map((product,index)=>{
    return product.id;
  })
  
  let valueByID=extractValueByID
  let minValueFromArray = Math.min(...valueByID);
  let maxValueFromArray = Math.max(...valueByID);
  while(minValueFromArray<=maxValueFromArray){
    
    let index=minValueFromArray-1
 let countProductDelete=shoppingCart.selectedProducts.filter((product)=>{
    return product.id===minValueFromArray
    
  }).map((product,index)=>{
    return index
  })
  
  products[index].stock+=countProductDelete.length
    
    let m=shoppingCart.selectedProducts.filter((product)=>{
      return product.id!=minValueFromArray
    })
    shoppingCart.selectedProducts.length=0
    shoppingCart.selectedProducts=shoppingCart.selectedProducts.concat(m)
    console.log(m)
    
    minValueFromArray+=1
    
  }
  shoppingCart.totalPrice=0

}

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));