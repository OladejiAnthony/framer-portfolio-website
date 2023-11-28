import React from 'react'
import "./Contact.scss"

function Contact() {
  return (
    <div className='contact'>
      <div className='textContainer'>
        <h1>Let's work together</h1>
        <div className='item'>
            <h2>Mail</h2>
            <span>hello@react.dev</span>
        </div>
        <div className='item'>
            <h2>Address</h2>
            <span>21 Taiwo Road, Kwara State Nigeria</span>
        </div>
        <div className='item'>
            <h2>Phone</h2>
            <span>+234 813 745 9380</span>
        </div>
      </div>
      <div className='formContainer'>
        <form>
            <input type='text' required placeholder='Name' />
            <input type='email' required placeholder='Email' />
            <textarea rows={8} placeholder='Message' />
            <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact


