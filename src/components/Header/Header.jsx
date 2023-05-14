import React from 'react'
import "./Header.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
// AiOutlineShoppingCart

function Header() {
  return (
    <div className='header-container'>
      <h1>Fake Store</h1>
      <AiOutlineShoppingCart className='cart-icon'/>
    </div>
  )
}

export default Header