import React, {useEffect, useContext} from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import './CartWidget.css'
import CartContext from '../../Context/CartContext';
import './CartWidget.css';
import ModalCart from '../ModalCart/ModalCart'

const CartWidget = () => {

    const {productCarts, totalPrice, open, setOpen} = useContext(CartContext)

    const totalProducts = productCarts.map(productCart => productCart.quantity).reduce((prev, curr) => prev + curr, 0);

    const openCart = () => {
        setOpen(!open)
    }


    return(
        <>
        <FaShoppingCart className='cart-logo' onClick={openCart} fontSize="medium" />
        {open && <ModalCart total={totalPrice} totalProducts={totalProducts} products={productCarts}/>}
        <span className="cart-number">{totalProducts}</span>
        </>
    )
}

export default CartWidget

//       
