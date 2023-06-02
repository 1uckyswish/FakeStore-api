import React, {useContext} from 'react'
import "./Checkout.css"
import { HeartedContext } from '../../Contexts/CartContext';
import CartCheckout from '../../components/CartCheckout/CartCheckout';



function Checkout() {
   const {hearted} = useContext(HeartedContext);
  return (
    <div>
      {
        hearted.map(item=> <CartCheckout productsAdded={item} key={item.id} />)
      }
    </div>
  )
}

export default Checkout