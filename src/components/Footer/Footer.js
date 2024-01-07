import React from 'react';
import './Footer.css'
import footerImage from '../../images/Image2.png'
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const Footer = () => {
    return (
        <div className='primary-bg-color mt-5 d-flex justify-content-center justify-content-md-between sm:px-1 md:px-10 lg:px-40 xl:px-40'>
            <div>
                {/* footer input */}
                <div className="footer-input-container mb-5">
                    <input type="text" className="input-field" placeholder="Enter Your E-mail" />
                    <button className="subscribe-btn">Subscribe <GoArrowRight className='inline-block text-xl' /></button>
                </div>
                {/* footer copyright & icon section */}
                <div className='d-flex copyright-icon-container justify-content-between'>
                    <div className='copyright-container'>
                        <h2 className='text-2xl font-bold'>pti <span className='primary-color'>.</span></h2>
                        <p className='font-medium'>Copyright &copy; Tripp. All right reserved</p>
                    </div>
                    <div className='d-flex text-center icon-container'>
                        <FaGoogle className='footer-icon' />
                        <FaTwitter className='footer-icon' />
                        <FaInstagram className='footer-icon' />
                    </div>
                </div>
            </div>
            {/* footer image */}
            <div>
                <img className='footer-image' src={footerImage} alt="Footer" style={{ height: "20rem" }} />
            </div>
        </div>
    );
};

export default Footer;