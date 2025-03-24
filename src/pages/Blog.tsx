import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import '../styles/Blog.css';

const Blog = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const SERVER_IP = import.meta.env.VITE_SERVER_IP;
    const { id } = useParams();
    const [blogPost, setBlogPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const response = await fetch(`${SERVER_IP}/get-blog/${id}`, {
                    method: "GET",
                    headers: {
                        'x-api-key': API_KEY
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch blog post');
                }
                const data = await response.json();
                setBlogPost(data.blog);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const incrementViews = async () => {
            try {
                await fetch(`${SERVER_IP}/blog/increment-views/${id}`, {
                    method: "PUT",
                    headers: {
                        'x-api-key': API_KEY
                    }
                });
            } catch (err) {
                console.log(err);
            }
        }

        const fetchRecentBlogs = async () => {
            try {
                const response = await fetch(`${SERVER_IP}/get-blogs`, {
                    method: "GET",
                    headers: {
                        'x-api-key': API_KEY
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch recent blogs');
                }
                const data = await response.json();
                // Filter out the current blog post
                const filteredBlogs = data.blogs.filter(blog => blog._id !== id);
                // Sort blogs by date and take the latest 5
                const sortedBlogs = filteredBlogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setRecentBlogs(sortedBlogs.slice(0, 5));
            } catch (error) {
                setError(error.message);
            }
        }

        fetchBlogPost();
        incrementViews();
        fetchRecentBlogs();
    }, [id]);

    if (loading) {
        return (
            <div className="loader-container" style={{ display: 'flex', width: "100%", height: "100dvh", justifyContent: 'center', alignItems: "center" }}>
                <PulseLoader color="#16364a" size={15} />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!blogPost) {
        return <div>Blog post not found</div>;
    }

    return (
        <div className='blog-container'>
            <main>
                <h1 className="blog-card-title">{blogPost.title}</h1>
                <div className='date-views-wrapper'>
                    <p className="blog-date">
                        <i className="fa-solid fa-calendar-days"></i>
                        {new Date(blogPost.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                    <p className='blog-views'>
                        <i className='fa-solid fa-eye'></i>
                        {blogPost.views + " Views"}
                    </p>
                </div>
                <div className="blog-thumbnail">
                    <img src={blogPost.thumbnail} alt={blogPost.title} />
                </div>
                <div className="blog-body">{blogPost.body}</div>
            </main>
            <div className="second-row">
                <div className="left"><i className="fa-solid fa-share-nodes"></i><span>Share this Blog</span></div>
                <div className="right">
                    <a href={"https://www.facebook.com/sharer/sharer.php?u=" + "pearlsoftech.com" + "/blog/" + blogPost._id} target='_blank'><i className='fa-brands fa-facebook'></i></a>
                    <a href={"https://wa.me/?text=" + "pearlsoftech.com" + "/blog/" + blogPost._id} target='_blank'><i className='fa-brands fa-whatsapp'></i></a>
                    <a href={"https://www.linkedin.com/shareArticle?mini=true&url=" + "pearlsoftech.com" + "/blog/" + blogPost._id + "&title=Optional%20Title&summary=Optional%20Summary&source=Optional%20Source"} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
                    <a href={"mailto:?subject=Check%20this%20out&body=Check%20out%20this%20Blog%3A%20" + "pearlsoftech.com" + "/blog/" + blogPost._id} target='_blank'><i className='fa-solid fa-envelope'></i></a>
                </div>
            </div>
            <div className="third-row">
                <div className="title"><i className="fa-solid fa-clock-rotate-left"></i>RECENT BLOGS</div>
                <div className="recent-blogs-wrapper">
                    {recentBlogs.length > 0 ? (
                        recentBlogs.map((blog) => (
                            <Link to={"/blog/" + blog._id} key={blog._id}>
                                <div className="recent-blog">
                                    <div className='recent-blog-thumbnail'>
                                        <img src={blog.thumbnail} alt="" />
                                    </div>
                                    <div style={{display:'flex', flexDirection:"column", gap: '8px'}}>
                                        <h3>{blog.title}</h3>
                                        <div className='date-views-wrapper'>
                                            <p className="blog-date">
                                                <i className="fa-solid fa-calendar-days"></i>
                                                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                            <p className='blog-views'>
                                                <i className='fa-solid fa-eye'></i>
                                                {blog.views + " Views"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p style={{color: "var(--primary-color)"}}>: No recent blogs available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
