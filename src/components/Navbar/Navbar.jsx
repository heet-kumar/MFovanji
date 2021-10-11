import { list } from "purgecss/node_modules/postcss";
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
const NavMd = () => {
    return(
        <div className="flex-col w-full">
            <div className="flex px-4 pt-4 w-full items-center">
                <div className="w-full flex bg-white items-center rounded-sm">
                    <div className="rounded-sm text-gray-900 pl-3 bg-white"><IoSearchOutline /></div>
                    <input className="w-full font-medium text-sm rounded-sm px-2 py-2 border-none focus:outline-none" type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
                </div>
            </div>
            <div className="w-full bg-navc-100">
                <ul className="flex list-none px-2 py-0.5">
                    <li className="text-gray-300 text-sm font-semibold px-2 py-2">Movies</li>
                    <li className="text-gray-300 text-sm font-semibold px-2 py-2">Stream</li>
                    <li className="text-gray-300 text-sm font-semibold px-2 py-2">Events</li>
                    <li className="text-gray-300 text-sm font-semibold px-2 py-2">Plays</li>
                    <li className="text-gray-300 text-sm font-semibold px-2 py-2">Sports</li>
                    <li className="text-gray-300 text-sm font-semibold px-2 py-2">Activities</li>
                    <li className="text-gray-300 text-sm font-semibold px-2 py-2">Buzz</li>
                </ul>
            </div>
        </div>
    );
};
const NavLg = () => {};

const Navbar = () => {
    return (
        <>
            <nav className="bg-navc-50">
                <div className="md:hidden">{/*mobile device */}<NavSm /></div>
                <div className="hidden md:flex lg:hidden">{/*medium device */}<NavMd /></div>
                <div className="hidden lg:flex">{/*Large Device */}</div>
            </nav>
        </>
    );
};

export default Navbar;