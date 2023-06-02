import React from 'react'
import './CartCheckout.css'
import { BsTrash } from 'react-icons/bs';

function CartCheckout({productsAdded}) {
  return (
      <div className='product-items'>
         <img src={productsAdded.image} alt={productsAdded.image}/>
        <p>{productsAdded.title}</p>
        <p>${productsAdded.price}</p>
        <p>1</p>
        <BsTrash />
      </div>
  )
}


export default CartCheckout