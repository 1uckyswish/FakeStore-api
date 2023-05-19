import React from 'react'
import "./ProductCard.css"
import Homepage from '../../pages/Homepage/Homepage'
import { AiFillHeart } from "react-icons/ai";
//AiFillHeart

function ProductCard({products}) {
  return (
    <div className='product-card'>
        <div className='img-box'> 
            <img src={products.image}/>
            <div className='icon-box'>
                <AiFillHeart className='heart-icon'/>
            </div>
        </div>
        <div className='product-info'>
            <p>{products.title}</p>
            <p>{products.category}</p>
            <p>${products.price}</p>
        </div>
    </div>
  )
}

export default ProductCard