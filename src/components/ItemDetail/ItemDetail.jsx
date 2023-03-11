import './ItemDetail.css';
import React,{useState} from "react";
import { useCartContext } from '../../context/CartContext';

import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({data}) =>{
    const [goCart,setGoCart] = useState(false)
    const {addProduct} = useCartContext();

    const onAdd = (quantity) =>{
        setGoCart(true);
        addProduct(data ,quantity);
    }


    return(
        <div className="container">
            <div className="detail">
                <img className="image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    {
                        goCart
                        ? <Link to='/cart'>Terminar orden</Link>
                        : <ItemCount initial={1} stock={8} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;