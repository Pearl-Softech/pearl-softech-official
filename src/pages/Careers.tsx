import React from 'react'
import '../styles/Careers.css'
import CareersImg from '../assets/careers.jpeg'
import CareersInner from '../assets/careers-inner.jpg'

const Careers: React.FC = () => {
    return (
        <div className='careers-container'>
            <div className="first-row">
            <div className="background">
                <img src={CareersInner} alt="" />
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
                    <img src={CareersImg} alt="" />
                </div>
            </div>
            <div className="second-row">
                <div className="header"><i className="fa-solid fa-briefcase"></i>No Current Job Openings</div>
                <div className="para">Thank you for your interest in joining Pearl Softech. At the moment, we are not hiring and do not have any vacancies. Please check back later for future opportunities.</div>
            </div>
        </div>
    )
}

export default Careers