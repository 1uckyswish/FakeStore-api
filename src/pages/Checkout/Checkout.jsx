import {useContext, useState, useEffect} from 'react'
import "./Checkout.css"
import { HeartedContext } from '../../contexts/HeartedContext';
import CartCheckout from '../../components/CartCheckout/CartCheckout';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';



function Checkout() {
//** create state to control modal */

const [isCheckedOut, setIsCheckedOut] = useState(false)

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "692px",
    height: "536px"
  },
  overlay:{
    backgroundColor: 'rgba(0,0,0, .5)'
  }
};

Modal.setAppElement(document.getElementById('root'));

   const {hearted} = useContext(HeartedContext);
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
    setTotal(updatedTotal);
      },[hearted] //** only render when everything carted gets updated. as in removed or added */
    )

  return (
    <div className='checkout-container'>
      <div className='checkout-items'>
        <div className='item-details'>
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
                    <button onClick={()=> setIsCheckedOut(true)} >Checkout</button>
                    <Modal
                isOpen={isCheckedOut}
                onRequestClose={()=> setIsCheckedOut(false)}
                style={customStyles}
                contentLabel="Checkout Modal">
                <div className='modal-container'>
                  <h1>Your Order was successful!</h1>
                  <h2>Check your email for the order confirmation. Thank you for shopping with Fake Store!</h2>
                  <Link to="/"><button className='modal-button' onClick={()=> setIsCheckedOut(false)}>Return To Main Page</button></Link>
                </div>
              </Modal>
                </div>
              }
      </div>
    </div>
  )
}
export default Checkout