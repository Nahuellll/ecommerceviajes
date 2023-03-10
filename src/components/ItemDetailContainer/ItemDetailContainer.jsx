import React, {useState,useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom'

const products = [
    {id:1,category:'Cordoba',image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'los gigantes'},
    {id:2,category:'Cordoba',image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'lacumbre'},
    {id:3,category:'Mendoza',image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'lala'},
    {id:4,category:'Mendoza',image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'lale'},
    {id:5,category:'Cordoba',image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'lalu'}
]

const ItemDetailContainer = () =>{
    const [data,setData] = useState({});

    const {detailId} = useParams()
    useEffect(() =>{
        const getData = new Promise (resolve =>{
            setTimeout(() => {
                resolve(products)
            }, 1000);
        });
        getData.then(res => setData(res.find(product =>product.id===parseInt(detailId))));
    },[])

    return(
        <ItemDetail data = {data}/>
    )
}

export default ItemDetailContainer;