import React from "react";
import {BiChevronRight} from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

const NavSm = () => {
    return(
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex-col">
                <h4 className="text-2xl text-white font-bold">It All Starts Here!</h4>
                <h4 className="text-xs text-gray-300 flex items-center">Ahmedabad <BiChevronRight /></h4>
            </div>
            <div className="text-white text-2xl "><IoSearchOutline /></div>
        </div>
    );
};
const NavMd = () => {};
const NavLg = () => {};

const Navbar = () => {
    return (
        <>
            <nav className="bg-navc-50">
                <div className="md:hidden">{/*mobile device */}<NavSm /></div>
                <div className="hidden md:flex lg:hidden">{/*medium device */}</div>
                <div className="hidden lg:flex">{/*Large Device */}</div>
            </nav>
        </>
    );
};

export default Navbar;