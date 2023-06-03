import {useContext} from 'react'
import './CartCheckout.css'
import { BsTrash } from 'react-icons/bs';
import { HeartedContext } from '../../Contexts/CartContext';
import { Link } from 'react-router-dom';

function CartCheckout({productsAdded}) {
    //**Use the global CartContext to get the props from it**/
  const {removeProduct} = useContext(HeartedContext);
  //**use the removeProduct function as a onclick for it work on the icon **/
  return (
    
      <div className='product-items'>
       <Link to={`/details/${productsAdded?.id}`}>
         <img src={productsAdded.image} alt={productsAdded.image}/>
         </Link>
         <div className='title-wrap'>
            <p>{productsAdded.title}</p>
         </div>
        <p>${productsAdded.price}</p>
        <p>1</p>
        <BsTrash onClick={()=> removeProduct(productsAdded.id)} className='trash-icon'/>
      </div>
  )
}


export default CartCheckout