import React, { useState, useEffect } from 'react';
import '../styles/Admin.css';
import { PulseLoader } from 'react-spinners';

const Admin = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Start redirection immediately
    window.location.href = 'http://54.161.35.160:5174/';

    // Optional: Dots animation (won't be visible because of instant redirect)
    const dotInterval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    return () => clearInterval(dotInterval);
  }, []);

  return (
    <div className="admin-container">
      <PulseLoader
        color='#16364a'
      />
    </div>
  );
};

export default Admin;
