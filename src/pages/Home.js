import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import '../components/CartButtons.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to WeatherApp</h1>
          <p className="hero-subtitle">
            Your ultimate destination for accurate weather forecasts, climate insights, and weather-related content.
          </p>
          <div className="hero-buttons">
            <Link to="/weather" className="btn btn-primary">
              Check Weather
            </Link>
            <Link to="/content" className="btn btn-secondary">
              Read Articles
            </Link>
          </div>
          
          <div className="cart-buttons-section">
            <h3 className="cart-buttons-title">Featured Products</h3>
            <div className="cart-buttons-container">
              <button className="cart-btn-primary" onClick={() => {}}>Add to Cart</button>
              <button id="cart-btn-special" onClick={() => {}}>Add Premium Item</button>
              <button className="cart-btn-sibling" onClick={() => {}}>Quick Add</button>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="weather-icon">
            <span className="sun">☀️</span>
            <span className="cloud">☁️</span>
            <span className="rain">🌧️</span>
            <span className="snow">❄️</span>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌡️</div>
              <h3>Real-time Weather</h3>
              <p>Get accurate weather information for cities around the world</p>
              <button className="cart-btn-feature" onClick={() => {}}>Add Weather Kit</button>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📰</div>
              <h3>Weather Articles</h3>
              <p>Stay informed with the latest weather news and insights</p>
              <button className="cart-btn-feature" onClick={() => {}}>Subscribe Articles</button>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Multiple Cities</h3>
              <p>Explore weather conditions in different cities worldwide</p>
              <button className="cart-btn-feature" onClick={() => {}}>Get City Pack</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 