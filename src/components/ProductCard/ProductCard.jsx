import {useContext, useState, useEffect} from 'react';
import "./ProductCard.css";
import { AiFillHeart, AiTwotoneHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { HeartedContext } from '../../contexts/HeartedContext';
//AiFillHeart

//* pass in the prop from the component to transfer data to XTML
//* apply the props as JSON to the specific areas.
function ProductCard({products}) {
  //* start with state to check heart functionality 
  const [isHearted, setIsHearted] = useState(false);
  //**Use the global CartContext to get the props from it**/
  const {hearted, addProduct, removeProduct} = useContext(HeartedContext);
  //**use the addProduct function as a onclick for it work on the icon **/

  //**Create a useEffect to set the value of ISHEARTED **/
  useEffect(
    ()=>{
      //**set the state if the product is already added to cart **/
      setIsHearted(hearted.find(item => item.id === products?.id))
      //** goes through each selected and if equals then it will turn true/
      //**This will give a BOOLEAN result **/
      //**if the current item added to cart equals the id of the item displayed make it true **/
    }, [hearted, products] //**anytime hearted is changed this useEffect gets triggered on change **/
  );

  return (
    <div className='product-card'>
        <div className='img-box'> 
            <Link to={`/details/${products?.id}`}><img src={products?.image} alt={products?.title}/></Link>
            <div className='icon-box'>
                {
                  //**If true then turn the heart to dark blue  **/
                  isHearted?
                    <AiFillHeart className='dark-icon' onClick={()=>removeProduct(products.id)} />
                  :
                  //** else if false set the color to original white **/
                    <AiTwotoneHeart className='heart-icon' onClick={()=>addProduct(products)}/>
                }
            </div>
        </div>
        <div className='product-info'>
            <p>{products?.title}</p>
            <p>{products?.category}</p>
            <p>${products?.price}</p>
        </div>
    </div>
  )
}

export default ProductCard