import React from 'react';
import { Link } from 'react-router-dom';
import './Weather.css';

const Weather = () => {
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
        </div>
      </div>
      
      <div className="weather-content">
        <div className="container">
          <div className="cities-grid">
            {cities.map((city, index) => (
              <Link 
                key={index} 
                to={`/weather/${city.name.toLowerCase()}`} 
                className="city-card"
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather; 