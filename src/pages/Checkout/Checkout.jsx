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
                  <h1 className='error-message'>No Products In Cart</h1>
                :
                hearted.map(item=> <CartCheckout productsAdded={item} key={item.id} />)
              }
              {
                hearted == 0
                ?
                ""
                :
                <div className='total-container'>
                    <p>Total $400.00</p>
                    <button>Checkout</button>
                </div>
              }
      </div>
    </div>
  )
}
export default Checkout