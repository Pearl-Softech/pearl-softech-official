import { Link } from 'react-router-dom'
import '../styles/About.css'
import AboutImg from '../assets/about.jpg'

const About: React.FC = () => {
    return (
        <div className="about-container">
            <div className="first-row">
                <div className="first-col">
                    <h1 className="header">
                        About Pearl Softech Pvt. Ltd.
                    </h1>
                    <br />
                    <div className="para">
                        Your trusted partner in Digital marketing, Software development, Cloud services, Penetration testing, and Cybersecurity.<br></br><br></br>Our mission is to empower businesses and individuals by providing secure, scalable, and innovative solutions that help businesses thrive in the digital age.
                    </div>
                    <div className="quote">
                        Empowering Innovation, Elevating Digital Success
                    </div>
                </div>
                <div className="second-col">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
            <div className="second-row">
                <div className="header">OUR JOURNEY</div>
                <div className='quote'>From vision to industry leadership</div>
                <div className="para-top">
                    Founded in 2025, Pearl Softech started with a vision to revolutionize the technology landscape. Over the years, we have grown into a leading provider of comprehensive tech solutions, serving clients across various industries. Our commitment to innovation and excellence has been the driving force behind our success.
                    <br />
                    <br />
                    Pearl Softech Pvt. Ltd. operates at the intersection of technology and business growth, providing innovative solutions to enhance digital presence and operational efficiency.
                </div>
                <div className="row">
                    <div className="first-col col">
                        <div className="title"><span><i className='fa-solid fa-code'></i></span>Software Development</div>
                        <div className="desc">
                            Encompasses the design, development, and deployment of cutting-edge applications, enterprise systems, and digital platforms tailored to optimize business processes and user experiences.
                        </div>
                    </div>
                    <div className="second-col col">
                        <div className="title"><span><i className='fa-solid fa-magnifying-glass'></i></span>Digital Marketing</div>
                        <div className="desc">
                            Leverages data-driven strategies, including SEO, performance marketing, content creation, and analytics, to enhance brand positioning, customer engagement, and conversion rates.
                        </div>
                    </div>
                </div>
                <div className="para-bottom">
                    By integrating advanced technological solutions with strategic marketing methodologies, we drive digital transformation and sustainable business success.
                </div>
            </div>
            <div className="third-row">
                <div className="first-col">
                    <div className="header">Digital Marketing Services</div>
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
                    <div className="header">Platforms We Serve</div>
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
            <div className="fourth-row">
                <div className="header">Why Choose Pearl Softech?</div>
                <div className="para">What sets us apart in the digital landscape</div>
                <div className="grid">
                    <div className="item">
                        <i className="fas fa-shield-alt"></i>
                        <div className="title">Security First Approach</div>
                        <div className="desc">We prioritize security in everything we build, ensuring your digital assets are protected against evolving threats.</div>
                    </div>
                    <div className="item">
                        <i className="fas fa-lightbulb"></i>
                        <div className="title">Innovative Solutions</div>
                        <div className="desc">We leverage cutting-edge technologies to deliver innovative solutions that give your business a competitive edge.</div>
                    </div>
                    <div className="item">
                        <i className="fas fa-users"></i>
                        <div className="title">Expert Team</div>
                        <div className="desc">Our team of skilled professionals brings years of industry experience and technical expertise to every project.</div>
                    </div>
                    <div className="item">
                        <i className="fas fa-cogs"></i>
                        <div className="title">Tailored Approach</div>
                        <div className="desc">We understand that every business is unique, which is why we customize our solutions to meet your specific needs and goals.</div>
                    </div>
                    <div className="item">
                        <i className="fas fa-chart-line"></i>
                        <div className="title">Results-Driven</div>
                        <div className="desc">We focus on delivering measurable results that contribute to your business growth and success.</div>
                    </div>
                    <div className="item">
                        <i className="fas fa-headset"></i>
                        <div className="title">Dedicated Support</div>
                        <div className="desc">We provide ongoing support and maintenance to ensure your digital solutions continue to perform optimally.</div>
                    </div>
                </div>
            </div>
            <div className="fifth-row">
                <div className="header">Ready to Transform Your Digital Presence?</div>
                <div className="para">Let's discuss how Pearl Softech can help you achieve your business goals with our innovative technology solutions.</div>
                <Link to={"/contact"}>CONTACT US</Link>
            </div>
        </div>
    )
}

export default About