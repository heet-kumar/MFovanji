import React from "react";

const NavSm = () => {
    return(
        <div className="flex">
            <div className="flex-col">
                <div className="text-xl">It All Starts Here!</div>
                <div className="text-xl">Ahmedabad</div>
            </div>
            <div className=""></div>
        </div>
    );
};
const NavMd = () => {};
const NavLg = () => {};

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="md:hidden">{/*mobile device */}</div>
                <div className="hidden md:flex lg:hidden">{/*medium device */}</div>
                <div className="hidden lg:flex">{/*Large Device */}</div>
            </nav>
        </>
    );
};

export default Navbar;