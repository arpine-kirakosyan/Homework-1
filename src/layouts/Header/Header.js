import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css";
const Header =() =>{

    return(

        <div className="header-content">
            <p className="header-content-title"> Header</p>

            <nav>
                <NavLink to={""}>Homepage</NavLink>
                <NavLink className = {({isActive, isPending})=>
                    isActive ? "active" : isPending ? "pending" : "" }  to = {"/about"}>
                    About page
                </NavLink>

            </nav>
        </div>

    )

}
export default Header;