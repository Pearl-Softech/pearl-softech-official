import React, { useState, useEffect } from 'react';
import '../styles/Careers.css';
import CareersImg from '../assets/careers.jpeg';
import CareersInner from '../assets/careers-inner.jpg';
import { PulseLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const SERVER_IP = import.meta.env.VITE_SERVER_IP;

    const [careers, setCareers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch careers data
    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const res = await fetch(`${SERVER_IP}/get-careers`, {
                    method: 'GET',
                    headers: { 'x-api-key': API_KEY },
                });
                const data = await res.json();

                if (res.ok) {
                    setCareers(data.careers || []); // Ensure the response is properly mapped
                } else {
                    setErrorMessage('Failed to fetch careers.');
                }
            } catch (error) {
                setErrorMessage('Error fetching careers.');
            } finally {
                setLoading(false);
            }
        };

        fetchCareers();
    }, []); // Add empty dependency array to run the effect only once on component mount

    // Log the careers whenever they are updated
    useEffect(() => {
        console.log(careers);
    }, [careers]);

    return (
        <div className="careers-container">
            <div className="first-row">
                <div className="background">
                    <img src={CareersInner} alt="Careers Background" />
                </div>
                <div className="first-col">
                    <h1 className="header">Join Pearl Softech</h1>
                    <div className="para">
                        <p className='quote'>Your chance to be a part of Something Bigger</p>
                        <br />
                        At PearlsOfTech, we are driven by innovation and excellence. We offer a dynamic work environment where creativity meets technology, empowering professionals to build cutting-edge solutions.
                        <br />
                        <br />
                        Join our team to collaborate with industry experts, enhance your skills, and shape the future of technology. Explore exciting career opportunities with us today!
                    </div>
                </div>
                <div className="second-col">
                    <img src={CareersImg} alt="Careers" />
                </div>
            </div>

            <div className="second-row">
                <div className="header"><i className='fa-solid fa-briefcase'></i>AVAILABLE VACANCIES</div>

                {loading ? (
                    <PulseLoader color='var(--primary-color)' />
                ) : errorMessage ? (
                    <div>{errorMessage}</div>
                ) : careers.length === 0 ? (
                    <div className="no-job">
                        <i className="fa-solid fa-briefcase"></i>
                        <p>No vacany Available</p>
                    </div>
                ) : (
                    <div className="job-list">
                        {careers.map((career) => (
                            <Link to={'/career/'+ career._id}>
                                <div key={career._id} className="job-item">
                                    <h3>{career.title}</h3>
                                    <div className="info">
                                        <div className="tags">
                                            <p>{career.tags[0]}</p>
                                            <p>{career.type}</p>
                                            <p>{career.workMode}</p>
                                        </div>
                                        <div className="deadline">
                                            <i className="fa-solid fa-stopwatch"></i>
                                            <p>Deadline:</p>
                                            {new Date(career.deadline).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Careers;
