import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../Context/CartContext'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Item({ product }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [size, setSize] = useState("")

  const handleChange = (event) => setSize(event.target.value);
  console.log(size)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const talles = product.talle;

  const { addProducts } = useContext(CartContext)

  const itemCart = {
    title: product.nombre,
    id: product.id,
    price: product.precio,
    pictureURL: product.img,
    quantity: 1,
    size: size
  }

  const onAdd = (quantity) => {
    addProducts(itemCart, quantity, size)
  }

  return (
    <><Card className='card-product'>
      <CardMedia
        className='img-product'
        component="img"
        height="200"
        image={product.img}
        alt="green iguana" />
      <CardContent className='card-content'>
        <Typography gutterBottom className='cbold title' variant="h5" component="div">
          {product.nombre}
        </Typography>
        <Typography className='cbold price' variant="body2" color="text.secondary">
          ${product.precio}
        </Typography>
        <Button className='cbold btn' onClick={handleOpen}>Ver descripción</Button>
      </CardContent>
      <CardContent className='card-content'>
        <Select
          fullWidth
          id="followers"
          labelId="followersL"
          margin="dense"
          displayEmpty
          name="followers"
          onChange={handleChange}
          value={size}
          variant="outlined"
        >
          <MenuItem value={talles[0]}>{talles[0]}</MenuItem>
          <MenuItem value={talles[1]}>{talles[1]}</MenuItem>
          <MenuItem value={talles[2]}>{talles[2]}</MenuItem>

        </Select>
      </CardContent>
      <CardContent className='card-content'>
        <ItemCount initial={1} onAdd={onAdd} stock={product.stock} />
      </CardContent>
    </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal-desc' sx={style}>
          <Typography className='cbold title-description' id="modal-modal-title" variant="h4" component="h2">
            Descripción de producto
          </Typography>
          <Typography className='cbold description' id="modal-modal-description" sx={{ mt: 2 }}>
            {product.descripcion}
          </Typography>
        </Box>
      </Modal></>

  );
}