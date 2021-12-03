import classes from './CartItems.module.css';
import { Fragment, useEffect, useState } from "react";
import { Select } from 'antd';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const { Option } = Select;

const CartItems = () => {
    const [quantity, setQuantity] = useState(1);
    const [itemToAlter, setItemToAlter] = useState({});
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.cartItems;
    console.log(cartItems, 'cartIOtems');

    useEffect(() => {
        if (itemToAlter.id) {
            cartCtx.changeQuantity({ ...itemToAlter, quantity: quantity });
        }
    }, [quantity, itemToAlter]);

    const onChange = (q) => {
        setQuantity(q)
    }
    const onSelect = (item) => {
        setItemToAlter(item)
    };

    const onRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const productInCart = cartItems?.map((item) => {
        return (
            <div className={classes.product} key={item.id}>
                <div className={classes.product_image}>
                    <img src={item.image} alt={item.id}></img>
                </div>
                <div className={classes.item_description}>
                    <p className={classes.item_name}>{item.title}</p>
                    <p className={classes.item_detail}>{item.category}</p>
                    <p className={classes.item_detail}>{item.description}</p>
                    <p className={classes.item_detail}>{item.rating?.rate + "star "}<span>{item.rating.count + ' ratings'} </span></p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div>
                            <Select defaultValue={item.quantity} style={{ width: 120 }} onSelect={() => onSelect(item)} onChange={onChange}>
                                {Array.from(Array(10)).map((e, i) =>
                                    <Option value={i + 1}>{i + 1} </Option>)}
                            </Select>
                        </div>
                        <button type="button" onClick={() => onRemoveHandler(item.id)}>Remove</button>
                    </div>
                </div>
                <div className={classes.price_des}>
                    <p> ₹{item.price}</p>
                    <p>Quantity x{item.quantity}</p>
                </div>
            </div>
        );
    });


    return (
        <Fragment>
            {productInCart}
        </Fragment>
    );
};

export default CartItems;