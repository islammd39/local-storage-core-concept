const addToFakeDb = id =>{
    let storage = {}
    const addStorage = localStorage.getItem('name')
    if(addStorage){
      storage = JSON.parse(addStorage)
    }else{
        storage = {}
    }
    const quantity = storage[id]
    if(quantity){
        const newQuantity = quantity + 1;
        storage[id] = newQuantity
    }else{
        storage[id]= 1;
    }
    localStorage.setItem('name', JSON.stringify(storage))
}

const deleteCart = id =>{
    // console.log('click', id);
    const addStorage = localStorage.getItem('name')
    if(addStorage){
       const removeCart = JSON.parse(addStorage)
       if(id in removeCart){
          delete removeCart[id];
          localStorage.setItem('name', JSON.stringify(removeCart))
       }
    }
}
export {addToFakeDb, deleteCart}