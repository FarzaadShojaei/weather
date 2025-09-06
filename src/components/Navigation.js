import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>🌤️ WeatherApp</h2>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/weather" className="nav-link">Weather</Link>
          </li>
          <li className="nav-item">
            <Link to="/content" className="nav-link">Content</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/notfound" className="nav-link nav-link-404">404 Demo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 