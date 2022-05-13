import { useState, useEffect, useContext } from "react";
import { CartDropDownContext } from "../../components/contexts/cart-dropdown-context";
import CheckOutItem from "../../components/checkout-item/checkout-item-component";
import './checkout-component.scss'

const CheckoutPage = () => {

   const { cartItems, addItemToCart, removeItemFromCart, removeWholeCartItem } = useContext(CartDropDownContext)
   const [ total, setTotal ] = useState(0);
   
   useEffect(() => {
      let newTotal = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity) , 0)
      setTotal(newTotal)
   }, [ cartItems ])


   return(
      <div className="checkout-container">
         <div className="checkout-header">
            <div className="header-block">
               <span>Product</span>
            </div>
            <div className="header-block">
               <span>Description</span>
            </div>
            <div className="header-block">
               <span>Quantity</span>
            </div>
            <div className="header-block">
               <span>Price</span>
            </div>
            <div className="header-block">
               <span>Remove</span>
            </div>
         </div>
      {
         cartItems.map((cartItem) => (<CheckOutItem key={cartItem.id} cartItem={cartItem} />))
      }
      <span className="total">Total : {`$ ${total}`}</span>
      </div>

   )
}

export default CheckoutPage;