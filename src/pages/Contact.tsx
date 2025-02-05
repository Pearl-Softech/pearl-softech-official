import React, { useState } from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log("Form submitted:", { name, email, message });
    };

    return (
        <div className="contact-container">
            <div className="title"><span>CONTACT</span> US</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
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
        </div>
    );
};

export default Contact;