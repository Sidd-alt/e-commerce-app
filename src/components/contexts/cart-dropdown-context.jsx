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

export const CartDropDownContext = createContext({
   showCartDropdown: false,
   setshowCartDropdown: () => {},
   cartItems: [],
   addItemToCart: () => {},
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

   const value = { showCartDropdown, setshowCartDropdown, cartItems, addItemToCart, cartItemsQuantity, setcartItemsQuantity }

   return(
      <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
   )
}

 