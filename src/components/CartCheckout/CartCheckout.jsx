import React from 'react'
import './CartCheckout.css'
import { BsTrash } from 'react-icons/bs';

function CartCheckout({productsAdded}) {
  return (
      <div className='product-items'>
         <img src={productsAdded.image} alt={productsAdded.image}/>
         <div className='title-wrap'>
            <p>{productsAdded.title}</p>
         </div>
        <p>${productsAdded.price}</p>
        <p>1</p>
        <BsTrash className='trash-icon'/>
      </div>
  )
}


export default CartCheckout