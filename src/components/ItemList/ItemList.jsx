import React from "react";
import Item from "../Item/Item";
import '../ItemList/ItemList.css';



const ItemList = ({data =[]}) => {
    return (
        data.map (travels => <Item key={travels.id} info={travels}/>)
    )
}

export default ItemList;