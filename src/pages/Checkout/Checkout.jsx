import React, {useContext} from 'react'
import "./Checkout.css"
import { HeartedContext } from '../../Contexts/CartContext';
import CartCheckout from '../../components/CartCheckout/CartCheckout';



function Checkout() {
   const {hearted} = useContext(HeartedContext);
  return (
    <div className='checkout-container'>
      <div className='checkout-items'>
        <div className='item-details'>
          <p>Item</p>
          <div className='item-sub-details'>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </div>
        </div>
              {
                hearted == 0
                ?
                <p>Sorry Nothing in cart yet</p>
                :
                hearted.map(item=> <CartCheckout productsAdded={item} key={item.id} />)
              }
      </div>
    </div>
  )
}
export default Checkout