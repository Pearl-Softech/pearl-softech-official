import React from 'react'
import '../styles/Career.css'
import CareerImg from '../assets/career.jpeg'
import CareerInner from '../assets/career-inner.jpg'

const Career: React.FC = () => {
    return (
        <div className='career-container'>
            <div className="first-row">
            <div className="background">
                <img src={CareerInner} alt="" />
                </div>
                <div className="first-col">
                    <h1 className="header">Join Pearl Softech</h1>
                    <div className="para">
                        <p className='quote'>Your chance to be a part of Something Bigger</p>
                        <br />
                        At PearlsOfTech, we are driven by innovation and excellence. We offer a dynamic work environment where creativity meets technology, empowering professionals to build cutting-edge solutions.
                        <br />
                        <br />
                        Join our team to collaborate with industry experts, enhance your skills, and shape the future of technology. Explore exciting career opportunities with us today!
                    </div>
                </div>
                <div className="second-col">
                    <img src={CareerImg} alt="" />
                </div>
            </div>
            <div className="second-row">
                <div className="header"><i className="fa-solid fa-briefcase"></i>No Current Job Openings</div>
                <div className="para">Thank you for your interest in joining Pearl Softech. At the moment, we are not hiring and do not have any vacancies. Please check back later for future opportunities.</div>
            </div>
        </div>
    )
}

export default Career