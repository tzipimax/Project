import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { brown, green, pink, purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { AudiotrackRounded } from '@material-ui/icons';
import CheckIcon from '@material-ui/icons/Check';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: brown[500],
    '&:hover': {
      backgroundColor: brown[700],
    },
  },
  fabProgress: {
    color: brown[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: brown[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));


function ShowProductDetails(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  const { id } = useParams();
  const product = props.products.find((p) => (p.name === id));

  const addToCart = () => {
    let cart = [];
    let price = 0;
    if (localStorage.cart) {
      cart = JSON.parse(localStorage.getItem('cart'));
      price = parseInt(localStorage.price);
    }
    price += product.price;
    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.price = price;
  }

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  const handleButtonClick = () => {
    addToCart();

    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);

      }, 2000);
    }
  };

  let x;
  return (
    product ? (
      <div >
        <div className="ProdNameAndPrice">
          <h3 className="prodName">שם: {product.name} </h3>
          <h3 className="prodPrice">מחיר: {product.price}</h3>
          <div className={classes.root}>
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="orange"
                className={buttonClassname}
                disabled={loading}
                onClick={handleButtonClick}
              >
                הוסף לסל
              </Button>
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
            <div className={classes.wrapper}>
              <Fab
                aria-label="save"
                color="orange"
                className={buttonClassname}
                onClick={handleButtonClick}
              >
                {success ? <CheckIcon /> : <AddShoppingCartIcon />}
              </Fab>
              {loading && <CircularProgress size={68} className={classes.fabProgress} />}
            </div>

          </div>
        </div>
        <div className="PictureOfOneProduct">
          <CardMedia
            className={classes.media}
            component="img"
            height="10%"
            width="10%"
            image={`/picture/${product.image}.jpg`}
            title={`${product.image}`}
          /></div>
        {console.log(classes.media)}
      </div>
    ) : ''
  )
}

export default ShowProductDetails;
