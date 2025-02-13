import React, { useState } from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", { name, email, phone, subject, message });
    };

    return (
        <div className="contact-container">
            <div className="title"><span>CONTACT</span> US</div>
            <div className="content">
                {/* Form Section */}
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            value={name}
                            placeholder="Company Name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Business Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            placeholder="Phone Number"
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            placeholder="Subject"
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="message"
                            value={message}
                            placeholder="Message"
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>

                {/* Company Information Section */}
                <div className="company-info">
                    <div className="header">HEAD OFFICE</div>
                    <div className="body">
                        <div>Pearl Softech Pvt. Ltd.</div>
                        <div>Kathmandu, Maitidevi</div>
                        <div><i className="fa-solid fa-phone"></i> 9766528549</div>
                        <div><i className="fa-solid fa-envelope"></i> pearlsoftechorg@gmail.com</div>
                        <div className="socials">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Location Section */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.80936314107623!2d85.32498122063028!3d27.687946067280514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9f5f88077%3A0x985bbdfe5871231!2sRosebud%20School%20Junior%20Block!5e0!3m2!1sen!2snp!4v1739374458360!5m2!1sen!2snp"
                width="100%"
                height="450"
                style={{ borderRadius: "5px", border: "none" }}
                title="Map Location"
            ></iframe>
        </div>
    );
};

export default Contact;
