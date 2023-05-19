import axios from 'axios'
import React from 'react'
import "./Homepage.css"
import { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';



function Homepage() {
  const [categories, setCategories] = useState([]);
  const [product, setProducts] = useState([]);
  //Load the categories and products when page loads
  useEffect(
    ()=>{
      //get the data from the api
   axios.get(`https://fakestoreapi.com/products/categories`)
  .then((res)=>{
    // console.log(res.data);
    //These are the categories from api. What do i do with them next?
    //store data in state
    setCategories(res.data);
  })
  .catch((error) => console.log(error))

  //make the second api call for products
  axios.get(`https://fakestoreapi.com/products`)
  .then((result) => {
    //console log the data and apply to state
    // console.log(result.data)
    setProducts(result.data);
  })
  .catch((err) => console.log(err));
    }
  )
 


  return (
    <div className='homepage-container'>
      <div className='category-container'>
        <p className='category'>All</p>
        {  //using the map function to make a <p> tag for each category
        categories.map((element, index) => <p key={index}>{element}</p>)
        }
      </div>
      <div className='product-container'>
        { //call the component "ProductCard" to append the html to container
          // apply a prop to the component to recive the data as well as apply an ID
        product.map((item) => <ProductCard products={item} key={item.id} />)
        }
      </div>
        


      </div>
  )
}

export default Homepage