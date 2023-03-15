import React from "react";
import '../Item/Item.css';
import {Link} from  'react-router-dom'



const Item = ({info}) => {
    return(
        <>
        <div className="item">
            <img src={info.image} alt={info.title} />
            <p>{info.title}</p>
            <Link to={`/detail/${info.id}`}>
            <button className="buttonDetail">ver mas</button>
        </Link>
        </div>
        </>
    )
}

export default Item;