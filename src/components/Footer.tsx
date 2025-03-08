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
          <a href=""><i className='fa-brands fa-facebook'></i></a>
          <a href=""><i className='fa-brands fa-linkedin'></i></a>
          <a href=""><i className='fa-brands fa-instagram'></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;