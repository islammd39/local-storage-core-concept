const addToDb = id =>{
   let shoppingCart = {}

   const storageCart = localStorage.getItem("my-cart")
   if(storageCart){
    shoppingCart = JSON.parse(storageCart)

   }else{
    shoppingCart = {}
   }
//    localStorage.setItem("my-cart", JSON.stringify(shoppingCart))
   const quantity = shoppingCart[id]
//    console.log(quantity);
   if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id]= newQuantity
    // localStorage.setItem('my-cart', JSON.parse(newQuantity))
   }else{
    shoppingCart[id] = 1
   }
localStorage.setItem("my-cart", JSON.stringify(shoppingCart))
}
export {addToDb}