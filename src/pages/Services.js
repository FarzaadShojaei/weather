import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Weather API',
      description: 'Access real-time weather data for your applications',
      price: '$29.99/month',
      features: ['Real-time data', 'Historical data', 'Forecast data', 'API documentation'],
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Custom Weather Solutions',
      description: 'Tailored weather solutions for your business needs',
      price: 'Contact us',
      features: ['Custom integration', 'Dedicated support', 'White-label options', 'Advanced analytics'],
      icon: '⚙️'
    },
    {
      id: 3,
      title: 'Weather Consulting',
      description: 'Expert weather consulting for agriculture and business',
      price: '$150/hour',
      features: ['Expert analysis', 'Risk assessment', 'Strategic planning', 'Ongoing support'],
      icon: '👨‍💼'
    },
    {
      id: 4,
      title: 'Weather Monitoring',
      description: 'Professional weather monitoring equipment and services',
      price: '$199/month',
      features: ['Professional equipment', '24/7 monitoring', 'Data logging', 'Maintenance included'],
      icon: '📡'
    }
  ];

  return (
    <div className="services">
      <div className="container">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>Professional weather solutions for businesses and developers</p>
        </div>

        <div className="services-content">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-price">{service.price}</div>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary">Learn More</button>
              </div>
            ))}
          </div>
        </div>

        <div className="services-cta">
          <h2>Ready to Get Started?</h2>
          <p>Contact our team to discuss your weather solution needs</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>

        <div className="quick-links">
          <h2>Quick Navigation</h2>
          <div className="nav-buttons">
            <Link to="/" className="btn btn-secondary">Home</Link>
            <Link to="/weather" className="btn btn-secondary">Weather</Link>
            <Link to="/forecast" className="btn btn-secondary">Forecast</Link>
            <Link to="/alerts" className="btn btn-secondary">Alerts</Link>
            <Link to="/about" className="btn btn-secondary">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
