import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import {useForm}  from 'react-hook-form';
import { useCartContext } from "../../context/CartContext";

const Checkout = () => {

    const {register,formState: {errors },handleSubmit} = useForm();
    const [guardarDatos,setGuardarDatos] = useState({});
    const {cart,totalPrice,clearCart }= useCartContext();

    const onSubmit = (data) => {
        setGuardarDatos(data);

            const order = {
                datos:guardarDatos,
                items:cart.map(product =>({id:product.id, title:product.title, price:product.price, quantity:product.quantity})),
                total:totalPrice(),
            }
            console.log(guardarDatos);

        const db = getFirestore();
        const ordersCollection = collection(db,'orders');
        addDoc(ordersCollection,order)
        .then(({id}) => alert(` hola ${data.nombre} ${data.apellido} su pedido fue realizado este es su codigo de pedido:${id},`))

        clearCart();
    }

    return(
        <div>
            <h2>Completa los datos</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text"name="nombre" {...register('nombre',{
                        required:true,
                    })}/>
                    {errors.nombre?.type === 'required' && <p>Debes introducir un nombre</p>}
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text"name="apellido" {...register('apellido',{
                        required:true,
                    })}/>
                    {errors.apellido?.type === 'required' && <p>Debes introducir un apellido</p>}
                </div>
                <div>
                    <label>Telefono</label>
                    <input type="phone"  name="telefono" {...register('telefono',{
                        required:true,
                        maxLength:14,
                        minLength:14,
                    })}/>
                    {errors.telefono?.type === 'required' && <p>Debes introducir tu numero de telefono</p>}
                    {errors.telefono?.type === 'maxLength' && <p>el campo telefono debe tener 14 digitos</p>}
                    {errors.telefono?.type === 'minLength' && <p>el campo telefono debe tener 14 digitos</p>}
                </div>
                <div>
                    <label>email</label>
                    <input type="email"  name="email"{...register('email',{
                        required:true,
                        pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                    })}/>
                    {errors.email?.type === 'required' && <p>Debes introducir un email</p>}
                    {errors.email?.type === 'pattern' && <p>Formato incorrecto</p>}
                </div>
                <input  type="submit" value='Generar orden'/>
            </form>
        </div>
    )
}

export default Checkout;