import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const productsContext = createContext([]);


export default function ProductsContext(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/product.json')
      .then((data) => {
        setProducts(data.data);
      })
  }, []);
  
  return (

    <productsContext.Provider value={products}>
      { props.children}
    </productsContext.Provider>
  )
}
