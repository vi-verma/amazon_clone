import {useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";
import CartSider from "./CartSider";
import EmptyCart from "./EmptyCart";


const Cart = () => {
    const ctx = useContext(CartContext);
      
    return (
        <>
        {
            ctx.cartItems?.length > 0 ?
            <div className={classes.cart_summery}>
                <div className={classes.cart_items_summry}>
                    <div className={classes.title}>
                        <p>Shpping Cart</p>
                        <p>price</p>
                    </div>
                    <div className={classes.items}>
                        <CartItems/>
                    </div>
                <div className={classes.cart_footer}>
                    <p>Subtotal ({ctx.totalItems} items):
                    <span> ₹</span>
                    <span>{ctx.totalAmount}</span>
                </p>
                </div>
                </div>
                <div>
                    <CartSider  />
                </div>
            </div>
            :
            <EmptyCart/>
}
        </>
    );
};

export default Cart;
