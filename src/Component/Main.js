import React, { useEffect, useState } from 'react';
import MainCard from './MainCard';

const Main = () => {

    const [products, setProducts] = useState([])



    useEffect(()=>{
          fetch('products.json')
          .then(res => res.json())
          .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h2>This is Header section</h2>
            {
                products.map(p=> <MainCard key={p.id} p={p}></MainCard>)
            }
        </div>
    );
};

export default Main;