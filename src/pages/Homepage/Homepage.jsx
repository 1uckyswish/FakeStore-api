import axios from 'axios'
import React from 'react'
import "./Homepage.css"
import { useState, useEffect } from 'react'



function Homepage() {
  const [categories, setCategories] = useState("");

  useEffect(
    ()=>{
   axios.get(`https://fakestoreapi.com/products/categories`)
  .then((res)=>{
    const apiValues = res.data;
    const apiResult = apiValues.map((element)=>{
      return <p className='category'>{element.charAt(0).toUpperCase() + element.slice(1)}</p>
    })
    setCategories(apiResult);
  })
  .catch((error) => console.log(error))
    }
  )
 


  return (
    <div className='homepage-container'>
      <div className='category-container'>
        <p className='category'>All</p>
        {categories}
        </div>
        


      </div>
  )
}

export default Homepage