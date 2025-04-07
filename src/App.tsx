import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Topbar from './components/Topbar'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import About from './components/About'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark-mode')
  }

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <Topbar onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
