import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./home";
import About from "./about";
import Skills from "./skill";
import Project from './project';
import Contact from "./contact";


function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/home" className="nav-link">
                home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                about me
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="nav-link">
                Skills
              </Link>
            </li>
            <li>
              <Link to ='/project' className="nav-link">
              project</Link>
            </li>
            
           <li>
            <Link to='/contact' className="nav-link">Contact</Link>
           </li>
            
          </ul>
          
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Skills />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          
         
          
      
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
