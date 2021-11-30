import React from 'react';
import classes from './About.module.css';
import logo from '../../resources/Amazon-Logo.png';
import { GlobalOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const About = () => {
    return (
        <div className={classes.footerNav_about}>
            <div className={classes.backtotop_button}>
                Back to top
            </div>
            <div className={classes.footerNav_links}>
                <div className={classes.footerNav_col} >
                    <a href='url' >Get to Know Us</a>
                    <a href='url' >About Us</a>
                    <a href='url' >Careers</a>
                    <a href='url' >Press Releases</a>
                    <a href='url' >Amazon Cares</a>
                    <a href='url' >Gift a Smile</a>
                </div>
                <div className={classes.footerNav_col}>
                    <a href='url' >Connect with Us</a>
                    <a href='url' >Facebook</a>
                    <a href='url' >Twitter</a>
                    <a href='url' >Instagram</a>
                </div>
                <div className={classes.footerNav_col}>
                    <a href='url' > Make Money with Us</a>
                    <a href='url' >Sell on Amazon</a>
                    <a href='url' >Sell under Amazon Accelerator</a>
                    <a href='url' > Amazon Global Selling</a>
                    <a href='url' > Become an Affiliate</a>
                    <a href='url' >Fulfilment by Amazon</a>
                    <a href='url' >Advertise Your Products</a>
                    <a href='url' > Amazon Pay on Merchants</a>
                </div>
                <div className={classes.footerNav_col}>
                    <a href='url' > Let Us Help You</a>
                    <a href='url' >COVID-19 and Amazon</a>
                    <a href='url' >Your Account</a>
                    <a href='url' >Returns Centre</a>
                    <a href='url' >100% Purchase Protection</a>
                    <a href='url' >Amazon App Download</a>
                    <a href='url' > Amazon Assistant Download</a>
                    <a href='url' > Help</a>
                </div>
            </div>
            <div className={classes.footerNav_language}>
                <div>
                    <img src={logo} alt='amazon logo'></img>
                    <Button type='ghost' style={{background:'#232F3E', color:'white'}}>English <GlobalOutlined /></Button>
                </div>
                <div className={classes.footer_country}>
                    <a>Australia</a><a>Brazil</a><a>Canada</a><a>China</a><a>France</a><a>Germany</a><a></a><a>Italy</a><a>Japan</a><a>Mexico</a><a>Netherlands</a><a>Poland</a><a>Singapore</a><a>Spain</a><a>Turkey</a><a>United Arab Emirates</a><a>United Kingdom</a><a>United States</a>
                </div>
            </div>
            <div  className={classes.footer_services} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'black', color: 'white', padding: '20px' }}>
                <div>
                    <p>AbeBooks</p>
                    <p>Books, art</p>
                    <p>& collectibles</p>
                </div>
                <div>
                    <p>Amazon Web Services</p>
                    <p>Scalable Cloud</p>
                    <p>Computing Services</p>
                </div>
                <div>
                    <p>Audible</p>
                    <p>Download</p>
                    <p>Audio Books</p>
                </div>
                <div>
                    <p>DPReview</p>
                    <p>Digital</p>
                    <p>Photography</p>
                </div>
                <div>
                    <p>IMDb</p>
                    <p>Movies, TV</p>
                    <p>& Celebrities</p>
                </div>
                <div>
                    <p>Shopbop</p>
                    <p>Designer</p>
                    <p>Fashion Brands</p>
                </div>
                <div>
                    <p>Amazon Business</p>
                    <p>Everything For</p>
                    <p>Your Business</p>
                </div>
                <div>
                    <p>Prime Now</p>
                    <p>2-Hour Delivery</p>
                    <p>on Everyday Items</p>
                </div>
                <div>
                    <p>Amazon Prime Music</p>
                    <p>75 million songs, ad-free</p>
                    <p>Over 10 million podcast episodes</p>
                </div>
            </div>
            <div className={classes.footer_companyTerma}>
                <div>
                    <p> Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 1996-2021, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    );
};

export default About;