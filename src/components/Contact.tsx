import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Information</h1>
      <div className="contact-section">
        <div className="contact-item">
          <h2>Phone Number</h2>
          <p>Available on Email Request</p>
        </div>
        <div className="contact-item">
          <h2>Email Address</h2>
          <p>samuelphbusiness@gmail.com</p>
        </div>
        <div className="contact-item">
          <h2>LinkedIn Profile</h2>
          <a href="https://linkedin.com/in/example-profile" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/samholsomback/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 