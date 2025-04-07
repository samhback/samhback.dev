import React from 'react';
import './About.css';
import meImage from '../assets/me.jpg';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-container">
          <img 
            src={meImage} 
            alt="Profile" 
            className="about-image"
          />
          <div className="location-indicator">
            <span className="location-icon">📍</span>
            <span className="location-text">Fort Worth, Texas</span>
          </div>
        </div>
        <div className="about-text">
          <h1 className="about-title">About Me</h1>
          <div className="about-section">
            <h2>Professional Background</h2>
            <p>
            I graduated from the University of North Texas in 2022 with a degree in Computer Science. Shortly after graduation, I began my career as a consultant with Brooksource, where I worked on-site at American Airlines. After several months in that role, I was brought on full-time by American Airlines as an Associate Developer. In November 2024, I was promoted to Developer, reflecting my continued growth and contributions to the team.
            </p>
          </div>
          <div className="about-section">
            <h2>Current Focus</h2>
            <p>
            I work in the Operations division at American Airlines, where our team develops features for applications that support the coordination of aircraft, crew, and airport logistics. I have a strong interest in artificial intelligence and am continually exploring ways to integrate AI solutions into our workflows to enhance efficiency and decision-making. I take a hands-on approach to problem-solving and contribute across the tech stack, working on both front-end and back-end development as needed.
            </p>
          </div>
          <div className="about-section">
            <h2>Technical Expertise</h2>
            <p>
            I have experience across both front-end and back-end development, with a strong foundation in Java and Angular. My work has included making enhancements to SQL databases as well as working with NoSQL solutions within a Data Lake environment. I’ve worked extensively with cloud platforms, including Microsoft Azure and AWS. Throughout my career, I’ve had the opportunity to contribute to a wide range of applications, leveraging diverse programming languages, frameworks, and technologies to deliver scalable and efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 