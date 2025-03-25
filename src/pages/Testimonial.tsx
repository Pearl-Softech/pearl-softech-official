import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import '../styles/Testimonial.css';

const Testimonial = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const SERVER_IP = import.meta.env.VITE_SERVER_IP;
    const { id } = useParams();
    const [testimonial, setTestimonial] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTestimonial = async () => {
            try {
                const response = await fetch(`${SERVER_IP}/get-testimonial/${id}`, {
                    method: "GET",
                    headers: { 'x-api-key': API_KEY }
                });
                if (!response.ok) throw new Error('Failed to fetch testimonial');
                const data = await response.json();
                setTestimonial(data.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonial();
    }, [id]);

    if (loading) {
        return (
            <div className="loader-container" style={{ display: 'flex', width: "100%", height: "100dvh", justifyContent: 'center', alignItems: "center" }}>
                <PulseLoader color="#16364a" size={15} />
            </div>
        );
    }

    if (error) return <div style={{ color: "var(--primary-color)" }}>Error: {error}</div>;
    if (!testimonial) return <div style={{ color: "var(--primary-color)" }}>:Testimonial not found</div>;

    return (
        <div className='testimonial-container'>
            <div className="first-row">
                <div className="top">
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
                </div>
                <div className="content">
                    <div className="left">
                        <div className="title">Client Testimonial</div>
                        <div className="testimonial-text">
                            <p>{testimonial.content}</p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="title"><i className="fa-solid fa-circle-info"></i>Client Details</div>
                        <div className='info'>
                            <p><i className="fa-solid fa-building"></i><span>Company Name:</span> {testimonial.companyName}</p>
                            <p><i className="fa-solid fa-envelope"></i><span>Company Email:</span> {testimonial.companyEmail}</p>
                            <p><i className="fa-solid fa-calendar-plus"></i><span>Testimonial Date:</span> {new Date(testimonial.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="second-row">
                <div className="left"><i className="fa-solid fa-share-nodes"></i><span>Share this Testimonial</span></div>
                <div className="right">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=pearlsoftech.com/testimonial/${testimonial._id}`} target='_blank' rel="noopener noreferrer">
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                    <a href={`https://wa.me/?text=pearlsoftech.com/testimonial/${testimonial._id}`} target='_blank' rel="noopener noreferrer">
                        <i className='fa-brands fa-whatsapp'></i>
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=pearlsoftech.com/testimonial/${testimonial._id}&title=Optional%20Title&summary=Optional%20Summary&source=Optional%20Source`} target='_blank' rel="noopener noreferrer">
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a href={`mailto:?subject=Check%20this%20out&body=Check%20out%20this%20Testimonial:%20pearlsoftech.com/testimonial/${testimonial._id}`} target='_blank' rel="noopener noreferrer">
                        <i className='fa-solid fa-envelope'></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;