import { createContext, useState } from "react";
import { collection, getDocs , query, where } from 'firebase/firestore';
import db from '../firebaseconfig';


const CartContext = createContext();

const CartProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [productCarts, setProducts] = useState([])
    

    function isInCart(id, size) {
        return productCarts.some(productCart => productCart.id === id && productCart.size === size);
    }

    
    const addProducts = (productCart, quantity, size) => {
        if (isInCart(productCart.id, size)){
            const newAddProducts = productCarts.map(currentElement=>{
                if(currentElement.id === productCart.id){
                    console.log("el current tiene",currentElement.quantity)
            return{...currentElement, quantity: currentElement.quantity + quantity}                 
        }else return currentElement
                })
            setProducts(newAddProducts)
        }else{
            setProducts(prev => [...prev, {...productCart, quantity}]);
            }
     }

     const totalPrice = productCarts.reduce(function (acc, curr) {
        return acc + curr.quantity * curr.price;
    },0);

    const clearCart = () => setProducts([]);
    
   /* const removeItem = (id, quantity, size) => {
        const productExist = productCarts.find(productCart=>productCart.id === id && productCart.size === size)
        if (productExist.quantity === 1){
        setProducts(productCarts.filter(productCart=>productCart.size !==productExist.size && productCart.id === productExist.id));
    }else{
        setProducts(productCarts.map(productCart => productCart.id === productExist.id && productCart.size === productExist.size
            ? {...productExist, quantity: productExist.quantity - 1}:
            productCart))
    }
    }*/

    const removeItem = (id,quantity, size) => {
        console.log(id);
        console.log(productCarts);
        const productExist = productCarts.find(
          (productCart) => productCart.id === id && productCart.size === size
        );
        console.log("product exist", productExist);
        if (productExist.quantity === 1) {
          const filteredProducts = productCarts.filter(
            (product) => product !== productExist
          );
          setProducts(filteredProducts);
        } if (productExist.quantity > 1) {
            setProducts(productCarts.map(productCart => productCart.id === productExist.id && productCart.size === productExist.size
                ? {...productExist, quantity: productExist.quantity - 1}:
                productCart))
        } else {
            
        } {
            
        }
      };

    const addItem = (id, quantity, size) => {
        const ProductExist = productCarts.find(productCart=>productCart.id === id && productCart.size === size)
        if (ProductExist.quantity > 0){
            setProducts(productCarts.map(productCart => productCart.id === id && productCart.size === size
                ? {...ProductExist, quantity: ProductExist.quantity + 1}:
                productCart))
    }
    }



    const data = {
        addProducts,
        open,
        setOpen,
        totalPrice,
        productCarts,
        clearCart,
        removeItem,
        addItem
    }
    console.log(productCarts)

    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext