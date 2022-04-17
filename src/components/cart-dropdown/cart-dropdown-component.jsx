import { useContext } from 'react'
import { CartDropDownContext } from '../contexts/cart-dropdown-context'
import Button from '../button/button-component'
import CartItem from '../cart-item/cart-item-component'
import './cart-dropdown-styles.scss'

const CartDropDown = () => {

   const { cartItems } = useContext(CartDropDownContext)

   return(
      <div className='cart-dropdown-container'>
         <div className='cart-items'>
            {cartItems.length === 0 ?
            <span>Your cart is empty</span>
            :
             cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))}   
         </div>
         <Button>CHECKOUT</Button>
      </div>
   )
}

export default CartDropDown;