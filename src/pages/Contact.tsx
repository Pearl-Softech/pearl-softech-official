import React from 'react'
import '../styles/Contact.css'
import ContactImg from '../assets/contact.jpg'

const Contact: React.FC = () => {
    return (
        <div className='contact-container'>
            <div className="first-row">
                <div className="first-col">
                    <h1 className="header">CONTACT US</h1>
                    <div className="para">
                        <p className='quote'>We look forward to hearing from you and partnering for your future success</p>
                        <br />
                        Get in touch with our team to discuss how we can help your business grow. Whether you have a specific project in mind, need expert advice, or want to explore tailored solutions, we're here to assist you. Our dedicated professionals are eager to understand your goals and challenges, providing the right strategies to drive success.
                        <br />
                        <br />
                        If you'd like to use our services, please email us through the form given below, and we will get back to you as soon as possible.
                    </div>
                </div>
                <div className="second-col">
                    <img src={ContactImg} alt="" />
                </div>
            </div>
            <div className="second-row">
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
            <div className="third-row">
                <h1 className="header">OUR LOCATION</h1>
                <div className="para quote">Below is an interactive map to guide you to our office.</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d460.9792441938943!2d85.32504022390528!3d27.686907877370604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQxJzEyLjgiTiA4NcKwMTknMzEuMSJF!5e0!3m2!1sen!2snp!4v1741682887854!5m2!1sen!2snp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact