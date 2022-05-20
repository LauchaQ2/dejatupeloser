import React, { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './ItemCount.css';
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import {FaShoppingCart} from 'react-icons/fa';



export default function ItemCount({stock, initial, onAdd}) {

    const [counter, setCounter] = useState(initial);

    const addAmount = () => {
        if (counter === stock) {
            return;
        }
        setCounter(counter + 1);
    }
    const subAmount = () => {
        if (counter === 1) {
            return;
        }
        setCounter(counter - 1);
    }

    return (
        <div className="cont">
            <ButtonGroup className="cont-btn-counter" variant="contained" aria-label="outlined primary button group">
                <Button className="btn-count" onClick={subAmount}><IoIosRemoveCircle className="btn-svg"/></Button>
                <input className="input-count" value={counter} readOnly/>
                <Button className="btn-count" onClick={addAmount}><IoIosAddCircle className="btn-svg"/></Button>
            </ButtonGroup>
            <div className='cont-btn-add'>
                   <Button className="btn chart border" onClick={() => { onAdd(counter); } }>
                        <FaShoppingCart className="btn-svg"/>
                    </Button>
                </div>
        </div>
    )

}