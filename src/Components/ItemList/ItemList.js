import React, { useState } from "react";
import Item from '../Item/Item';
import './ItemList.css';

export default function ItemContainer({products}){

    return(
        <div className="list-container">
            {products.map( product =>{
                return(<Item key={product.id} product={product}/>)
            })}
        </div>
    )
}