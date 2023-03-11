import React  from "react";

import Title from  '../title/Title';
import ItemList from "../ItemList/ItemList";
import { useState,useEffect} from "react";
import {useParams} from 'react-router-dom'

const products = [
    {id:1,category:'Cordoba', price: 2000,image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'los gigantes'},
    {id:2,category:'Cordoba', price: 2300,image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'lacumbre'},
    {id:3,category:'Mendoza', price: 2800,image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'lala'},
    {id:4,category:'Mendoza', price: 2700,image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'lale'},
    {id:5,category:'Cordoba', price: 2500,image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'lalu'}
]


const ItemListContainer = (props) => {
    const [data,setData] = useState([]);

    const {categoryId} = useParams()

    useEffect(() =>{
        const getData = new Promise (resolve =>{
            setTimeout(() => {
                resolve(products)
            }, 1000);
        });
        if(categoryId){
            getData.then(res =>setData( res.filter(product=>product.category=== categoryId)));
        }else{
            getData.then(res =>{setData(res)});
        }

    },[categoryId])


    return(<>
        <Title greeting= {props.texto}/>
        <ItemList data = {data}/>
        </>
    )
}

export default ItemListContainer;

