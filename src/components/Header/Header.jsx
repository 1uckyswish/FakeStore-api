import React, {useContext} from 'react'
import "./Header.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HeartedContext } from '../../contexts/HeartedContext';
import { Link } from 'react-router-dom';
// AiOutlineShoppingCart

function Header() {
  //**Use the global CartContext to get the props from it**/
  const {hearted} = useContext(HeartedContext)
  return (
    <div className='header-container'>
      <Link to="/">
        <h1>Fake Store</h1>
        </Link>
        <Link to="/checkout" className='cart-container'>
          <AiOutlineShoppingCart className='cart-icon'/>
          {
            hearted.length === 0?
            ""
            :
            <p className='count-button'>
             {hearted.length}
          </p>
          }
        </Link>

    </div>
  )
}


export default Header