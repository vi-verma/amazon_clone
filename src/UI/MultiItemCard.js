import React from 'react';
import classes from './MultiItemCard.module.css';


const MultiItemCard = (props) => {
    return (
        <div className={classes.mic_card}>
            <div className={classes.mic_title_bar}>
                <span className={classes.title}>Title title| description</span><span className={classes.link}><a href='www.' >Link</a></span>
            </div>
            <div className={classes.items_carousel}>
                carousel images
                {props.children}
            </div>
            
        </div>
    );
};

export default MultiItemCard;