import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "../../Context/CartContext";
import CartPage from "../../Pages/CartPage/CartPage";
import Homepage from "../../Pages/HomePage/Homepage";
import Products from "../../Pages/Products/Products";
import NavBar from '../NavBar/NavBar';

export default function AppRouter(){
    return(
        <>
        <BrowserRouter>
        <CartProvider>
            <NavBar/>
                <Routes>
                <Route index element={<Homepage/>}/> 
                <Route path="/productos" element={<Products/>}/>
                <Route path="/cart" element={<CartPage/>}/> 

                </Routes>
        </CartProvider>
      </BrowserRouter>

        </>
    )
}