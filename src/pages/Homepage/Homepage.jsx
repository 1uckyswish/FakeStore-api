import axios from 'axios'
import "./Homepage.css"
import { useState, useEffect, useContext} from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import { ThemeContext } from '../../contexts/DarkModeContext';



function Homepage() {
  const [categories, setCategories] = useState([]);
  const [product, setProducts] = useState([]);

  //** toggle dark mode */
  //** use context for global state */
  const {darkMode} = useContext(ThemeContext);

  //* Load the categories and products when page loads
  useEffect(
    ()=>{
      //get the data from the api
   axios.get(`https://fakestoreapi.com/products/categories`)
  .then((res)=>{
    //* console.log(res.data);
    //* These are the categories from api. What do i do with them next?
    //* store data in state
    setCategories(res.data);
  })
  .catch((error) => console.log(error))

  //* make the second api call for products
  axios.get(`https://fakestoreapi.com/products`)
  .then((result) => {
    //* console log the data and apply to state
    //*  console.log(result.data)
    setProducts(result.data);
  })
  .catch((err) => console.log(err));
    }, []);


  //* handle a filter button system to load diffrent categories for products
//* https://fakestoreapi.com/products/category/women's%20clothing
  const handleFilter = (category) => {
    console.log(`The Category is ${category}`);
    let url = "https://fakestoreapi.com/products"
    category != "All" ? url =`https://fakestoreapi.com/products/category/${category}` :  url
    //* grab the value of every button to create a query
    axios.get(url)
    .then(productResult => {
      //* get the data from the api and append it to the product card
      console.log(productResult.data)
      setProducts(productResult.data)
    })
    .catch((productError) => console.log(productError));
  }
  return (
    <div className={
       darkMode?
      "homepage-container"
      :
      "homepage-container homepage-dark"
    }>
      <div className={
        darkMode?
        'category-container'
        :
        'category-container dark-category-container'
      }>
        <p className='category' type='all' onClick={()=> handleFilter("All")}>All</p>
        {  //* using the map function to make a <p> tag for each category
        //* grabbing the index of the first category we are able to get the first letter
        //* get the string value and append the value of the capital letter and add it to the position of the word by using slice to remove the first lower case letter.
        categories.map((element) => <p onClick={()=> handleFilter(element)} key={element}>{element.charAt(0).toUpperCase() + element.slice(1)}</p>)
        }
      </div>
      <div className='product-container'>
        { //* call the component "ProductCard" to append the html to container
          //* apply a prop to the component to recive the data as well as apply an ID
         product.map((item) => <ProductCard products={item} key={item.id} />)
        }
      </div>
        


      </div>
  )
}

export default Homepage