import {useContext, useState, useEffect} from 'react'
import "./Checkout.css"
import { HeartedContext } from '../../contexts/HeartedContext';
import CartCheckout from '../../components/CartCheckout/CartCheckout';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/DarkModeContext';


function Checkout() {
  //** toggle dark mode */
  //** use context for global state */
  const {darkMode} = useContext(ThemeContext);

//** create state to control modal */

const [isCheckedOut, setIsCheckedOut] = useState(false)

const customStyles = {
  content: {
     top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%', // Adjust the width based on your design
    maxWidth: '692px', // Set a maximum width if needed
    maxHeight: '90vh', // Set a maximum height if needed
    overflow: 'auto', // Enable scrolling if the content overflows
  },
  overlay:{
    backgroundColor: 'rgba(0,0,0, .5)'
  }
};

Modal.setAppElement(document.getElementById('root'));

   const {hearted, setHearted} = useContext(HeartedContext);
   //** store total in state to update on page */
   const [total, setTotal] = useState(0);
  
  //** create a useEffect to get all carted and get only its price and increment it */
  useEffect(
    ()=>{
      //** set a value to update it as a reference value */
      let updatedTotal = 0;
    hearted.forEach(element => {
      updatedTotal += element.price;
    });
    //** set the refrence value to the state function to get total to update */
    setTotal(updatedTotal.toFixed(2));
      },[hearted] //** only render when everything carted gets updated. as in removed or added */
    )

    // const [orderComplete, setOrderComplete] = useState(false);

  return (
    <div className={
      darkMode?
      'checkout-container'
      :
      'checkout-container dark-checkout-container'
    }>
      <div className={
        darkMode?
        'checkout-items'
        :
        'checkout-items dark-checkout-items'
      }>
        <div className={
          darkMode?
          'item-details'
          :
          'item-details dark-item-details'
        }>
          <p>Item</p>
          <div className='item-sub-details'>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </div>
        </div>
              {
                hearted == 0
                ?  
                  <h1 className='error-message'>No Products In Cart</h1>
                :
                hearted.map(item=> <CartCheckout productsAdded={item} key={item.id} />)
              }
              {
                hearted == 0
                ?
                ""
                :
                <div className='total-container'>
                    <p>Total: ${total}</p>
                   {
                    !isCheckedOut?
                     <button className='checkout-button' onClick={()=> setIsCheckedOut(true)} >Checkout</button>
                     :
                    <button className='checkout-button checked'  >Checked Out</button>
                   }
                    <Modal
                isOpen={isCheckedOut}
                // onRequestClose={()=> setIsCheckedOut(false)}
                style={customStyles}
                contentLabel="Checkout Modal">
                <div className='modal-container'>
                  <h1>Your Order was successful!</h1>
                  <h2>Check your email for the order confirmation. Thank you for shopping with Fake Store!</h2>
                  <Link to="/">
                    <button className='modal-button' onClick={()=> setHearted([])}>
                      Return To Main Page
                    </button>
                    </Link>
                </div>
              </Modal>
                </div>
              }
      </div>
    </div>
  )
}
export default Checkout