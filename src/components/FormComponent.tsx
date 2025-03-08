import React from 'react'
import '../styles/FormContainer.css'
import { Link } from 'react-router-dom'

const FormContainer: React.FC = () => {
  return (
    <div className='form-component-container'>
      <div className="header">GET IN TOUCH</div>
      <div className="para">Have a project in mind? Let's discuss how we can help you achieve your goals.</div>
      <div className="second-row">
        <div className="left">
          <div><i className='fa-solid fa-envelope'></i>pearlsoftechorg@gmail.com</div>
          <div><i className='fa-solid fa-phone'></i>9704337901, 9857822532</div>
          <div className="social">
            <div className="title">FOLLOW US</div>
            <div className="links">
              <a href=""><i className='fa-brands fa-facebook'></i></a>
              <a href=""><i className='fa-brands fa-linkedin'></i></a>
              <a href=""><i className='fa-brands fa-instagram'></i></a>
            </div>
          </div>
        </div>
        <div className="right">
          <form>
            <div className="first-row">
              <input type="text" placeholder='Company Name' />
              <input type='email' placeholder='Company Email' />
            </div>
            <textarea name="" id="" placeholder='Message'></textarea>
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormContainer