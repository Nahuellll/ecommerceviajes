import React, { useState,useContext} from "react";
import { act } from "react-dom/test-utils";
const CartContext = React.createContext([]);

//hook propio para usar nuestro context
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]);

//funcion para agregar productos al carrito
    const addProduct = (item,quantity) => {
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if(product){
            product.quantity += quantity;
            newCart = [...cart];
        }else{
            product = {...item, quantity: quantity };
            newCart = [...cart,product];
        }
        setCart(newCart);
    }


//funcion para calcular el total price
const totalPrice =  () => {
    return cart.reduce((prev,act) => prev + act.quantity * act.price, 0);
}

//funcion para calcular total de productos
const totalProducts = () => cart.reduce((acc,productAct) => acc + productAct.quantity, 0)


//limpiamos el carrito seteandolo de nuevo a un array vacio
    const clearCart = () => setCart([]);

//funcion que verifica si el producto ya esta en el carrito
    const isInCart = (id) =>{return(cart.find(product => product.id === id) ? true : false)}


//funcion para remover productos del carrito
    const removeCart = (id) => setCart(cart.filter(product => product.id !== id))




    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeCart,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;