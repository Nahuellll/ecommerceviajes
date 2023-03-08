import React from "react";
import CartWidget from "../cartWidget/CartWidget";


const NavBar = () => {
    return(
        <div className="container">
            <nav className="nav">
                <div className="brand">
                    <a className="navLink" href="#"> milogo</a>
                </div>
                <ul className="list">
                    <li>
                        <a className="navLink" href="">Cordoba</a>
                    </li>
                    <li>
                        <a className="navLink" href="">Mendoza</a>
                    </li>
                    <li>
                        <a className="navLink" href=""><CartWidget/></a>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default NavBar;
