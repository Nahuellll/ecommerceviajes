import React from "react";
import '../Item/Item.css';

const Item = ({info}) => {
    return(
        <a href="" className="viaje">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </a>
    )
}

export default Item;