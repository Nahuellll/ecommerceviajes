import React  from "react";

import { getFirestore,collection,getDocs,query,where}  from 'firebase/firestore'
import Title from  '../title/Title';
import ItemList from "../ItemList/ItemList";
import { useState,useEffect} from "react";
import {useParams} from 'react-router-dom'


const ItemListContainer = (props) => {
    const [data,setData] = useState([]);

    const {categoryId} = useParams()

    useEffect(() =>{

        const querydb = getFirestore();
        const queryCollection = collection(querydb,'products');

        if(categoryId){
            const queryFilter = query(queryCollection, where('category','==',categoryId))
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(product =>({id: product.id, ... product.data()}) )));
        }else{
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product =>({id: product.id, ... product.data()}) )));
        }
    },[categoryId])

    return(<>
        <Title greeting= {props.texto}/>
        <ItemList data = {data}/>
        </>
    )
}

export default ItemListContainer;

