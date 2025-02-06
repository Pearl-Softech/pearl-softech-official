import { Link } from "react-router-dom";
import "../styles/Home.css";
import { useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
    useEffect(() => {
        gsap.to(".home-container .hero .hero-content .first-row span", {
            duration: 2,
            opacity: 1,
            y: 0,
            stagger: 0.05, // Adds a delay between each animation
            ease: "power2.out"
        });

        gsap.to(".home-container .hero .hero-content .second-row", {
            duration: 2,
            opacity: 1,
            y: 0,
            ease: "power2.out",
        });

        gsap.to(".home-container .hero .buttons button", {
            duration: 2,
            opacity: 1,
            y: 0,
            ease: "power2.out",
            delay: 2
        });
    }, []);

    return (
        <div className="home-container">
            <div className="hero">
                <div className="hero-content">
                    <div className="first-row">
                        {"Empower, Secure, Innovate".split("").map((char, index) => (
                            <span key={index}>{char}</span>
                        ))}
                    </div>
                    <div className="second-row">
                        Your Trusted Partner for Marketing, Cloud, Software, and Cybersecurity Solutions. Providing innovative solutions to enhance digital presence, optimize operational efficiency, and ensure robust cybersecurity
                    </div>
                </div>
                <div className="buttons">
                    <button><Link to={"/contact"} className="join">JOIN US</Link></button>
                    <button><Link to={"/about"} className="about">ABOUT US</Link></button>  
                </div>
            </div>
        </div>
    );
};

export default Home;
