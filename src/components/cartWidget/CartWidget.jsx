import React from "react";
import {useCartContext} from '../../context/CartContext'

const CartWidget = () => {

    const {totalProducts} = useCartContext();


//si hay productos se renderiza su cantidad en el cartwidget
    return(
        <>
            <i className="bi bi-cart"></i>
            <span>{totalProducts() || ' ' }</span>
        </>
    )
}

export default CartWidget;