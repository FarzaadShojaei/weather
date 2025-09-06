import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CityWeather.css';
import '../components/CartButtons.css';

const CityWeather = () => {
  const { cityName } = useParams();
  const { addItem } = useCart();

  const handleAddToCart = (item) => {
    addItem(item);
  };
  
  // Sample weather data for cities
  const cityData = {
    'new york': {
      name: 'New York',
      country: 'USA',
      currentTemp: '22°C',
      condition: 'Sunny',
      icon: '☀️',
      humidity: '65%',
      windSpeed: '15 km/h',
      pressure: '1013 hPa',
      visibility: '10 km',
      uvIndex: '6',
      forecast: [
        { day: 'Today', high: '24°C', low: '18°C', condition: 'Sunny', icon: '☀️' },
        { day: 'Tomorrow', high: '26°C', low: '20°C', condition: 'Partly Cloudy', icon: '⛅' },
        { day: 'Thursday', high: '23°C', low: '17°C', condition: 'Cloudy', icon: '☁️' },
        { day: 'Friday', high: '21°C', low: '16°C', condition: 'Rainy', icon: '🌧️' },
        { day: 'Saturday', high: '25°C', low: '19°C', condition: 'Sunny', icon: '☀️' }
      ]
    },
    'london': {
      name: 'London',
      country: 'UK',
      currentTemp: '15°C',
      condition: 'Cloudy',
      icon: '☁️',
      humidity: '78%',
      windSpeed: '12 km/h',
      pressure: '1008 hPa',
      visibility: '8 km',
      uvIndex: '3',
      forecast: [
        { day: 'Today', high: '17°C', low: '12°C', condition: 'Cloudy', icon: '☁️' },
        { day: 'Tomorrow', high: '16°C', low: '11°C', condition: 'Rainy', icon: '🌧️' },
        { day: 'Thursday', high: '18°C', low: '13°C', condition: 'Partly Cloudy', icon: '⛅' },
        { day: 'Friday', high: '19°C', low: '14°C', condition: 'Sunny', icon: '☀️' },
        { day: 'Saturday', high: '15°C', low: '10°C', condition: 'Cloudy', icon: '☁️' }
      ]
    },
    'tokyo': {
      name: 'Tokyo',
      country: 'Japan',
      currentTemp: '28°C',
      condition: 'Partly Cloudy',
      icon: '⛅',
      humidity: '72%',
      windSpeed: '8 km/h',
      pressure: '1015 hPa',
      visibility: '12 km',
      uvIndex: '7',
      forecast: [
        { day: 'Today', high: '30°C', low: '24°C', condition: 'Partly Cloudy', icon: '⛅' },
        { day: 'Tomorrow', high: '32°C', low: '26°C', condition: 'Sunny', icon: '☀️' },
        { day: 'Thursday', high: '29°C', low: '23°C', condition: 'Cloudy', icon: '☁️' },
        { day: 'Friday', high: '27°C', low: '22°C', condition: 'Rainy', icon: '🌧️' },
        { day: 'Saturday', high: '31°C', low: '25°C', condition: 'Sunny', icon: '☀️' }
      ]
    }
  };

  const city = cityData[cityName] || {
    name: cityName.charAt(0).toUpperCase() + cityName.slice(1),
    country: 'Unknown',
    currentTemp: '20°C',
    condition: 'Clear',
    icon: '☀️',
    humidity: '60%',
    windSpeed: '10 km/h',
    pressure: '1013 hPa',
    visibility: '10 km',
    uvIndex: '5',
    forecast: [
      { day: 'Today', high: '22°C', low: '16°C', condition: 'Clear', icon: '☀️' },
      { day: 'Tomorrow', high: '24°C', low: '18°C', condition: 'Sunny', icon: '☀️' },
      { day: 'Thursday', high: '21°C', low: '15°C', condition: 'Cloudy', icon: '☁️' },
      { day: 'Friday', high: '19°C', low: '14°C', condition: 'Rainy', icon: '🌧️' },
      { day: 'Saturday', high: '23°C', low: '17°C', condition: 'Sunny', icon: '☀️' }
    ]
  };

  return (
    <div className="city-weather">
      <div className="city-header">
        <div className="container">
          <Link to="/weather" className="back-link">← Back to Weather</Link>
          <div className="city-current-weather">
            <div className="current-info">
              <h1>{city.name}, {city.country}</h1>
              <div className="current-temp">{city.currentTemp}</div>
              <p className="current-condition">{city.condition}</p>
              
              <div className="cart-buttons-container">
                <button 
                  className="cart-btn-primary" 
                  onClick={() => handleAddToCart({
                    id: `${city.name.toLowerCase()}-detailed-data`,
                    name: `${city.name} Detailed Data`,
                    description: `Complete weather analysis for ${city.name}`,
                    price: 19.99,
                    icon: city.icon
                  })}
                >
                  Add City Data
                </button>
                <button 
                  className="cart-type-btn" 
                  onClick={() => handleAddToCart({
                    id: `${city.name.toLowerCase()}-weather-pack`,
                    name: `${city.name} Weather Pack`,
                    description: `Full weather monitoring for ${city.name}`,
                    price: 39.99,
                    icon: city.icon
                  })}
                >
                  Buy Weather Pack
                </button>
              </div>
            </div>
            <div className="current-icon">
              {city.icon}
            </div>
          </div>
        </div>
      </div>

      <div className="weather-details">
        <div className="container">
          <div className="details-grid">
            <div className="detail-card">
              <div className="detail-icon">💧</div>
              <div className="detail-info">
                <span className="detail-label">Humidity</span>
                <span className="detail-value">{city.humidity}</span>
              </div>
            </div>
            <div className="detail-card">
              <div className="detail-icon">💨</div>
              <div className="detail-info">
                <span className="detail-label">Wind Speed</span>
                <span className="detail-value">{city.windSpeed}</span>
              </div>
            </div>
            <div className="detail-card">
              <div className="detail-icon">🌡️</div>
              <div className="detail-info">
                <span className="detail-label">Pressure</span>
                <span className="detail-value">{city.pressure}</span>
              </div>
            </div>
            <div className="detail-card">
              <div className="detail-icon">👁️</div>
              <div className="detail-info">
                <span className="detail-label">Visibility</span>
                <span className="detail-value">{city.visibility}</span>
              </div>
            </div>
            <div className="detail-card">
              <div className="detail-icon">☀️</div>
              <div className="detail-info">
                <span className="detail-label">UV Index</span>
                <span className="detail-value">{city.uvIndex}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="forecast-section">
        <div className="container">
          <h2>5-Day Forecast</h2>
          <div className="forecast-grid">
            {city.forecast.map((day, index) => (
              <div key={index} className="forecast-card">
                <div className="forecast-day">{day.day}</div>
                <div className="forecast-icon">{day.icon}</div>
                <div className="forecast-temps">
                  <span className="high-temp">{day.high}</span>
                  <span className="low-temp">{day.low}</span>
                </div>
                <div className="forecast-condition">{day.condition}</div>
                <button 
                  data-cart="add" 
                  onClick={() => handleAddToCart({
                    id: `${city.name.toLowerCase()}-forecast-${index}`,
                    name: `${city.name} ${day.day} Forecast`,
                    description: `Detailed forecast for ${day.day}`,
                    price: 2.99,
                    icon: day.icon
                  })} 
                  style={{marginTop: '10px', fontSize: '11px', padding: '6px 12px'}}
                >
                  Add Forecast
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-buttons-section">
            <h3 className="cart-buttons-title">Premium Weather Services</h3>
            <div className="cart-buttons-container">
              <button 
                id="cart-btn-special" 
                onClick={() => handleAddToCart({
                  id: `${city.name.toLowerCase()}-extended-forecast`,
                  name: `${city.name} Extended Forecast`,
                  description: `30-day extended forecast for ${city.name}`,
                  price: 24.99,
                  icon: '📅'
                })}
              >
                Extended Forecast
              </button>
              <button 
                className="cart-btn-hover" 
                onClick={() => handleAddToCart({
                  id: `${city.name.toLowerCase()}-hourly-updates`,
                  name: `${city.name} Hourly Updates`,
                  description: `Real-time hourly weather updates for ${city.name}`,
                  price: 14.99,
                  icon: '⏰'
                })}
              >
                hourly updates
              </button>
              <button 
                className="cart-btn-universal" 
                onClick={() => handleAddToCart({
                  id: `${city.name.toLowerCase()}-weather-alerts`,
                  name: `${city.name} Weather Alerts`,
                  description: `Instant alerts for severe weather in ${city.name}`,
                  price: 9.99,
                  icon: '🚨'
                })}
              >
                Weather Alerts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeather; 