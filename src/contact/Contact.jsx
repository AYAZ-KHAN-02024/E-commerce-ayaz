import React from 'react'
import "./Contact.css"
function Contact() {



  return (
    <div className='box Contact '>

      <h2 className='h2-contact'>contact us</h2>

      <form className='contact-form' onSubmit={(e) => { e.preventDefault() }}>

        <input type="text" placeholder='USERNAME' name='USERNAME' required />
        <input type="email" placeholder='EMAIL' name='EMAIL' required />
        <textarea name='MESSAGE' placeholder='MESSAGE' required />
        <button className='sub-button' name='submit'>SEND</button>

      </form>
    </div>
  )
}

export default Contact
