import React from "react";
import { Route } from "react-router-dom";

// importing components
import Navbar from "../components/Navbar/Navbar";

const DefaultLayout = (props) => {
    return(
        <>
            {/* <h1 className="text-xl">Default Layout</h1> */}
            <Navbar />
            {props.children}
        </>
    );
};

export default DefaultLayout;