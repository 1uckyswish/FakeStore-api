import React, {useEffect, useState}from 'react'
import "./DetailsPage.css"
import {useParams} from 'react-router-dom'
import axios from 'axios';

function DetailsPage() {
  //* returns the details for the specific product when button/tab is clicked
  //* return the id from the url for the details to render.
  const {productId} = useParams();
  //* call the api to load the specific product on page
  //* https://fakestoreapi.com/products/

  //* store the current JSON data in state to apply to XML
  const [itemDetails, setItemDetails] = useState([]);

  useEffect(
    ()=>{
      console.log("loaded")
      //*fetch data fron the api and apply the current ID of the param to the API URL to access the JSON data
     axios.get(`https://fakestoreapi.com/products/${productId}`)
     .then((result)=>
     {
      console.log(result?.data)
      //*Call state function to store the JSON data */
      setItemDetails(result?.data)
     }
     )
     .catch((error)=>console.log(error))
    }, [] //* when page loads it runs
    // * runs one time only 
  )

  return (
    <div className='details-main-container'>
        <div className='details-container'>
            <div className='details-img'>
                <img src={itemDetails?.image}/>
            </div>
            <div className='details-info'>
                <h3>{itemDetails?.title}</h3>
                <p>${itemDetails?.price}</p>
                <p>Description</p>
                <p>{itemDetails?.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default DetailsPage