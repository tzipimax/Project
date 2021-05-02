import React  from "react";



function ShowCart(props) {
    // const product = props.products.find((p)=>(p.name === props.name));
    return ((
            <div>
                <li>תאור:{props.product.name} מחיר: {props.product.price} כמות: {props.product.quantity}</li>          
            </div>
        )
    )
}
export default ShowCart;