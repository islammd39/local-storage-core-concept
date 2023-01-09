import React, { useState } from 'react';
// import {  } from './Fakedb';
// import { getDb } from './Nextdb';
// import { CreateDb } from './Repet';
import { addToFakeDb, deleteCart } from './Stoage';

const MainCard = ({p}) => {
    // const [link, setLink] = useState(null)
    const {id, name, price}= p;
    const handleAddToCart =(id)=>{
        // setLink()
        // console.log(parseInt(id));
        // localStorage.setItem(id, 1)
        addToFakeDb(id)
    }
    const handleCartDelete = id =>{
          deleteCart(id)
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>$ {price}</p>
            <button onClick={()=>handleAddToCart(id)}>Add To Cart</button>
            <button onClick={()=>handleCartDelete(id)}>Delete To Cart</button>
        </div>
    );
};

export default MainCard;