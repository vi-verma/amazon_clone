import classes from './CartItems.module.css';
import { Fragment, useEffect, useState } from "react";
import { Select } from 'antd';
const { Option } = Select;

const CartItems = (props) => {
    const [quant, _Quant] = useState(1);
    const [itemToAlter, setItemToAlter] = useState({});
    console.log(itemToAlter,'itemToAlter ',quant, '_Quant' );

    const cartCtx = props.ctx;
    const cartItems = cartCtx.cartItems;

    useEffect(()=>{  
        if(itemToAlter.id){
            cartCtx.changeQuantity({...itemToAlter, quantity: quant});
        }
    },[quant, itemToAlter]);

    const onChange = (q) =>{
        console.log(q, 'q');
        _Quant(q)
    }
    const onSelect = (item) => {
       console.log(item, 'item');
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
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                                <Option value="6">6</Option>
                                <Option value="7">7</Option>
                                <Option value="8">8</Option>
                                <Option value="9">9</Option>
                                <Option value="10+">db</Option>
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