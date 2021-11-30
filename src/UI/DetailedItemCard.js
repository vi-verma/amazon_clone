import classes from "./DetailedItemCard.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import { useParams } from "react-router";

// ** on going back and forward  its props got missing , needed to manage state some sotrong **

const DeatiledItemCard = (props) => {
    const [item, _item] = useState({});
    const ctx = useContext(CartContext);
    // const { id, title, price, description, category, image, rating } = props.detailItemView;
    const param = useParams();

    useEffect(()=>{
        products();
    },[])

    const products = async () => {
        try {
            // const result = await fetch(`https://fakestoreapi.com/products/${props.detailItemView.id}`);
            const result = await fetch(`https://fakestoreapi.com/products/${param.itemId}`); 
            const data = await result.json();
            _item(data);
            console.log(result);
        } catch (e) {
            console.log(e);
        }

    }

const onAddToCartHandeler = (id) => {
    ctx.addItem({
        id: item.id,
        title: item.title,
        category: item.category,
        price: item.price,
        description: item.description,
        image: item.image,
        rating: item.rating
    })
};

return (
    <div className={classes.card}>
        <div className={classes.item_display}>
            <img
                className={classes.item_image}
                src={item.image || "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                alt={item.title || "img"}
            ></img>
            <div className={classes.cart_button}>
                <button
                    type="button"
                    onClick={() => onAddToCartHandeler(item.id)}
                >
                    <ShoppingCartOutlined />
                    Add to cart
                </button>
                <button>BUY NOW</button>
            </div>
        </div>
        <div className={classes.item_info}>
            <p className={classes.title}>{item.title || 'Title'}</p>
            <p className={classes.category}>{item.category || 'category'}</p>
            <p className={classes.description}>{item.description || 'Description'}</p>
            <p className={classes.price}>{'₹ ' + item.price || '₹700'}</p>
        </div>
    </div>
);
};

export default DeatiledItemCard;
