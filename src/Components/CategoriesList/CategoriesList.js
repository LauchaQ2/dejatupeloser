import React from "react";
import { CategoriesData } from "./CategoriesData";
import CategoriesItem from "../CategoriesItem/CategoriesItem"

export default function CategoriesList(){

    return(
        <div className="list-container">
        {CategoriesData.map(categ =>{
            return(
                <CategoriesItem key={categ.title} categ={categ}/>
            )
        })}
        </div>
    )
}