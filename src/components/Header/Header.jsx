import {useContext} from 'react'
import "./Header.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HeartedContext } from '../../contexts/HeartedContext';
import { Link } from 'react-router-dom';
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from '../../contexts/DarkModeContext';
//BsMoonStarsFill

function Header() {
  //**Use the global CartContext to get the props from it**/
  const {hearted} = useContext(HeartedContext)

  //** toggle dark mode */
  //** use context for global state */
  const {darkMode, setDarkMode} = useContext(ThemeContext);


  return (
    <div className={
      darkMode?
      "header-container"
      :
      "header-container header-dark"
    }>
      <Link to="/">
        <h1>Fake Store</h1>
        </Link>
        <div onClick={()=> setDarkMode(!darkMode)}>
           {
          darkMode?
          <FaSun className='theme-icon'/>
          :
          <BsMoonStarsFill className='theme-icon theme-dark-icon' />
        }
        </div>
        {/* <BsMoonStarsFill /> */}
        <Link to="/checkout" className='cart-container'>
          <AiOutlineShoppingCart className={darkMode?
          'cart-icon'
          :
           'cart-icon dark-cart-icon'
          }/>
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