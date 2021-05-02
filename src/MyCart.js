import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import ShowProductInCart from './ShowProductInCart';
import { productsContext } from './ProductsContext';
import Payment from './Payment';

function MyCart(props) {
  const products = useContext(productsContext);
  let productsInOrder = localStorage.cart ? JSON.parse(localStorage.getItem('cart')) : [];
  return (
    <div>
      {productsInOrder != [] ? <ul>{productsInOrder.map((p) => (<ShowProductInCart product={products.find((pr) => (pr.name === p))} />))} </ul>
       : <h2 className="noProduct
       InCard">עדיין אין מוצרים בסל!!</h2>}
    </div>
  )
}

export default MyCart;

