import "../styles/Services.css";
import digital from "../assets/images/digital-marketing.jpg";
import software from "../assets/images/software-development.jpg";
import cloud from "../assets/images/cloud-services.jpg";
import cyber from "../assets/images/cyber-security.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <div className="title">
        <span>OUR</span> SERVICES
      </div>
      <div className="services-content">
        <div className="service">
          <img
            className="service-image"
            src={digital}
            alt="Digital Marketing"
          />
          <div className="service-info">
            <h3><span>Digital</span> Marketing</h3>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>

        <div className="service">
          <img
            className="service-image"
            src={software}
            alt="Software Development"
          />
          <div className="service-info">
            <h3><span>Software</span> Development</h3>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>

        <div className="service">
          <img
            className="service-image"
            src={cloud}
            alt="Cloud Services"
          />
          <div className="service-info">
            <h3><span>Cloud</span> Services</h3>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>

        <div className="service">
          <img
            className="service-image"
            src={cyber}
            alt="Cyber Security"
          />
          <div className="service-info">
            <h3><span>Cyber</span> Security</h3>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
