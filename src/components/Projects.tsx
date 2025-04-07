import React from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Autogen Studio Programming Team",
      description: "Programming team of AI agents powered by ChatGPT4, allows me to give a task, which is then delegated by a manager agent to programming agents, who then have their work checked by optimization agents. Essentially an entire team of AI.",
      technologies: ["Python", "ChatGPT4", "AI Agents", "OpenAI API"]
    },
    {
      title: "Discord Bot",
      description: "Discord bot that uses replit, allows users to run commands to store information that can be accessed by my Roblox games through flask. Also implement selenium in Python to allow users to perform automated tasks on the website.",
      technologies: ["Python", "Discord API", "Flask", "Selenium", "Replit"]
    },
    {
      title: "Python Deployment Pipeline",
      description: "Deployment pipeline made in Python that connects to vms and runs bash scripts to speed up my personal deployments at American Airlines.",
      technologies: ["Python", "Bash", "VM Management", "CI/CD"]
    },
    {
      title: "Water Park! (On Roblox)",
      description: "Game scripted (front & back end) in Lua, modeled, and advertised by me. The game received 24 million visits, and was featured in the 'Roblox Metaverse' event. This was my first experience with high visibility development and debugging.",
      technologies: ["Lua", "Roblox Studio", "Game Development", "3D Modeling"]
    },
    {
      title: "AI powered NPCs",
      description: "Wanted to toy with the concept of having artificial intelligence NPC's that you can chat with. Basically give the character a background with a description, and then ChatGPT responds as if it were that character.",
      technologies: ["Python", "ChatGPT", "AI", "Game Development"]
    },
    {
      title: "Velma Tag Office",
      description: "React project that gives information for a tag office in Velma, Oklahoma.",
      technologies: ["React", "CSS", "JavaScript"]
    },
    {
      title: "My Personal Website",
      description: "This was my first experience with React, and helped me learn how to stylize with CSS & Deploy with Apache tomcat to a domain I own.",
      technologies: ["React", "CSS", "Apache Tomcat", "Web Development"]
    },
    {
      title: "Job Description-Resume AI Comparison",
      description: "Leverages Selenium in Python to pull jobs from Indeed, read the descriptions, and then prompt ChatGPT to compare the job descriptions to my resume to see if I could be a good fit. Instead of reading the descriptions, it will give me the links of descriptions that fit me.",
      technologies: ["Python", "Selenium", "ChatGPT", "Web Scraping"]
    },
    {
      title: "Senior Project React App",
      description: "Baby tracker application that allows mothers to track their infant's health. Written in React, DB in MongoDB.",
      technologies: ["React", "MongoDB", "Node.js", "Healthcare"]
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              <h3>Technologies Used:</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 