import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Home.css';
import '../components/CartButtons.css';

const Home = () => {
  const { addItem } = useCart();

  const handleAddToCart = (item) => {
    addItem(item);
  };

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
            <Link to="/forecast" className="btn btn-primary">
              7-Day Forecast
            </Link>
            <Link to="/alerts" className="btn btn-secondary">
              Weather Alerts
            </Link>
            <Link to="/content" className="btn btn-secondary">
              Read Articles
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Our Services
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
          
          <div className="cart-buttons-section">
            <h3 className="cart-buttons-title">Featured Products</h3>
            <div className="cart-buttons-container">
              <button 
                className="cart-btn-primary" 
                onClick={() => handleAddToCart({
                  id: 'weather-basic',
                  name: 'Basic Weather Pack',
                  description: 'Essential weather tracking tools',
                  price: 19.99,
                  icon: '🌤️'
                })}
              >
                Add to Cart
              </button>
              <button 
                id="cart-btn-special" 
                onClick={() => handleAddToCart({
                  id: 'weather-premium',
                  name: 'Premium Weather Suite',
                  description: 'Advanced forecasting with alerts',
                  price: 49.99,
                  icon: '⚡'
                })}
              >
                Add Premium Item
              </button>
              <button 
                className="cart-btn-sibling" 
                onClick={() => handleAddToCart({
                  id: 'weather-quick',
                  name: 'Quick Weather Access',
                  description: 'Instant weather updates',
                  price: 9.99,
                  icon: '🚀'
                })}
              >
                Quick Add
              </button>
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
              <button 
                className="cart-btn-feature" 
                onClick={() => handleAddToCart({
                  id: 'realtime-weather',
                  name: 'Real-time Weather Kit',
                  description: 'Live weather data for any location',
                  price: 24.99,
                  icon: '🌡️'
                })}
              >
                Add Weather Kit
              </button>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📰</div>
              <h3>Weather Articles</h3>
              <p>Stay informed with the latest weather news and insights</p>
              <button 
                className="cart-btn-feature" 
                onClick={() => handleAddToCart({
                  id: 'weather-articles',
                  name: 'Weather Articles Subscription',
                  description: 'Access to premium weather content',
                  price: 14.99,
                  icon: '📰'
                })}
              >
                Subscribe Articles
              </button>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Multiple Cities</h3>
              <p>Explore weather conditions in different cities worldwide</p>
              <button 
                className="cart-btn-feature" 
                onClick={() => handleAddToCart({
                  id: 'city-pack',
                  name: 'Multi-City Weather Pack',
                  description: 'Weather data for 100+ cities',
                  price: 34.99,
                  icon: '🗺️'
                })}
              >
                Get City Pack
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 