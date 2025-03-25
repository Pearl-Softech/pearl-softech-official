import React, { useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import '../styles/Testimonials.css'; // Include styles for testimonials
import TestimonialsImg from '../assets/testimonials.jpg';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Testimonials: React.FC = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const SERVER_IP = import.meta.env.VITE_SERVER_IP;

    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [newTestimonial, setNewTestimonial] = useState({
        profile: '', // Base64 string for profile image
        userName: '',
        companyName: '',
        position: '',
        companyEmail: '',
        rating: 0, // Rating should be a number
        content: '', // Longer content to meet the 2500 character requirement
    });
    const [showForm, setShowForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); // Track submission state
    const [isSubmitting, setIsSubmitting] = useState(false); // Track loading during submission

    // Fetch testimonials data
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch(`${SERVER_IP}/get-testimonials`, {
                    method: 'GET',
                    headers: { 'x-api-key': API_KEY },
                });
                const data = await res.json();

                if (res.ok) {
                    setTestimonials(data.data || []);
                } else {
                    setErrorMessage('Failed to fetch testimonials.');
                }
            } catch (error) {
                setErrorMessage('Error fetching testimonials.');
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewTestimonial({
            ...newTestimonial,
            [name]: value,
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewTestimonial((prevState) => ({
                    ...prevState,
                    profile: reader.result as string,
                }));
            };
            reader.readAsDataURL(file); // Convert the image to Base64
        }
    };

    // Handle rating change when star is clicked
    const handleRatingChange = (rating: number) => {
        setNewTestimonial((prevState) => ({
            ...prevState,
            rating: rating, // Ensure this is a number
        }));
    };

    // Submit new testimonial
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check if the content length is sufficient (minimum 2500 characters)
        if (newTestimonial.content.length < 2500) {
            Swal.fire({
                title: 'Error!',
                text: 'Testimonial content must be at least 2500 characters.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return; // Stop the form submission
        }

        // Proceed with form submission if the content length is sufficient
        setIsSubmitting(true); // Start the loading process
        try {
            const res = await fetch(`${SERVER_IP}/add-testimonial`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                },
                body: JSON.stringify(newTestimonial),
            });

            if (res.ok) {
                const data = await res.json();
                if (data.success) {
                    setTestimonials([data.testimonial, ...testimonials]);
                    setNewTestimonial({
                        profile: '',
                        userName: '',
                        companyName: '',
                        position: '',
                        companyEmail: '',
                        rating: 0,
                        content: '',
                    });
                    setErrorMessage('');
                    setShowForm(false); // Hide the form after successful submission
                    setFormSubmitted(true); // Set form as submitted

                    // Show SweetAlert2 success message
                    Swal.fire({
                        title: 'Success!',
                        text: 'Testimonial submitted successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });

                    // Refresh the page after submission
                    window.location.reload();
                } else {
                    setErrorMessage('Failed to add testimonial.');
                }
            }
        } catch (error) {
            setErrorMessage('Error submitting testimonial.');
        } finally {
            setIsSubmitting(false); // End the loading process
        }
    };


    // Render stars based on the rating
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`fa fa-star ${i <= rating ? 'star-selected' : 'star-unselected'}`}
                    onClick={() => handleRatingChange(i)}
                ></i>
            );
        }
        return stars;
    };

    testimonials.map((data)=>{
        console.log(data._id);
    });

    return (
        <div className="testimonials-container">
            <div className="first-row">
                <div className="background">
                    <img src={TestimonialsImg} alt="Testimonials" />
                </div>
                <div className="first-col">
                    <h1 className="header">What Our Clients Say</h1>
                    <div className="para">
                        <p className="quote">Your Feedback Drives Us Forward</p>
                        <br />
                        At Pearl Softech, we value the feedback of our clients. Hear what they have to say about working with us!
                    </div>
                </div>
            </div>

            <div className="second-row">
                <button
                    onClick={() => setShowForm(prev => !prev)}
                    className="add-testimonial-btn"
                    aria-label={showForm ? "Close Testimonial Form" : "Add Testimonial"}
                >
                    {showForm ? (
                        <i className="fa fa-times"></i>  // Cross icon
                    ) : (
                        <i className="fa fa-plus"></i>  // Plus icon
                    )}
                </button>

                {/* Conditionally show testimonials or form */}
                {formSubmitted ? (
                    <div style={{ color: "var(--primary-color)", height: "30dvh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        Testimonial submitted successfully!
                    </div>
                ) : showForm ? (
                    <div className="form-container">
                        <h3><i className="fa-solid fa-address-card"></i>ADD YOUR TESTIMONIAL</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="profile"><i className="fa fa-image"></i>Profile Picture</label>
                                <input
                                    type="file"
                                    id="profile"
                                    name="profile"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required
                                />
                                {newTestimonial.profile && (
                                    <div className="image-preview">
                                        <img src={newTestimonial.profile} alt="Profile Preview" className="preview-image" />
                                    </div>
                                )}
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <label htmlFor="userName"><i className="fa fa-user"></i>Your Name</label>
                                    <input
                                        type="text"
                                        id="userName"
                                        name="userName"
                                        value={newTestimonial.userName}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companyName"><i className="fa fa-building"></i>Company Name</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={newTestimonial.companyName}
                                        onChange={handleChange}
                                        placeholder="Enter company name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <label htmlFor="position"><i className="fa fa-briefcase"></i>Position</label>
                                    <input
                                        type="text"
                                        id="position"
                                        name="position"
                                        value={newTestimonial.position}
                                        onChange={handleChange}
                                        placeholder="Enter your position"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companyEmail"><i className="fa fa-envelope"></i>Company Email</label>
                                    <input
                                        type="email"
                                        id="companyEmail"
                                        name="companyEmail"
                                        value={newTestimonial.companyEmail}
                                        onChange={handleChange}
                                        placeholder="Enter company email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating"><i className="fa fa-heart"></i>Rating</label>
                                <div className="rating-stars">
                                    {renderStars(newTestimonial.rating)}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="content"><i className="fa fa-comment"></i>Testimonial Content</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={newTestimonial.content}
                                    onChange={handleChange}
                                    placeholder="Write your testimonial here..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? <PulseLoader color='white' /> : 'Submit Testimonial'}
                            </button>
                        </form>
                    </div>
                ) : loading ? (
                    <PulseLoader color="var(--primary-color)" style={{ height: "30dvh", display: "flex", alignItems: "center", justifyContent: "center" }} />
                ) : errorMessage ? (
                    <div style={{ color: "var(--primary-color)", height: "30dvh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {errorMessage}
                    </div>
                ) : testimonials.length === 0 ? (
                    <div style={{ color: "var(--primary-color)", height: "30dvh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        :No testimonials available
                    </div>
                ) : (
                    <div className="testimonial-list">
                        {testimonials.map((testimonial) => (
                            <Link to={'/testimonial/' + testimonial._id} key={testimonial._id}>
                                <div className="testimonial-item">
                                    <div className="user-details">
                                        <div className="profile">
                                            <img src={testimonial.profile} alt={testimonial.userName} />
                                        </div>
                                        <div className="user-info">
                                            <h3>{testimonial.userName}</h3>
                                            <p>{testimonial.position}, {testimonial.companyName}</p>
                                            <div className="rating">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <i
                                                        key={index}
                                                        className={`fa fa-star ${index < testimonial.rating ? 'star-selected' : 'star-unselected'}`}
                                                    ></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        {testimonial.content.length > 130
                                            ? `${testimonial.content.slice(0, 130)}...`
                                            : testimonial.content}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Testimonials;
