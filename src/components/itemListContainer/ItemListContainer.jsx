import React  from "react";
import ItemCount from "../itemCount/ItemCount";
import Title from  '../title/Title';
import ItemList from "../ItemList/ItemList";
import { useState,useEffect} from "react";

const products = [
    {id:1,image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'los gigantes'},
    {id:2,image:'https://viajerosocultos.com/wp-content/uploads/2021/01/1235222036_1390807941-750x563.jpg',title:'lacumbre'}
]


const ItemListContainer = (props) => {
    const [data,setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise (resolve =>{
            setTimeout(() => {
                resolve(products)
            }, 3000);
        });
        getData.then(res =>{setData(res)});


    },[])

    const onAdd = (quantity) =>{
        console.log(`aseguraste ${quantity} plazas`)
    }

    return(<>
        <Title greeting= {props.texto}/>
        <ItemCount initial={1} stock={8} onAdd={onAdd} />
        <ItemList data = {data}/>
        </>
    )
}

export default ItemListContainer;

