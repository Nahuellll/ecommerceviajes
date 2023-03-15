import '../cart/Cart.css';
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
                <p className='text'>Aun no hay viajes en el carrito</p>
                <Link to='/'>
                    <button className='btn'> Comprar viajes</button>
                    </Link>
            </>
        )
    }


//si hay productos en cart lo mapeamos para crear un itemcart por cada producto
    return(
        <>
            <div>
                {cart.map(product => <ItemCart key={product.id} product={product} />)}
            </div>
            <p className='text'>
                Total : $ {totalPrice()}
            </p>
            <Link to='/checkout'>
                <button className='btn'>Siguiente</button>
            </Link>
        </>

    )
}

export default Cart;