import classes from "./DetailedItemCard.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import CartContext from "../store/cart-context";

// ** on going back and forward  its props got missing , needed to manage state some sotrong **

const DeatiledItemCard = (props) => {
    const ctx = useContext(CartContext);
    const {id, title, price, description, category, image, rating} = props.detailItemView;
    const onAddToCartHandeler = (id) => { 
        ctx.addItem({
            id:id,
            title:title,
            category:category,
            price:price,
            description:description,
            image:image,
            rating:rating
        })
    };
       
    return (
        <div className={classes.card}>
            <div className={classes.item_display}>
                <img
                    className={classes.item_image}
                    src={image || "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }
                    alt={props.alt || "img"}
                ></img>
                <div className={classes.cart_button}>
                    <button
                        type="button"
                        onClick={() => onAddToCartHandeler(id)}
                    >
                        <ShoppingCartOutlined/>
                        Add to cart
                    </button>
                    <button>BUY NOW</button>
                </div>
            </div>
            <div className={classes.item_info}>
                <p className={classes.title}>{title || 'Title'}</p>
                <p className={classes.category}>{category || 'category'}</p>
                <p className={classes.description}>{description || 'Description'}</p>
                <p className={classes.price}>{'₹ '+ price|| '₹700'}</p>
            </div>
        </div>
    );
};

export default DeatiledItemCard;
