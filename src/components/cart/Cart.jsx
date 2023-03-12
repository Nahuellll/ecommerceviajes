import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from '../itemCart/ItemCart'


const Cart = () => {

    const {cart,totalPrice} = useCartContext();


//condicional para ver si hay productos en el carrito , si no hay muestra un mensaje
    if(cart.length === 0){
        return (
            <>
                <p>Aun no hay viajes en el carrito</p>
                <Link to='/'>Comprar viajes</Link>
            </>
        )
    }


//si hay productos en cart lo mapeamos para crear un itemcart por cada producto
    return(
        <>
            {cart.map(product => <ItemCart key={product.id} product={product} />)}
            <p>
                Total : $ {totalPrice()}
            </p>
            <Link to='/checkout'>
                <button>Siguiente</button>
            </Link>
        </>

    )
}

export default Cart;