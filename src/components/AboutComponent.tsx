import React from 'react'
import '../styles/AboutComponent.css'
import AboutImg from '../assets/home-about.jpg'
import { Link } from 'react-router-dom'

const AboutComponent:React.FC = () => {
  return (
    <div className='about-component-container'>
        <div className="left">
            <img src={AboutImg} alt="" />
        </div>
        <div className="right">
            <div className="header">ABOUT PEARL SOFTECH</div>
            <div className="para">Founded with a passion for innovation, Pearls of Tech has been at the forefront of digital transformation since our inception.</div>
            <div className="list">
                <div className="item">
                    <div className="top">
                        <div className="title"><span>&gt;</span> Expert Team</div>
                    </div>
                    <div className="para">Our team of skilled professionals brings years of industry experience.</div>
                </div>
                <div className="item">
                    <div className="top">
                        <div className="title"><span>&gt;</span> Cutting-edge Technology</div>
                    </div>
                    <div className="para">We stay ahead of the curve by embracing the latest technological advancements.</div>
                </div>
                <div className="item">
                    <div className="top">
                        <div className="title"><span>&gt;</span> Client-focused Approach</div>
                    </div>
                    <div className="para">Your success is our priority. We work closely with you to achieve your goals.</div>
                </div>
            </div>
            <Link to={"/about"}>LEARN MORE</Link>
        </div>
    </div>
  )
}

export default AboutComponent