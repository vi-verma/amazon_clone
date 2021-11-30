import React from "react";
import { CaretDownOutlined, MenuOutlined } from "@ant-design/icons";
import classes from './SubNavigation.module.css';

const SubNavigation = () => {
    return (
        <div className={classes.sub_navigation}>
            <div className={classes.sub_navigation__buttons}>
                <ul>
                    <li>
                        <div> <MenuOutlined />{' '}All</div>
                    </li>
                    <li>
                        <div>Mobiles</div>
                    </li>
                    <li>
                        <div>Best Sellers</div>
                    </li>
                    <li>
                        <div>Electronics</div>
                    </li>
                    <li>
                        <div>Customer Service</div>
                    </li>
                    <li>
                        <div>Fashion</div>
                    </li>
                    <li>
                        <div>Prime <CaretDownOutlined /></div>
                    </li>
                </ul>
            </div>
            <div>
                <img alt='prime img' src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Jupiter/One-mic-stand/WOSG/400x39-SWM_JPN_EN._CB653477167_.jpg'></img>
            </div>
        </div>
    );
};

export default SubNavigation;
