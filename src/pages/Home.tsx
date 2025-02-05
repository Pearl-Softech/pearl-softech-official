import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero">
                <div className="hero-content">
                    <div className="first-row">Empower, Secure, Innovate</div>
                    <div className="second-row">One stop solution for all your software needs.</div>
                </div>
                <div className="buttons">
                    <button><Link to={"/contact"} className="join">JOIN US</Link></button>
                    <button><Link to={"/about"} className="about">ABOUT US</Link></button>  
                </div>
            </div>
        </div>
    )
}

export default Home;