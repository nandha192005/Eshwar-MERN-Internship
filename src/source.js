import React from 'react'
import Home from './home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'

import About from './about';
import Contact from './contact';
const Source = () => {
  return (
    <Router>
    <div className="App1">
      <nav>
        
            <div className="hm">
              <Link to="/home">home</Link>
            </div>
            <div className="about">
              <Link to="/about">about</Link>
            </div>
            <div className="contact">
              <Link to="/contact">contact</Link>
              </div>
              
        </nav>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          
        </Routes>
    </div>
    </Router>
  );
  
}

export default Source