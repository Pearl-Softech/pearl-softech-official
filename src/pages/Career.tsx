import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import '../styles/Career.css';

const Career = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const SERVER_IP = import.meta.env.VITE_SERVER_IP;
    const { id } = useParams();
    const [career, setCareer] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [recentCareers, setRecentCareers] = useState<any[]>([]);

    useEffect(() => {
        const fetchCareer = async () => {
            try {
                const response = await fetch(`${SERVER_IP}/get-career/${id}`, {
                    method: "GET",
                    headers: { 'x-api-key': API_KEY }
                });
                if (!response.ok) throw new Error('Failed to fetch career');
                const data = await response.json();
                setCareer(data.career);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchRecentCareers = async () => {
            try {
                const response = await fetch(`${SERVER_IP}/get-careers`, {
                    method: "GET",
                    headers: { 'x-api-key': API_KEY }
                });
                if (!response.ok) throw new Error('Failed to fetch recent careers');
                const data = await response.json();
                const filteredCareers = data.careers.filter((career: any) => career._id !== id);
                const sortedCareers = filteredCareers.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                setRecentCareers(sortedCareers.slice(0, 5));
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchCareer();
        fetchRecentCareers();
    }, [id]);

    if (loading) {
        return (
            <div className="loader-container" style={{ display: 'flex', width: "100%", height: "100dvh", justifyContent: 'center', alignItems: "center" }}>
                <PulseLoader color="#16364a" size={15} />
            </div>
        );
    }

    if (error) return <div>Error: {error}</div>;
    if (!career) return <div>Career post not found</div>;

    return (
        <div className='career-container'>
            <div className="first-row">
                <div className="top">
                    <p>{career.title}</p>
                </div>
                <div className="content">
                    <div className="left">
                        <div className="description">
                            <div className="title"><i className="fa-solid fa-file-lines"></i>Description</div>
                            <p>{career.description}</p>
                        </div>

                        <div className="qualification">
                            <div className="title"><i className="fa-solid fa-graduation-cap"></i>Qualifications</div>
                            <ul style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                                {career.qualification?.map((qualification: string, index: number) => (
                                    <p key={index}><i className="fa-solid fa-circle" style={{fontSize: "8px"}}></i> {qualification}</p>
                                ))}
                            </ul>
                        </div>

                        <div className="required-skills">
                            <div className="title"><i className="fa-solid fa-wrench"></i>Required Skills</div>
                            <ul style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                                {career.requiredSkills?.map((skill: string, index: number) => (
                                    <p key={index}><i className="fa-solid fa-circle" style={{fontSize: "8px"}}></i> {skill}</p>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="right">
                        <div className="title"><i className="fa-solid fa-circle-info"></i>Job Overview</div>
                        <div className='info'>
                            <p><i className="fa-solid fa-tag"></i><span>Category:</span> {career.tags[0]}</p>
                            <p><i className="fa-solid fa-calendar-plus"></i><span>Uploaded:</span> {new Date(career.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            <p><i className="fa-solid fa-calendar-check"></i><span>Deadline:</span> {new Date(career.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            <p><i className="fa-solid fa-layer-group"></i><span>Job Level:</span> {career.jobLevel}</p>
                            <p><i className="fa-solid fa-briefcase"></i><span>Job Type:</span> {career.type}</p>
                            <p><i className="fa-solid fa-laptop-house"></i><span>Work Mode:</span> {career.workMode}</p>
                            <p><i className="fa-solid fa-money-bill-wave"></i><span>Salary:</span> {career.salary} NRS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="second-row">
                <div className="left"><i className="fa-solid fa-share-nodes"></i>Share this Career</div>
                <div className="right">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=pearlsoftech.com/career/${career._id}`} target='_blank' rel="noopener noreferrer">
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                    <a href={`https://wa.me/?text=pearlsoftech.com/career/${career._id}`} target='_blank' rel="noopener noreferrer">
                        <i className='fa-brands fa-whatsapp'></i>
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=pearlsoftech.com/career/${career._id}&title=Optional%20Title&summary=Optional%20Summary&source=Optional%20Source`} target='_blank' rel="noopener noreferrer">
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a href={`mailto:?subject=Check%20this%20out&body=Check%20out%20this%20Career:%20pearlsoftech.com/career/${career._id}`} target='_blank' rel="noopener noreferrer">
                        <i className='fa-solid fa-envelope'></i>
                    </a>
                </div>
            </div>

            <div className="third-row">
                <div className="title"><i className="fa-solid fa-clock-rotate-left"></i>RECENT CAREERS</div>
                <div className="recent-careers-wrapper">
                    {recentCareers.length > 0 ? (
                        recentCareers.map((career: any) => (
                            <Link to={`/career/${career._id}`} key={career._id}>
                                <div className="job-item">
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
                                            {new Date(career.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p style={{ color: "var(--primary-color)" }}>: No recent careers available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Career;
