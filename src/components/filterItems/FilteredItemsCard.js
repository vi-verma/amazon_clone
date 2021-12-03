import React, { Fragment } from 'react';
import classes from './FilteredItemsCard.module.css';
import EmptyCart from '../cart/EmptyCart';

const FilteredItemsCard = (props) => {
    // const { id, title, price, description, category, image } = props?.filteredItems;
    // console.log(props.filteredItems, 'filt compo')

    const filteredItems = props.filteredItems.map((item) => {
        return (
            <div key={item.id} className={classes.product_details}>
                <img
                    src={item.image || "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_372x232_372x232_in-en._SY232_CB663888090_.jpg"}
                    alt=""
                />
                <div className={classes.details}>
                    <p className={classes.title}>{item.title}</p>
                    <p className={classes.category}>{item.category}</p>
                    <p className={classes.description}>{item.description || ' product Description 65 os aw w product Description'} </p>
                    <p className={classes.price}> ₹ {item.price || '₹728.00-₹999.00'}</p>
                    {/* <p>{props.rating.rate}<span>{props.rating.count}</span></p> */}
                </div>
            </div>
        );
    });


    return (
        <Fragment>
            {
                props.filteredItems.length < 1
                    ?
                    // <div className={classes.noItemFound}>
                    //     No Item Found
                    // </div>
                    <EmptyCart/>
                    :
                    <>
                        {filteredItems}
                    </>
            }
        </Fragment>
    );
};

export default FilteredItemsCard;