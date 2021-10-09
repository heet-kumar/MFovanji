import React from "react";

const DefaultLayout = (props) => {
    return(
        <>
            <h1>Default Layout</h1>
            {props.children}
        </>
    );
};

export default DefaultLayout;