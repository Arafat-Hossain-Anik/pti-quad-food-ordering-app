import React from 'react';
import { IoSearch } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import DropDown from '../DropDown/DropDown';
const NavBar = () => {
    return (
        <div className='flex items-center justify-between py-1.5'>
            <div>
                <h1 className='text-2xl font-bold'>pti.</h1>
            </div>
            <div className="relative flex items-center w-3/5 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 primary-color">
                    <IoSearch className="h-6 w-6" />
                </div>
                <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search Audiobook" />
            </div>
            <DropDown />
            <div className='primary-color' style={{ fontSize: "25px" }}>
                <FaCircleUser />
            </div>
        </div>
    );
};

export default NavBar;