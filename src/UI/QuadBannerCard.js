import React from 'react';
import classes from './QuadBannerCard.module.css';

const QuadCard = (props) => {
    return (
        <div className={classes.quad_card}>
            <div className={classes.card_title}>
                Title title Title
            </div>
            <div className={classes.card_images}>
                <div className={classes.img_flex}>
                    <div>
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_372x232_372x232_in-en._SY232_CB663888090_.jpg' alt='' />
                        <p >img title</p>
                    </div>
                    <div>
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_la_372x232_372x232_in-en._SY232_CB663888089_.jpg' alt='' />
                        <p>img title</p>
                    </div>
                </div>
                <div className={classes.img_flex}>
                    <div>
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_furn_186x116_372x232_in-en._SY116_CB663888090_.jpg' alt='' />
                        <p>img title</p>
                    </div>
                    <div>
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_kitchen_372x232_372x232_in-en._SY232_CB663888091_.jpg' alt='' />
                        <p>img title</p>
                    </div>
                </div>
                <div className={classes.explore_link}>
                    <a href="lneflk">
                        Explore all
                    </a>
                </div>
            </div>

        </div>
    );
};

export default QuadCard;