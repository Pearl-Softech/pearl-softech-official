import { Link } from "react-router-dom"
import '../styles/Hero.css'
import hero from '../assets/hero.svg'

const Hero:React.FC = () => {
  return (
    <div className="hero-container">
        <div className="first-col">
            <h1 className="hero-header">
            Innovative Tech Solutions for Your Business
            </h1>
            <div className="hero-para">
            Your Trusted Partner for Digital Marketing, Cloud, Software, and Cybersecurity Solutions. Providing innovative solutions to enhance digital presence, optimize operational efficiency.
            </div>
            <div className="buttons">
                <Link to={"/contact"} className="contact">CONTACT US</Link>
                <Link to={"/about"} className="about">ABOUT US</Link>
            </div>
        </div>
        <div className="second-col">
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero