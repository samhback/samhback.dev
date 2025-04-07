import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const jobs = [
    {
      title: "Software Engineer",
      company: "American Airlines",
      period: "July 2022 - Current",
      promotions: [
        {
          date: "November 2024",
          title: "Promoted from Associate Software Engineer"
        }
      ],
      description: [
        "Developed and maintained CI/CD pipelines, optimizing deployment processes for improved efficiency and reliability.",
        "Upgraded and modernized Spring and Spring Boot applications, enhancing performance and maintainability.",
        "Led an initiative to integrate GitHub Copilot, presenting best practices and training the team to streamline development workflows.",
        "Spearheading efforts to develop an API integration for a major LLM, driving AI adoption within the company.",
        "Designed and implemented features for organizing airplanes, airports, and crew, optimizing scheduling and operational efficiency for the world's largest airline."
      ],
      skills: ["Java", "Spring Boot", "Azure", "Agile Development", "Jenkins", "Git", "GitHub Actions", "CI/CD", "Python", "Selenium","Angular", 
        "Prompt Engineering", "Copilot", "Linux", "Debugging", "REST APIs", "SQL", "Terraform", "Patching Security Vulnerabilities"]
    },
    {
      title: "Math Instructor",
      company: "Mathnasium",
      period: "July 2020 - July 2022",
      description: [
        "Provided individualized math instruction to students ranging from 1st grade to 12th grade, including calculus.",
        "Adapted teaching methods to accommodate different learning styles, ensuring each student grasped mathematical concepts effectively.",
        "Developed and reinforced problem-solving strategies, strengthening both students' and my own analytical skills.",
        "Created a supportive and engaging learning environment, fostering confidence in students struggling with math.",
        "Gained expertise in multiple teaching approaches, enhancing my communication, patience, and adaptability."
      ],
      skills: ["Problem Solving","Mathematics Education", "Student Assessment", "Communication", "Mentoring", "Teamwork"]
    }
  ];

  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-header">
              <div className="job-title-container">
                <h2 className="job-title">{job.title}</h2>
                {job.promotions && job.promotions.map((promotion, pIndex) => (
                  <div key={pIndex} className="promotion-indicator">
                    <div className="promotion-arrow">↗</div>
                    <div className="promotion-info">
                      <span className="promotion-title">{promotion.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="job-company">{job.company}</h3>
              <p className="job-period">{job.period}</p>
            </div>
            <div className="job-description">
              {Array.isArray(job.description) ? (
                <ul className="job-description-list">
                  {job.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p>{job.description}</p>
              )}
            </div>
            <div className="job-skills">
              <h4>Skills:</h4>
              <div className="skills-tags">
                {job.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 