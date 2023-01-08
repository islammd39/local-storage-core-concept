const getDb = id =>{
    let getCart = {}
    const newStorage = localStorage.getItem('set-name')
    if(newStorage){
        getCart = JSON.parse(newStorage)
    }else{
        getCart = {}
    }
    const quantity = getCart[id]
    if(quantity){
        const newQuantity = quantity + 1
        getCart[id]= newQuantity
    }else{
        getCart[id] = 1
    }
    localStorage.setItem("set-name", JSON.stringify(getCart))
}
export {getDb}
