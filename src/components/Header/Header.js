import React from 'react';
import headerPic from '../../images/Image1.png'
import './Header.css'
const Header = () => {
    return (
        <div className='pt-16'>
            <div className='header-container primary-bg-color flex justify-center rounded-header'>
                <div className='header-text-container ps-2 md:ps-16 font-semibold pt-20' style={{ color: "white" }}>
                    <h1 className='text-5xl'>Deliver Food To Your Door Step</h1>
                    <h6 className='text-base pt-2'>Authentic Food, Quick Service, Fast Delivery</h6>
                </div>
                <div className='header-image-container'>
                    <img src={headerPic} style={{ height: "350px" }} alt="Man Showing Various Food" />
                </div>
            </div>
        </div>
    );
};

export default Header;