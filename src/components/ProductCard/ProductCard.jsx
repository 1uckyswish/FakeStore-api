import React from 'react'
import "./ProductCard.css"
import Homepage from '../../pages/Homepage/Homepage'
import { AiFillHeart } from "react-icons/ai";
//AiFillHeart

//* pass in the prop from the component to transfer data to XTML
//* apply the props as JSON to the specific areas.
function ProductCard({products}) {
  return (
    <div className='product-card'>
        <div className='img-box'> 
            <a href={`/details/${products.id}`}><img src={products?.image} alt={products?.title}/></a>
            <div className='icon-box'>
                <AiFillHeart className='heart-icon'/>
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