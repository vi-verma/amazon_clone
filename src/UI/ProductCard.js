import React from "react";
import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
    // console.log(props, 'prodcard')
  return (
    <div className={classes.product_card}>
      <img
        src={props.image || "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_372x232_372x232_in-en._SY232_CB663888090_.jpg"}
        alt=""
      />
      <div className={classes.details}>
        <p>{props.description || ' product Description 65 os aw w product Description'} </p>
        <p> ₹ {props.price || '₹728.00-₹999.00'}</p>
        <p><span>Ends in</span> 01:02:47</p>
        {/* <p>{props.rating.rate}<span>{props.rating.count}</span></p> */}
      </div>
    </div>
  );
};

export default ProductCard;
