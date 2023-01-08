import React, { useState } from 'react';
// import {  } from './Fakedb';
import { getDb } from './Nextdb';

const MainCard = ({p}) => {
    // const [link, setLink] = useState(null)
    const {id, name, price}= p;
    const handleAddToCart =(id)=>{
        // setLink()
        // console.log(parseInt(id));
        // localStorage.setItem(id, 1)
        getDb(id)
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>$ {price}</p>
            <button onClick={()=>handleAddToCart(id)}>Add To Cart</button>
        </div>
    );
};

export default MainCard;