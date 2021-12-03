import classes from "./DetailedItemCard.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";

// ** on going back and forward  its props got missing , needed to manage state some sotrong **

const DeatiledItemCard = () => {
    const [itemData, setItemData] = useState({});
    const ctx = useContext(CartContext);
    const param = useParams();
    const itemId = param.itemId;

    const {   id,
        title,
        category,
        price,
        description,
        image,
        rating } = itemData;

    useEffect(() => {
        detailedProduct(); 
    },[])

    const detailedProduct = async () => {
        try{
            const result = await fetch(`https://fakestoreapi.com/products/${itemId}`);
            const data = await result.json();
            setItemData(data);
        }
        catch(error){
            console.log(error);
        }
    };

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
                    src={itemData.image|| "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }
                    alt={title || "img"}
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
                <p className={classes.title}>{title}</p>
                <p className={classes.category}>{category}</p>
                <p className={classes.description}>{description}</p>
                <p className={classes.price}>{'₹ '+ price}</p>
            </div>
        </div>
    );
};

export default DeatiledItemCard;
