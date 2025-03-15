import React from 'react'
import '../styles/Service.css'
import Img from '../assets/service.jpg'
import ServiceInner from '../assets/service-inner.jpg'

const Service: React.FC = () => {
    return (
        <div className='service-container'>
            <div className="first-row">
            <div className="background">
                <img src={ServiceInner} alt="" />
                </div>
                <div className="first-col">
                    <h1 className="header">Our Services</h1>
                    <div className="snippet quote">Comprehensive technology solutions tailored to your business needs</div>
                    <div className="para">
                        At Pearl Softech, we provide a wide range of services to help businesses thrive in the digital landscape.
                        <br />
                        <br />
                        From custom software and web development to AI solutions, cloud computing, and digital marketing, our expert team delivers innovative, scalable, and secure solutions tailored to your needs. Whether optimizing operations or enhancing your online presence, we ensure your business stays ahead in a rapidly evolving market.</div>
                </div>
                <div className="second-col">
                    <img src={Img} alt="" />
                </div>
            </div>
            <div className="second-row">
                <h1 className="header">Our Service Categories</h1>
                <div className="para quote">Comprehensive solutions for all your technology needs</div>
                <div className="wrapper">
                    <div className="item">
                        <i className='fa-solid fa-code'></i>
                        <div className="name">Software Development</div>
                        <div className="desc">Custom websites and applications built with the latest technologies to deliver exceptional user experiences</div>
                    </div>
                    <div className="item">
                        <i className='fa-solid fa-magnifying-glass'></i>
                        <div className="name">Digital Marketing</div>
                        <div className="desc">Boost your online presence and reach your target audience</div>
                    </div>
                </div>
            </div>
            <div className="third-row">
                <div className="first-col">
                    <h1 className="header">Digital Marketing Services</h1>
                    <div className="row">
                        <div className="first">
                            <div className="title"><i className='fa-solid fa-circle-check'></i>Influence Campaigning</div>
                            <div className="desc">Strategic campaigns designed to build brand authority and influence in your industry.</div>
                        </div>
                        <div className="second">
                            <div className="title"><i className='fa-solid fa-circle-check'></i>Digital Profile Management</div>
                            <div className="desc">Comprehensive management of your online presence across all digital platforms.</div>
                        </div>
                    </div>
                </div>
                <div className="second-col">
                    <h1 className="header">Platforms We Serve</h1>
                    <div className="grid">
                        <div className="item">
                            <i className='fa-brands fa-google'></i>
                            <div className="name">Google (SEO)</div>
                        </div>
                        <div className="item">
                            <i className='fa-solid fa-globe'></i>
                            <div className="name">Webpages</div>
                        </div>
                        <div className="item">
                            <i className='fa-brands fa-facebook'></i>
                            <div className="name">Facebook</div>
                        </div>
                        <div className="item">
                            <i className='fa-brands fa-youtube'></i>
                            <div className="name">Youtube</div>
                        </div>
                        <div className="item">
                            <i className='fa-brands fa-youtube'></i>
                            <div className="name">Instagram</div>
                        </div>
                        <div className="item">
                            <i className='fa-brands fa-x-twitter'></i>
                            <div className="name">Twitter (X)</div>
                        </div>
                        <div className="item">
                            <i className='fa-brands fa-tiktok'></i>
                            <div className="name">TikTok</div>
                        </div>
                        <div className="item">
                            <i className='fa-brands fa-linkedin'></i>
                            <div className="name">Linkedin</div>
                        </div>
                        <div className="item">
                            <i className='fa-brands fa-whatsapp'></i>
                            <div className="name">Whatsapp</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service