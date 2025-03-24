import React, { useState, useEffect } from 'react';
import '../styles/Admin.css';
import { PulseLoader } from 'react-spinners';

const Admin = () => {

  useEffect(() => {
    // Start redirection immediately
    window.location.href = 'http://54.161.35.160:5174/';
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
