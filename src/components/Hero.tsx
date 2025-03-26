import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "../styles/Hero.css";
import hero from "../assets/hero.svg";

const Hero: React.FC = () => {
  const heroHeaderRef = useRef<HTMLHeadingElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Animate header one word at a time
    const header = heroHeaderRef.current;
    if (header) {
      const words = header.innerText.split(" ");
      header.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");
      
      gsap.from(".word", {
        opacity: 0,
        y: 50,
        stagger: 0.5,
        duration: 1.5,
        ease: "power3.out",
      });
    }

    // Floating image animation
    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        y: -18,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div className="hero-container">
      <div className="first-col">
        <h1 className="hero-header" ref={heroHeaderRef}>
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
        <img src={hero} alt="hero" ref={heroImageRef} />
      </div>
    </div>
  );
};

export default Hero;
