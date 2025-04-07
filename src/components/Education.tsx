import React from 'react';
import './Education.css';
import untLogo from '../assets/NORTH_TEXAS.png';

const Education: React.FC = () => {
  const education = {
    school: "The University of North Texas",
    period: "Fall 2018 - Spring 2022",
    description: "Studied a broad range of computer science courses covering programming in Java, C++, and Python, as well as specialized topics like writing compilers, computer network security, and database administration. Gained experience in system design through coursework, including a hands-on senior project where I designed a baby tracking web application to monitor newborn health, food intake, and sleep patterns.",
    courses: [
      "Computing Foundations I",
      "Foundations of Data Structures",
      "Data Structures", "Systems Programming", "Database Systems", "Into to Compilers", "Software Engineering",
      "Computer Security", "Computer Networks","Programming Languages","Software Dev Cap I","Enterprise System Architectures","Database Admin" 
    ]
  };

  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>
      <div className="education-card">
        <div className="education-header">
          <div className="school-logo">
            <img src={untLogo} alt="UNT Logo" />
          </div>
          <div className="school-info">
            <h2 className="school-name">{education.school}</h2>
            <p className="education-period">{education.period}</p>
          </div>
        </div>
        <div className="education-content">
          <p className="education-description">{education.description}</p>
          <div className="education-courses">
            <h3>Relevant Courses</h3>
            <div className="course-tags">
              {education.courses.map((course, index) => (
                <span key={index} className="course-tag">{course}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 