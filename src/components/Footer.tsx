import { Link } from 'react-router-dom';
import '../styles/Footer.css'

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="first-col">
      <Link to={"/"}><div className="logo">PEARL SOFTECH</div></Link>
      </div>
      <div className='middle'>
        &#169; 2025 Pearl Softech Pvt. Ltd. All rights reserved.
      </div>
      <div className="second-col">
        <div className="links">
          <a href="https://www.facebook.com/people/Pearl-Softech/61569672626784/"><i className='fa-brands fa-facebook'></i></a>
          <a href="https://www.linkedin.com/company/pearl-softech/"><i className='fa-brands fa-linkedin'></i></a>
          <a href="https://www.instagram.com/pearl_softech/"><i className='fa-brands fa-instagram'></i></a>
          <a href="https://www.tiktok.com/@pearl_softech3"><i className='fa-brands fa-tiktok'></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;