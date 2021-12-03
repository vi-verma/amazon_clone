import React from 'react';
import { useContext } from 'react/cjs/react.development';
import CartContext from '../../store/cart-context';
import classes from './CartSider.module.css';

const CartSider = () => {
    const ctx = useContext(CartContext);
    const {totalItems, totalAmount} = ctx;
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