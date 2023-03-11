import React from "react";
import '../itemCart/ItemCart.css'
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({product}) =>{

    const {removeCart} = useCartContext();

    return(
        <div className="item">
            <img src={product.image} alt={product.title} />
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio unid: {product.price}</p>
                <p>Subtotal:$ {product.quantity * product.price}</p>
                <button onClick={() => {removeCart(product.id)}}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;