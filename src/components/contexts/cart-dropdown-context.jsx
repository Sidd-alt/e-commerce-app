import { createContext, useEffect, useState } from "react";
// import CartItem from "../cart-item/cart-item-component";
const addCartItem = (cartItems, productToAdd) => {

   const existingCartItem = cartItems.find((cartitem) => cartitem.id === productToAdd.id)

   if(existingCartItem){
      return cartItems.map((cartItem) => 
         cartItem.id === productToAdd.id ?
         {...cartItem, quantity: cartItem.quantity + 1}
         :
         cartItem
      )
   }
   return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = ( cartItems, cartItemToRemove ) => {

   const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

   if(existingCartItem.quantity === 1){
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
   }

   return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)

}

const clearItem = ( cartItems, cartItemToRemove ) => {
   return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
}

export const CartDropDownContext = createContext({
   showCartDropdown: false,
   setshowCartDropdown: () => {},
   cartItems: [],
   addItemToCart: () => {},
   removeItemFromCart: () => {},
   clearItemFromCart: () => {},
   cartItemsQuantity: 0,
});

export const CartDropDownProvider = ({ children }) => {
   
   const [showCartDropdown, setshowCartDropdown] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [cartItemsQuantity, setcartItemsQuantity] = useState(0);

   useEffect(() => {
      const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
      setcartItemsQuantity(newCartCount)
   }, [cartItems])

   const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd))
   }

   const removeItemFromCart = (cartItemToRemove) => {
      setCartItems(removeCartItem(cartItems, cartItemToRemove))
   }

   const clearItemFromCart = (cartItemToRemove) => {
      setCartItems(clearItem(cartItems, cartItemToRemove))
   }

   const value = { showCartDropdown, setshowCartDropdown, clearItemFromCart,
      cartItems, addItemToCart, removeItemFromCart, cartItemsQuantity, setcartItemsQuantity 
   }

   return(
      <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
   )
}