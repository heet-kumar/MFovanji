import React from "react";
import { Route } from "react-router";

// Layouts
import DefaultLayout from "../Layouts/Default.layout";

const DefaultHOC = ({component: Component , ...props}) => {
    return(
        <>
            <Route 
                {...props}
                component={(props)=>{
                    <DefaultLayout>
                        <Component {...props} />
                    </DefaultLayout>
                }} 
            />
        </>
    );
};

export default DefaultHOC;