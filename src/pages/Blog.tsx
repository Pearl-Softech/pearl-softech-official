import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Blog.css'

const Blog = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
  const SERVER_IP = import.meta.env.VITE_SERVER_IP;
    const { id } = useParams(); // Get the `id` from the URL
    const [blogPost, setBlogPost] = useState(null); // State to store the blog post data
    const [loading, setLoading] = useState(true); // Loading state for API call
    const [error, setError] = useState(null); // Error state in case the API fails

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const response = await fetch(`${SERVER_IP}:8080/get-blog/${id}`, {
                    method: "GET",
                    headers: {
                        'x-api-key': "abc"
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch blog post');
                }
                const data = await response.json(); // Assuming the API returns JSON data
                setBlogPost(data.blog); // Set the blog post data into the state
            } catch (error) {
                setError(error.message); // Set error message if API fails
            } finally {
                setLoading(false); // Set loading to false after the fetch completes
            }
        };

        fetchBlogPost();
    }, [id]); // Re-run when the `id` changes

    if (loading) {
        return <div>Loading...</div>;
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
                <p className="blog-date">
                    <i className="fa-solid fa-calendar-days"></i>
                    {new Date(blogPost.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
                <div className="blog-thumbnail">
                    <img src={blogPost.thumbnail} alt={blogPost.title} />
                </div>
                <div className="blog-body">{blogPost.body}</div>
            </main>
            <div className="second-row">
                <div className="left">Share this Blog</div>
                <div className="right">
                    <a href={"https://www.facebook.com/sharer/sharer.php?u=" + "pearlsoftech.com" + "/blog/" + blogPost._id} target='_blank'><i className='fa-brands fa-facebook'></i></a>
                    <a href={"https://wa.me/?text=" + "pearlsoftech.com" + "/blog/" + blogPost._id} target='_blank'><i className='fa-brands fa-whatsapp'></i></a>
                    <a href={"https://www.linkedin.com/shareArticle?mini=true&url="+ "pearlsoftech.com" + "/blog/" + blogPost._id +"&title=Optional%20Title&summary=Optional%20Summary&source=Optional%20Source"} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
                    <a href={"mailto:?subject=Check%20this%20out&body=Check%20out%20this%20Blog%3A%20" + "pearlsoftech.com" + "/blog/" + blogPost._id} target='_blank'><i className='fa-solid fa-envelope'></i></a>
                </div>
            </div>
        </div>
    );
};

export default Blog;
