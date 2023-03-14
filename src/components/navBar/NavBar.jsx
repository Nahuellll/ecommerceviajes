import '../navBar/NavBar.css';
import React from "react";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink,Link } from "react-router-dom";
import logo from '../../assets/mountain.png'

const NavBar = () => {
    return(
        <div className="container">
            <nav className="nav">
            <Link to="/">
                <div>
                    <img className="navBrand" src={logo} alt="logo"/>
                </div>
            </Link>
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
