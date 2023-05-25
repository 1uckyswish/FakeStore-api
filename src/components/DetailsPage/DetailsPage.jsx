import React from 'react'
import "./DetailsPage.css"

function DetailsPage() {
  return (
    <div className='details-main-container'>
        <div className='details-container'>
            <div className='details-img'>
                <img src='https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'/>
            </div>
            <div className='details-info'>
                <h3>Fjallraven Backpack</h3>
                <p>109€</p>
                <p>Description</p>
                <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default DetailsPage