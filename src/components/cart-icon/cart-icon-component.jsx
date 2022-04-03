import { useContext } from 'react';
import './cart-icon-styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartDropDownContext } from '../contexts/cart-dropdown-context';

const CartIcon = () => {

   const { showCartDropdown, setshowCartDropdown } = useContext(CartDropDownContext)
   
   const handleCartDropDown = () => {
      setshowCartDropdown(!showCartDropdown)
   }

   return(
      <div onClick={handleCartDropDown} className='cart-icon-container'>
         <ShoppingIcon className='shopping-icon' />
         <span className='item-count'>0</span>
      </div>
   )
}

export default CartIcon;