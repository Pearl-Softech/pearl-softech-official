import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const [secondRow, setSecondRow] = React.useState(false);

  const handleLinkClick = () => {
    setSecondRow(false);
  };

  return (
    <div className="nav-container">
      <div className="first-row">
        <div className="logo"><Link to={"/"} onClick={handleLinkClick}><span>PEARL</span> SOFTECH </Link></div>
        <div className="menu" onClick={() => setSecondRow(!secondRow)}>
          {secondRow ? <i className="fa-solid fa-xmark"></i> : <i className="ri-menu-3-fill"></i>}
        </div>
        <div className="links">
          <Link to={"/about"}>About</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/career"}>Career</Link>
          <Link to={"/events"}>Events</Link>
          <Link to={"/contact"} className="contact">Contact</Link>
        </div>
      </div>
      {secondRow &&
        <div className="second-row">
          <Link to={"/about"} onClick={handleLinkClick}>About</Link>
          <Link to={"/services"} onClick={handleLinkClick}>Services</Link>
          <Link to={"/contact"} onClick={handleLinkClick}>Contact</Link>
          <Link to={"/term-and-condition"} onClick={handleLinkClick}>Terms and Condition</Link>
          <Link to={"/privacy-and-policy"} onClick={handleLinkClick}>Privacy and Policy</Link>
          <Link to={"/help-and-support"} onClick={handleLinkClick}>Help and Support</Link>
          <Link to={"/faq"} onClick={handleLinkClick}>FAQs</Link>
        </div>
      }
    </div>
  )
}

export default Nav;