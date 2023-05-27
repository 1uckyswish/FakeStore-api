import React from 'react'
import "./Header.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
// AiOutlineShoppingCart

function Header() {
  return (
    <div className='header-container'>
      <a href="/">
        <h1>Fake Store</h1>
        </a>
        <p className='count-button'>1</p>
      <AiOutlineShoppingCart className='cart-icon'/>
    </div>
  )
}

export default Header