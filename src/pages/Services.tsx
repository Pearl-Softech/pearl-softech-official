import "../styles/Services.css";
import software from "../assets/software-development.jpg";
import cloud from "../assets/cloud-services.jpg";
import cyber from "../assets/cyber-security.jpg";
import penetration from "../assets/penetration-testing.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <div className="title"><span>OUR</span> SERVICES</div>
      <div className="services-content">
        <div className="service">
          <img
            className="service-image"
            src={software} // Replace with actual path
            alt="Software Development"
          />

          <div className="service-info">
            <h3><span>Software</span> Development</h3>
            <p>
              We create custom software solutions tailored to meet your unique
              business needs. From web and mobile applications to enterprise
              software, our team of expert developers ensures your projects are
              scalable, secure, and built to drive growth. We follow an agile
              development approach to deliver high-quality solutions on time and
              within budget.
            </p>
          </div>
        </div>

        <div className="service">
          <img
            className="service-image"
            src={cloud} // Replace with actual path
            alt="Cloud Services"
          />

          <div className="service-info">
            <h3><span>Cloud</span> Services</h3>
            <p>
              Embrace the power of the cloud with our comprehensive cloud
              services. Whether you're looking to migrate your business to the
              cloud, manage cloud resources, or optimize your infrastructure, we
              are here to help. Our cloud solutions ensure seamless integration,
              scalability, enhanced performance, and cost-effectiveness. We
              partner with leading cloud providers to deliver secure and reliable
              cloud infrastructure tailored to your specific needs.
            </p>
          </div>
        </div>

        <div className="service">
          <img
            className="service-image"
            src={cyber} // Replace with actual path
            alt="Cyber Security"
          />

          <div className="service-info">
            <h3><span>Cyber</span> Security</h3>
            <p>
              Protect your digital assets with our robust cybersecurity services.
              We offer a range of services including threat detection, risk
              management, and incident response to safeguard your business from
              cyber threats. Our cybersecurity experts use the latest
              technologies to provide comprehensive protection. We also offer
              security awareness training to help your team recognize and respond
              to potential threats effectively.
            </p>
          </div>
        </div>

        <div className="service">
          <img className="service-image"
            src={penetration} // Replace with actual path
            alt="Penetration Testing"
          />

          <div className="service-info">
            <h3><span>Penetration</span> Testing</h3>
            <p>
              Identify vulnerabilities before they become threats with our
              thorough penetration testing services. Our skilled ethical hackers
              simulate real-world cyber-attacks to uncover weaknesses in your
              systems and networks. We provide detailed reports with actionable
              insights and remediation suggestions to improve your overall
              security posture, helping you proactively mitigate risks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
