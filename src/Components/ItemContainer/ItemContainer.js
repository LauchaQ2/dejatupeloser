import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import getProducts from '../../FirebaseRequest/firebaseRequest';


export default function ItemContainer(){

    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts
            .then(data => {
                setProducts(data)
            })
    }, [])



    return(
        <>
        <ItemList products={products}/>
        </>
    )
}