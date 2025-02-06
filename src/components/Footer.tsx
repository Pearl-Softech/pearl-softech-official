import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="logo"><Link to={"/"}><span>PEARL</span> SOFTECH</Link></div>
      <div className="links">
        <Link to={"/term-and-condition"}>Terms and Condition</Link>
        <Link to={"/privacy-and-policy"}>Privacy and Policy</Link>
        <Link to={"/help-and-support"}>Help and Support</Link>
        <Link to={"/faq"}>FAQs</Link>
      </div>
      <div className="socials">
        <a href=""><i className="fa-brands fa-x-twitter"></i></a>
        <a href="https://linkedin.com/pearlsoftech"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Pearl-Softech"><i className="fa-brands fa-github"></i></a>
        <a href="https://facebook.com/pearlsoftech"><i className="fa-brands fa-facebook"></i></a>
      </div>
    </div>
  )
}

export default Footer;