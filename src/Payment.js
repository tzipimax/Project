import React, { useState } from 'react';
import MyCart from './MyCart';
import Button from '@material-ui/core/Button';


debugger;


function Payment() {

    let flag = false;
    if (localStorage.cart)
        flag = true;

    const [WasPayed, setWasPayed] = useState(false);
    const payed = () => {
        setWasPayed(true);
        localStorage.price = '';
        localStorage.cart = '';
        // <h2>שולם!</h2>
    }
    return (

        <div className="payment">
            {flag ? <div><h1>המוצרים שבסל</h1> <MyCart /> <h2 className="h2PriceToPay">סה"כ לתשלום {localStorage.price}</h2>
                <Button className="toPay" variant="outlined" onClick={payed}>לתשלום</Button></div> : <h2 className="noProductInCard">עדיין אין מוצרים בסל!!</h2>}
            {WasPayed ? <h2>שולם בהצלחה!</h2> : ''}
        </div>
    );
}

export default Payment;