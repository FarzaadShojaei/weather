import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Weather.css';
import '../components/CartButtons.css';

const Weather = () => {
  const { addItem } = useCart();

  const handleAddToCart = (item) => {
    addItem(item);
  };

  const cities = [
    {
      name: 'New York',
      country: 'USA',
      temperature: '22°C',
      condition: 'Sunny',
      icon: '☀️',
      description: 'Clear sky with gentle breeze'
    },
    {
      name: 'London',
      country: 'UK',
      temperature: '15°C',
      condition: 'Cloudy',
      icon: '☁️',
      description: 'Overcast with light winds'
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      temperature: '28°C',
      condition: 'Partly Cloudy',
      icon: '⛅',
      description: 'Warm with scattered clouds'
    },
    {
      name: 'Sydney',
      country: 'Australia',
      temperature: '19°C',
      condition: 'Rainy',
      icon: '🌧️',
      description: 'Light rain expected'
    },
    {
      name: 'Paris',
      country: 'France',
      temperature: '18°C',
      condition: 'Foggy',
      icon: '🌫️',
      description: 'Dense fog in the morning'
    },
    {
      name: 'Dubai',
      country: 'UAE',
      temperature: '35°C',
      condition: 'Hot',
      icon: '🔥',
      description: 'Very hot and dry'
    },
    {
      name: 'Moscow',
      country: 'Russia',
      temperature: '8°C',
      condition: 'Snow',
      icon: '❄️',
      description: 'Light snowfall expected'
    },
    {
      name: 'Mumbai',
      country: 'India',
      temperature: '32°C',
      condition: 'Humid',
      icon: '💧',
      description: 'High humidity levels'
    }
  ];

  return (
    <div className="weather">
      <div className="weather-header">
        <div className="container">
          <h1>Weather Forecast</h1>
          <p>Click on any city to view detailed weather information</p>
          
          <div className="cart-buttons-section">
            <h3 className="cart-buttons-title">Weather Packages</h3>
            <div className="cart-buttons-container">
              <button 
                data-cart="add" 
                onClick={() => handleAddToCart({
                  id: 'weather-plan-basic',
                  name: 'Basic Weather Plan',
                  description: 'Essential weather tracking for daily use',
                  price: 12.99,
                  icon: '☁️'
                })}
              >
                Add Weather Plan
              </button>
              <button 
                className="cart-btn-hover" 
                onClick={() => handleAddToCart({
                  id: 'premium-forecast',
                  name: 'Premium Forecast',
                  description: 'Extended 15-day forecasts with hourly data',
                  price: 29.99,
                  icon: '🌟'
                })}
              >
                premium forecast
              </button>
              <button 
                className="cart-btn-universal" 
                onClick={() => handleAddToCart({
                  id: 'ultimate-package',
                  name: 'Ultimate Weather Package',
                  description: 'All features + API access + alerts',
                  price: 99.99,
                  icon: '💎'
                })}
              >
                Ultimate Package
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="weather-content">
        <div className="container">
          <div className="cities-grid">
            {cities.map((city, index) => (
              <div key={index} className="city-card" style={{textDecoration: 'none', color: 'inherit'}}>
                <Link 
                  to={`/weather/${city.name.toLowerCase()}`} 
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <div className="city-icon">{city.icon}</div>
                  <div className="city-info">
                    <h3 className="city-name">{city.name}</h3>
                    <p className="city-country">{city.country}</p>
                    <div className="city-temperature">{city.temperature}</div>
                    <p className="city-condition">{city.condition}</p>
                    <p className="city-description">{city.description}</p>
                  </div>
                </Link>
                <div className="button-group">
                  <button 
                    onClick={() => handleAddToCart({
                      id: `${city.name.toLowerCase()}-data`,
                      name: `${city.name} Weather Data`,
                      description: `Detailed weather information for ${city.name}`,
                      price: 7.99,
                      icon: city.icon
                    })}
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => handleAddToCart({
                      id: `${city.name.toLowerCase()}-premium`,
                      name: `${city.name} Premium Access`,
                      description: `Full weather suite for ${city.name}`,
                      price: 15.99,
                      icon: city.icon
                    })}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="quick-links">
        <div className="container">
          <h2>Quick Navigation</h2>
          <div className="nav-buttons">
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/forecast" className="btn btn-secondary">7-Day Forecast</Link>
            <Link to="/alerts" className="btn btn-secondary">Weather Alerts</Link>
            <Link to="/services" className="btn btn-secondary">Our Services</Link>
            <Link to="/about" className="btn btn-secondary">About</Link>
            <Link to="/contact" className="btn btn-secondary">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather; 