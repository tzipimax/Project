import React, { useContext } from 'react';
import {
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { productsContext } from './ProductsContext';
import ShowProductDetails from './ShowProductDetails'
import ListItemText from '@material-ui/core/ListItemText';
import CardMedia from '@material-ui/core/CardMedia';
const categories = [{ name: "Guitars", text: "כלי מיתר" }, { name: "tool", text: "כלי נשיפה" }, { name: "drums", text: "תופים" }, { name: "percussions", text: "מקלדות" }];

function Products() {
  const products = useContext(productsContext);
  let { path, url } = useRouteMatch();

  return (
    <div>
      <ul>
      {/* <Search /> */}
        {categories.map((c, index) => (
          <li className={`${c.name}Navigation`} key={index}>
            <Link to={`${url}/${c.name}`} key={c.name + index} className="link">{c.text}</Link></li>
        ))}
      </ul>
      <br />
      {categories.map((c, i) => (
        <Route path={`${path}/${c.name}`} key={i}>
          <ul className="ulProduct">
            {products.map((product, index) => (product.category === c.name ?
              <ListItemText ><Link className="listProduct" to={`${url}/${product.name}`} key={product.name + index} >{product.name}
              <div className="imgInCategory">
                <CardMedia
                  component="img"
                  height="10%"
                  width="10%"
                  image={`/picture/${product.image}.jpg`}
                  title={`${product.image}`}
                />
                </div>
              </Link></ListItemText> : ''))}
          </ul>
        </Route>
      ))}
      <Route path={`${path}/:id`}>
        <ShowProductDetails products={products}/>
      </Route>
    </div>
  )
}

export default Products;
