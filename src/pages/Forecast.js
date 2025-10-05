import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Forecast.css';

const Forecast = () => {
  const [selectedCity, setSelectedCity] = useState('New York');
  const [forecastData] = useState([
    { day: 'Today', temp: '22°C', condition: 'Sunny', icon: '☀️', humidity: '45%', wind: '12 km/h' },
    { day: 'Tomorrow', temp: '18°C', condition: 'Cloudy', icon: '☁️', humidity: '60%', wind: '8 km/h' },
    { day: 'Wednesday', temp: '15°C', condition: 'Rainy', icon: '🌧️', humidity: '85%', wind: '15 km/h' },
    { day: 'Thursday', temp: '20°C', condition: 'Partly Cloudy', icon: '⛅', humidity: '55%', wind: '10 km/h' },
    { day: 'Friday', temp: '25°C', condition: 'Sunny', icon: '☀️', humidity: '40%', wind: '6 km/h' },
    { day: 'Saturday', temp: '23°C', condition: 'Cloudy', icon: '☁️', humidity: '65%', wind: '9 km/h' },
    { day: 'Sunday', temp: '19°C', condition: 'Rainy', icon: '🌧️', humidity: '80%', wind: '18 km/h' }
  ]);

  const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Toronto'];

  return (
    <div className="forecast">
      <div className="container">
        <div className="forecast-header">
          <h1>7-Day Weather Forecast</h1>
          <p>Detailed weather predictions for the week ahead</p>
        </div>

        <div className="city-selector">
          <h2>Select City</h2>
          <div className="city-buttons">
            {cities.map(city => (
              <button
                key={city}
                className={`city-btn ${selectedCity === city ? 'active' : ''}`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="forecast-content">
          <h2>Forecast for {selectedCity}</h2>
          <div className="forecast-grid">
            {forecastData.map((day, index) => (
              <div key={index} className="forecast-card">
                <div className="forecast-day">{day.day}</div>
                <div className="forecast-icon">{day.icon}</div>
                <div className="forecast-temp">{day.temp}</div>
                <div className="forecast-condition">{day.condition}</div>
                <div className="forecast-details">
                  <div className="detail-item">
                    <span className="detail-label">Humidity:</span>
                    <span className="detail-value">{day.humidity}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Wind:</span>
                    <span className="detail-value">{day.wind}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="forecast-tips">
          <h2>Weather Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">☂️</div>
              <h3>Rainy Days</h3>
              <p>Don't forget your umbrella and waterproof jacket for Wednesday and Sunday.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🌞</div>
              <h3>Sunny Days</h3>
              <p>Perfect weather for outdoor activities on Friday. Apply sunscreen!</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🧥</div>
              <h3>Temperature</h3>
              <p>Layer your clothing as temperatures will vary throughout the week.</p>
            </div>
          </div>
        </div>

        <div className="quick-links">
          <h2>Quick Navigation</h2>
          <div className="nav-buttons">
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/weather" className="btn btn-secondary">Current Weather</Link>
            <Link to="/alerts" className="btn btn-secondary">Weather Alerts</Link>
            <Link to="/contact" className="btn btn-secondary">Contact</Link>
            <Link to="/about" className="btn btn-secondary">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
