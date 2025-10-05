import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Alerts.css';

const Alerts = () => {
  const [alerts] = useState([
    {
      id: 1,
      type: 'warning',
      severity: 'high',
      title: 'Severe Thunderstorm Warning',
      location: 'Central Region',
      time: '2 hours ago',
      description: 'Severe thunderstorms with heavy rain, strong winds, and possible hail expected in the central region.',
      icon: '⚡'
    },
    {
      id: 2,
      type: 'info',
      severity: 'medium',
      title: 'Heat Advisory',
      location: 'Southern Areas',
      time: '4 hours ago',
      description: 'High temperatures expected to reach 35°C (95°F) with high humidity levels.',
      icon: '🌡️'
    },
    {
      id: 3,
      type: 'warning',
      severity: 'high',
      title: 'Flood Watch',
      location: 'River Valley',
      time: '6 hours ago',
      description: 'Heavy rainfall may cause flooding in low-lying areas near the river valley.',
      icon: '🌊'
    },
    {
      id: 4,
      type: 'info',
      severity: 'low',
      title: 'Air Quality Alert',
      location: 'Metropolitan Area',
      time: '8 hours ago',
      description: 'Moderate air quality due to increased pollution levels. Sensitive groups should limit outdoor activities.',
      icon: '🌫️'
    },
    {
      id: 5,
      type: 'warning',
      severity: 'medium',
      title: 'Wind Advisory',
      location: 'Coastal Regions',
      time: '10 hours ago',
      description: 'Strong winds up to 50 km/h expected along coastal areas.',
      icon: '💨'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredAlerts = alerts.filter(alert => {
    if (filter === 'all') return true;
    return alert.type === filter;
  });

  return (
    <div className="alerts">
      <div className="container">
        <div className="alerts-header">
          <h1>Weather Alerts</h1>
          <p>Stay informed about important weather conditions and warnings</p>
        </div>

        <div className="alert-filters">
          <h2>Filter Alerts</h2>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Alerts
            </button>
            <button
              className={`filter-btn ${filter === 'warning' ? 'active' : ''}`}
              onClick={() => setFilter('warning')}
            >
              Warnings
            </button>
            <button
              className={`filter-btn ${filter === 'info' ? 'active' : ''}`}
              onClick={() => setFilter('info')}
            >
              Information
            </button>
          </div>
        </div>

        <div className="alerts-content">
          <h2>Current Alerts ({filteredAlerts.length})</h2>
          <div className="alerts-list">
            {filteredAlerts.map(alert => (
              <div key={alert.id} className={`alert-card ${alert.type} ${alert.severity}`}>
                <div className="alert-icon">{alert.icon}</div>
                <div className="alert-content">
                  <div className="alert-header">
                    <h3 className="alert-title">{alert.title}</h3>
                    <span className="alert-time">{alert.time}</span>
                  </div>
                  <div className="alert-location">
                    <strong>Location:</strong> {alert.location}
                  </div>
                  <div className="alert-description">
                    {alert.description}
                  </div>
                  <div className="alert-severity">
                    <span className={`severity-badge ${alert.severity}`}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="alert-tips">
          <h2>Safety Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">⚡</div>
              <h3>Thunderstorm Safety</h3>
              <p>Stay indoors, avoid using electrical appliances, and stay away from windows during severe thunderstorms.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🌡️</div>
              <h3>Heat Safety</h3>
              <p>Stay hydrated, wear light clothing, and avoid prolonged exposure to direct sunlight during heat advisories.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🌊</div>
              <h3>Flood Safety</h3>
              <p>Never drive through flooded roads. Move to higher ground if flooding occurs in your area.</p>
            </div>
          </div>
        </div>

        <div className="quick-links">
          <h2>Quick Navigation</h2>
          <div className="nav-buttons">
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/weather" className="btn btn-secondary">Current Weather</Link>
            <Link to="/forecast" className="btn btn-secondary">7-Day Forecast</Link>
            <Link to="/contact" className="btn btn-secondary">Contact</Link>
            <Link to="/about" className="btn btn-secondary">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
