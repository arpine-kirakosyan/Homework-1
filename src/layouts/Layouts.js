import React from "react" //error ete sa chgrem
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
const Layout = () => {

    return(
        <>
            <Header />
            <Outlet/>
        </>
    )

}
export default Layout