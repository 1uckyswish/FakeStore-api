import React from 'react'
import "./Contact.css"

function ContactUs() {
  return (
    <div className='contact-container'>
        <div className='form-container'>
            <h1>Contact Us</h1>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="text" placeholder='Write your message here'/>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default ContactUs