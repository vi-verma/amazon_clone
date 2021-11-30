import React from 'react';
import classes from './CartSider.module.css';

const CartSider = (props) => {
    const {totalItems, totalAmount} = props.ctx;
    // console.log(props.ctx, 'sider');
    return (
        <div className={classes.CartSider}>
            <p>Your order is elegible for free delevery</p>
            <p>Subtotal  ({totalItems || '01'} items)<span> ₹{ totalAmount || 14500}</span></p>
            <p>This order contains gift</p>
            <button type='button' >Proceed to Buy</button>
    </div>
    );
};

export default CartSider;