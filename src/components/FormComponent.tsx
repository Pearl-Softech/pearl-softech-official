import React from 'react'
import '../styles/FormContainer.css'

const FormContainer: React.FC = () => {
  return (
    <div className='form-component-container'>
      <div className="first-col">
        <div className="header">Get In Touch</div>
        <div className="para">Have questions about our services or want to discuss a project? Fill out the form and our team will get back to you as soon as possible.</div>
        <div className="info">
          <div><i className='fa-solid fa-envelope'></i>pearlsoftechorg@gmail.com</div>
          <div><i className='fa-solid fa-phone'></i>9704337901, 9857822532</div>
        </div>
        <div className="socials">
          <div className="title">FOLLOW US</div>
          <a href=""><i className='fa-brands fa-facebook'></i></a>
          <a href=""><i className='fa-brands fa-linkedin'></i></a>
          <a href=""><i className='fa-brands fa-instagram'></i></a>
        </div>
      </div>
      <div className="second-col">
        <div className="header">Fill the form</div>
        <form>
          <div className="top-input">
            <input type="text" placeholder='Company Name' />
            <input type='email' placeholder='Company Email' />
          </div>
          <textarea name="" id="" placeholder='Message'></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>

  )
}

export default FormContainer