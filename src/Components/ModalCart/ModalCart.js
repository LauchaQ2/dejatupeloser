import React, {useState, useContext, useEffect} from 'react';
import '../ModalCart/ModalCart.css';
import { Button } from '@mui/material';
import CartContext from '../../Context/CartContext';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from "react-router-dom";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";


export default function ModalCart({products}){
      
    const {clearCart,removeItem, totalPrice,open, setOpen, addItem} = useContext(CartContext)

    const totalProducts = products.map(product => product.quantity).reduce((prev, curr) => prev + curr, 0);


    const clear = () =>{
        clearCart();
    }

    const handleClose = () => {
        setOpen(!open);
    }
    

    
    
    return(

    <div className='modalCart background-page'>
        <div className='div-toogle'>
         <p className=''>Tienes {totalProducts} productos agregados</p>
         <button className='background-page toogle-x' onClick={handleClose}>X</button>
        </div>
        <div>
        {products.map(product => {
                return(
                    <div className='cont-cart-item' key={product.id}>
                        <img className="img-fluid img-cart mr" src={product.pictureURL} alt="imagen del producto" />
                        <p className='fs-7 mr cont-title'>{product.title}</p>
                        <p className='fs-7 mr cont-price'>${product.quantity*product.price}</p>
                        <div className='cont-btn-counter2'>
                        <Button className="btn-count" onClick={()=>removeItem(product.id,product.quantity)} variant="contained">
                        <IoIosRemoveCircle />                                    
                        </Button>
                        <input className='input-count2' type="text" readOnly value={product.quantity}/>
                        <Button className="btn-count" onClick={()=>addItem(product.id,product.quantity)} variant="contained">
                        <IoIosAddCircle />
                        </Button>
                        </div>
                    </div>
                )
            })}
            { products.length === 0 ?
                <></>
            :
            <div>
            <h6>Total: ${totalPrice}</h6>
                     <Link to={"/cart"}>
                         <Button onClick={handleClose} variant="contained">INICIAR COMPRA</Button>
                    </Link>
                <Button onClick={clear} variant="contained">Vaciar Carrito</Button>
                </div>
            }
            </div>

            </div>
        )
}