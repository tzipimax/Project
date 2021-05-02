import React,{useState, useContext} from 'react';
import Home from './Home'
import './App.css';
import Products from './Products';
import Payment from './Payment';
import Management from './Management';
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyCart from './MyCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import p from './picture/logo.png'





function App() {

  return (
    <Router>
      <div className="app" >
      <div className="nav">
      {/* <h1> MY-MUSIC-SHOP </h1> */}
      <img className="logo" src ={p}></img>
        <nav className="allNavigation">
           <Link className="headNavigation cartIkon" to="/myCart"><AddShoppingCartIcon /></Link>
           <Link className="headNavigation" to="/">בית</Link>
           <Link className="headNavigation"to="/products">מוצרים</Link>
           <Link className="headNavigation" to="/payment">תשלום</Link>
           <Link className="headNavigation" to="/management">נהול</Link>
           <Link className="headNavigation" to="/about">אודות</Link>
        </nav>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/myCart" exact component={MyCart} />
          <Route path="/products" component={Products} />
          <Route path="/payment" component={Payment} />
          <Route path="/management" component={Management} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
      
    </Router>

  );
}

export default App;


