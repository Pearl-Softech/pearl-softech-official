import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blogs.css';

function Blogs() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const SERVER_IP = import.meta.env.VITE_SERVER_IP;
  const [blogs, setBlogs] = useState([]);
  const [loadingDots, setLoadingDots] = useState('');

  // Dots animation effect for loading
  useEffect(() => {
    const dotInterval = setInterval(() => {
      setLoadingDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(dotInterval);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${SERVER_IP}/get-blogs`, {
          method: 'GET',
          headers: {
            'x-api-key': API_KEY,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setBlogs(data.blogs);
        } else {
          console.error('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  });

  return (
    <div className="blogs-container">
      <h1 className="blog-title">OUR BLOGS</h1>
      {
        blogs.length !=0?
        null
        :
        <div style={{color: "var(--primary-color)", display:'flex', width:"100%", height: "65dvh", justifyContent:'center', alignItems: "center"}}>
          <h2>LOADING{loadingDots}</h2>
        </div>
      }
      <div className="blog-flex-box">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <img src={blog.thumbnail} alt={blog.title} className="blog-thumbnail" />
            <h2 className="blog-card-title">{blog.title}</h2>
            <p className="blog-date">
              <i className="fa-solid fa-calendar-days"></i>
              {new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>

            <p className="blog-body">
              {blog.body.length > 150 ? blog.body.substring(0, 150) + '...' : blog.body}
            </p>
            <Link to={`/blog/${blog._id}`} className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
