import React, { useEffect, useState, useContext } from 'react';
import './Cart.css';
import { Link } from "react-router-dom";
import CartContext from '../../Context/CartContext';
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import ReactWhatsapp from 'react-whatsapp';


export default function Cart() {


    const [total, setTotal] = useState([])
    const { productCarts, clearCart, removeItem, totalPrice, addItem } = useContext(CartContext)

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        if (productCarts.length !== 0) {
            clearCart();
            setTotal([]);
        }
    };
    var result = JSON.stringify(productCarts)

    var mensaje = productCarts.map(product=>{
        return `${product.title} || Cantidad: ${product.quantity} || Precio unitario: ${product.price}. `
    })

    var pedidoFinal = `PEDIDO: Productos: ${mensaje} || PRECIO TOTAL: ${totalPrice} `

    console.log(pedidoFinal);

    console.log(productCarts);

    productCarts.map((productCart) => {
        const tot = productCart.price * productCart.quantity
        total.push(tot);
    })
    return (
        <><div className={productCarts.length === 0 ? "container contvoid d-flex align-content-around flex-wrap mt-3" : "container mt-3"}>
            <div className={productCarts.length < 5 && productCarts.length > 0 ? "container contCart mt-3" : null}>
                {productCarts.length === 0 ?
                    <>
                        <div className='container-fluid d-flex justify-content-center'>
                            <h3>No tienes productos en tu carrito</h3>
                        </div>
                        <div className='container-fluid d-flex justify-content-center'>
                            <Link to="/productos">
                                <Button className='button-to-products bg-red' style={{ background: "red", color: "black" }}>¡A comprar!</Button>
                            </Link>
                        </div>
                    </>
                    :
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className='cell-font-size'>Nombre</TableCell>
                                    <TableCell className='cell-font-size' >Precio Unit.</TableCell>
                                    <TableCell className='cell-font-size' >Precio Total</TableCell>
                                    <TableCell className='cell-font-size' align="center">Cantidad</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {productCarts.map((product) => (
                                    <TableRow
                                        key={product.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell className='cell-font-size'>
                                            {product.title}
                                        </TableCell>
                                        <TableCell className='cell-font-size'>${product.price}</TableCell>
                                        <TableCell className='cell-font-size'>${product.price * product.quantity}</TableCell>
                                        <TableCell className='cell-font-size btn-cart-group' align="center">
                                        <Button
                                                onClick={() => {
                                                    removeItem(product.id, product.quantity);
                                                    setTotal([]);
                                                }}>
                                                <IoIosRemoveCircle />                                    
                                                </Button>
                                                {product.quantity}
                                            <Button onClick={() => addItem(product.id, product.quantity)}>
                                                <IoIosAddCircle />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </div>
        </div>

            {productCarts.length === 0 ?
                null
                :
                <div className='mt'>
                    <h3 className='total-price-font-size'>Total: ${totalPrice}</h3>
                    <div className='cont-btn-cart'>
                    <Button className='cell-font-size btn-size' onClick={handleClickOpen} variant="contained">
                    <ReactWhatsapp className="wp-btn" number="+54 9 11 2255-9335" message={pedidoFinal}>
                        ENVIAR PEDIDO
                        </ReactWhatsapp>
                    </Button>
                    <Link to={"/productos"}>
                        <Button className='cell-font-size btn-size' variant="contained">SEGUIR COMPRANDO</Button>
                    </Link>
                    </div>                    
                </div>}
        </>

    )
}