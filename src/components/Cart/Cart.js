import React from 'react';
import Product from '../products/Product';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const Product = cart[i];
        totalPrice = totalPrice + Product.price;
    }

    let shiping = 0;
    if (totalPrice > 35) {
        shiping = 0;
    }
    if (totalPrice > 15) {
        shiping = 4.99;
    }
    else if (totalPrice > 0) {
        shiping = 12.99
    }

    const tex = (totalPrice / 10).toFixed(2);
    const grandTotal = (totalPrice + shiping + Number(tex)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order summery</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p><small>Shiping cost: {shiping}</small></p>
            <p><small>Tex + vat: {tex}</small></p>
            <p>Total price : {grandTotal}</p>
        </div>
    );
};

export default Cart;