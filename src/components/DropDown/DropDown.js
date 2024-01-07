import React, { useState } from 'react';
import './DropDown.css';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="dropdown-container">
            {/* dropdown btn */}
            <button onClick={toggleDropdown} className='dropdown-btn d-flex align-items-center'>
                <span className='btn-text font-semibold'>MENU</span> {isOpen ? <MdKeyboardArrowDown className='primary-color text-xl' /> : <MdKeyboardArrowUp className='primary-color text-xl' />}
            </button>
            {/* dropdown item */}
            <ul className={`dropdown-content ${isOpen ? "show" : ""}`}>
                <li><Link className="dropdown-item" to='/' type="button">Home</Link></li>
                <li><Link className="dropdown-item" to='/' type="button">Details</Link></li>
                <li><Link className="dropdown-item" to='/' type="button">Category</Link></li>
                <li><Link className="dropdown-item" to='/' type="button">My Favorites</Link></li>
                <li><Link className="dropdown-item" to='/' type="button">Profile</Link></li>
                <li><Link className="dropdown-item" to='/' type="button">Log In / Sign Up</Link></li>
            </ul>
        </div>
    );
};

export default DropDown
