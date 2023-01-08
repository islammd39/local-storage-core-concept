const CreateDb = id =>{
    let CreateStorage = {}
    const CartStorage = localStorage.getItem("My-storage")
    if(CartStorage){
        CreateStorage = JSON.parse(CartStorage)
    }else{
        CreateStorage = {}
    }
    const quantity = CreateStorage[id]
    if(quantity){
        const newQuantity = quantity + 1
        CreateStorage[id] = newQuantity
    }else{
        CreateStorage[id] = 1
    }
    localStorage.setItem('My-storage', JSON.stringify(CreateStorage))
}
export {CreateDb} 