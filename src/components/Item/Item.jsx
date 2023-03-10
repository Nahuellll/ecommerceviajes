import React from "react";
import '../Item/Item.css';
import {Link} from  'react-router-dom'

const Item = ({info}) => {
    return(
        <Link to={`/detail/${info.id}`} className="viaje">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    )
}

export default Item;