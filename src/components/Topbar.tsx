import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

interface TopbarProps {
  onDarkModeToggle: () => void;
  isDarkMode: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ onDarkModeToggle, isDarkMode }) => {
  return (
    <nav className="topbar">
      <div className="topbar-container">
        <div className="topbar-brand">Samuel Holsomback</div>
        <div className="topbar-right">
          <ul className="topbar-menu">
            <li><Link to="/" className="topbar-link">About Me</Link></li>
            <li><Link to="/experience" className="topbar-link">Experience</Link></li>
            <li><Link to="/projects" className="topbar-link">Projects</Link></li>
            <li><Link to="/education" className="topbar-link">Education</Link></li>
            <li><Link to="/contact" className="topbar-link">Contact</Link></li>
          </ul>
          <button 
            className="dark-mode-toggle"
            onClick={onDarkModeToggle}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar; 