import React from "react";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="container">
            <nav className="nav">
                <div className="brand">
                    <NavLink className="navLink" to='/'> milogo</NavLink>
                </div>
                <ul className="list">
                    <li>
                        <NavLink className="navLink" to='/category/Cordoba'>Cordoba</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to='/category/Mendoza'>Mendoza</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to='/cart'><CartWidget/></NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default NavBar;
