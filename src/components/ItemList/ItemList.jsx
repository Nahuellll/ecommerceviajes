import React from "react";
import '../ItemList/ItemList.css';
import Item from "../Item/Item";


//map que itera sobre nuestra data y por cada elemento crea un item
const ItemList = ({data =[]}) => {
    return (
        <div className="itemsContainer">
        {data.map (travels => <Item key={travels.id} info={travels}   />)}
        </div>
    )
}

export default ItemList;