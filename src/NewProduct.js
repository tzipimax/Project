import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { productsContext } from './ProductsContext';


function NewProduct(props) {
  const products = useContext(productsContext);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState(0);
  const [newProductQuantity, setNewProductQuantity] = useState(0);
  const [newProductCategory, setNewProductCategory] = useState('');
  const [created, setCreated] = useState(false);

  const addNewProductControlled = (event) => {
    event.preventDefault();
    const newProduct = {
      name: newProductName,
      price: newProductPrice,
      quantity: newProductQuantity,
      category: newProductCategory,
    }
    props.addNewProduct(newProduct);
    setCreated(true);
    setNewProductName('');
    setNewProductPrice(0);
    setNewProductQuantity(0);
    setNewProductCategory('');
  }

  return (
    <div>
      <h1 className="h1NewProduct">מלא את הפרטים הדרושים</h1>
      <form onSubmit={addNewProductControlled}>
        <div className="inputsNewProduct">
        <TextField id="standard-basic" label="תאור המוצר" value={newProductName} onChange={e => setNewProductName(e.target.value)} />
        <br />
        <TextField
          id="standard-number"
          label="מחיר"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={newProductPrice} onChange={e => setNewProductPrice(e.target.value)}
        />
        <br />
        <TextField
          id="standard-number"
          label="כמות המוצר במלאי"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={newProductQuantity} onChange={e => setNewProductQuantity(e.target.value)}
        />
        <br />
        <TextField id="standard-basic" label="קטגוריית המוצר" value={newProductCategory} onChange={e => setNewProductCategory(e.target.value)} />

        <br />
        <Button type="submit" variant="outlined" >צור מוצר</Button>
        {created? <h2>המוצר נוסף בהצלחה</h2> : ''}
        </div>
      </form>
    </div>
  )
}



export default NewProduct;

NewProduct.propTypes = {
  addNewProduct: PropTypes.func.isRequired,
}

