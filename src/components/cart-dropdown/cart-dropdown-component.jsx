import Button from '../button/button-component';
import { useNavigate } from 'react-router-dom'
import './cart-dropdown-styles.scss';

const CartDropDown = () => {

   const navigate = useNavigate();

   const goToCheckoutPage = () => {
      navigate("/checkout")
   }

   return(
      <div className='cart-dropdown-container'>
         <div className='cart-items'/>
         <Button onClick={goToCheckoutPage}>CHECKOUT</Button>
      </div>
   )
}

export default CartDropDown;