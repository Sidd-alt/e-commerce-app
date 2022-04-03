import { useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown-component";
import { UserContext } from "../../components/contexts/user-context";
import { CartDropDownContext } from "../../components/contexts/cart-dropdown-context";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation-styles.scss";

const Navigation = () => {

   const { currentUser }  = useContext(UserContext);

   const { showCartDropdown } = useContext(CartDropDownContext)
   
   return (
      <>
         <div className="navigation">
            <Link className="logo-container" to={"/"}>
               <CrownLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to={"/shop"}>
                  SHOP
               </Link>
               {currentUser ? 
                  <span className="nav-link">SIGN OUT</span>
                  :
                  <Link className="nav-link" to={"/auth"}>
                     SIGN IN
                  </Link>
               }
                  <CartIcon />
            </div>
            {
               showCartDropdown && <CartDropDown />
            }
         </div>
         <Outlet />
      </>
   )
}

export default Navigation;

