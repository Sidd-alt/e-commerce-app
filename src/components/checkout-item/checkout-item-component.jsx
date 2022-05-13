import { useContext } from 'react';
import { CartDropDownContext } from '../contexts/cart-dropdown-context';
import './checkout-item-styles.scss';

const CheckOutItem = ({ cartItem }) => {

   const { name, imageUrl, price, quantity } = cartItem;
   const  { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartDropDownContext)

   const clearItemHandler = () => clearItemFromCart(cartItem)

   const addItemHandler = () => addItemToCart(cartItem)
   const removeItemHandler = () => removeItemFromCart(cartItem)

   return(
      <>
         <div className='checkout-item-container'>
            <div className='image-container'>
               <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
               <div onClick={removeItemHandler} className='arrow'>
                  &#10094;
               </div>
               <span className='value'>{quantity}</span>
               <div onClick={addItemHandler} className='arrow'>
                  &#10095;
               </div>
            </span>
            <span className='price'>{price}</span>
            <span onClick={clearItemHandler} className='remove-button'>&#10005;</span>
         </div>
      </>
   )
}

export default CheckOutItem;