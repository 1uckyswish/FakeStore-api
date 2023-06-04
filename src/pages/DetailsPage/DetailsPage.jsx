import {useEffect, useState, useContext}from 'react'
import "./DetailsPage.css"
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { HeartedContext } from '../../contexts/HeartedContext';

function DetailsPage() {
  //* returns the details for the specific product when button/tab is clicked
  //* return the id from the url for the details to render.
  const {productId} = useParams();
  //* call the api to load the specific product on page
  //* https://fakestoreapi.com/products/

  //* store the current JSON data in state to apply to XML
  const [itemDetails, setItemDetails] = useState([]);
 
//  //**Load all the products */
//  const [loadedProducts, setLoadedProducts] = useState([])

  //* start with false
  const [isAdded, setIsAdded] = useState(false);

  //**Use the global CartContext to get the props from it**/
  const {hearted, addProduct, removeProduct} = useContext(HeartedContext);
  //**use the addProduct function as a onclick for it work on the icon **/
 

  useEffect(
    ()=>{
      //*fetch data from the api and apply the current ID of the param to the API URL to access the JSON data
     axios.get(`https://fakestoreapi.com/products/${productId}`)
     .then((result)=>
     {
      //*Call state function to store the JSON data */
      setItemDetails(result?.data)
      console.log(result.data)
      
     }
     )
     .catch((error)=>console.log(error))
    }, [productId] //* when page loads it runs
    // * runs one time only 
  )

  useEffect(() => {
    const foundProduct = hearted.find((product) => product.id === itemDetails?.id);
    setIsAdded(foundProduct);
  }, [hearted, itemDetails]);


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
                {
                  isAdded?
                  <button className='details-button red-button' onClick={()=> removeProduct(itemDetails.id)} >Remove From Cart</button> 
                  :
                  <button className='details-button' onClick={()=> addProduct(itemDetails)} >Add to Cart</button> 
                }
                {/* <button>Add to Cart</button> */}
            </div>
        </div>
    </div>
  )
}

export default DetailsPage