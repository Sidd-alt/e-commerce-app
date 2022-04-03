import { createContext, useState } from "react";

export const CartDropDownContext = createContext({
   showCartDropdown: false,
   setshowCartDropdown: () => false
});

export const CartDropDownProvider = ({ children }) => {
   
   const [showCartDropdown, setshowCartDropdown] = useState(false);

   const value = { showCartDropdown, setshowCartDropdown }

   return(
      <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
   )
}

