import React from 'react';
import QuadBannerCard from './UI/QuadBannerCard';

const BannerCard = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
            {/* <div style={{display:'flex', justifyContent:'space-evenly',position:'absolute', top:'700px', marginBottom:'1000px'}}> */}
            <QuadBannerCard />
            <QuadBannerCard />
            <QuadBannerCard />
            <QuadBannerCard />
        </div>
    );
};

export default BannerCard;