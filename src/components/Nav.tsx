import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import { useState } from 'react';

const Nav: React.FC = () => {
  let [menu, setMenu] = useState(false);

  // Function to handle closing the menu
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="nav-container">
      <div className="first-row">
        <div className="first-col">
          <Link to={"/"} onClick={closeMenu}>
            <div className="logo">PEARL SOFTECH</div>
          </Link>
        </div>
        <div className="second-col">
          <div className="links">
            <Link to={"/about"} onClick={closeMenu}>About</Link>
            <Link to={"/service"} onClick={closeMenu}>Service</Link>
            <Link to={"/team"} onClick={closeMenu}>Team</Link>
            <Link to={"/career"} onClick={closeMenu}>Career</Link>
          </div>
        </div>
        <div className="third-col">
          <Link to={"/contact"}>
            <button>Contact</button>
          </Link>
        </div>
        <div className="menu" onClick={() => { setMenu(!menu) }}>
          {
            menu === false ? <i className='fa-solid fa-bars'></i> : <i className='fa-solid fa-xmark'></i>
          }
        </div>
      </div>
      {
        menu === true ?
          <div className="second-row">
            <Link to={"/about"} onClick={closeMenu}>About</Link>
            <Link to={"/service"} onClick={closeMenu}>Service</Link>
            <Link to={"/team"} onClick={closeMenu}>Team</Link>
            <Link to={"/career"} onClick={closeMenu}>Career</Link>
            <Link to={"/contact"} onClick={closeMenu}>Contact</Link>
          </div>
          :
          null
      }
    </div>
  );
}

export default Nav;
