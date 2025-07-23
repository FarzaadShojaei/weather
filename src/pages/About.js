import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Meteorologist",
      image: "👩‍🔬",
      description: "15+ years of experience in atmospheric sciences and weather prediction."
    },
    {
      name: "Mark Chen",
      role: "Data Scientist",
      image: "👨‍💻",
      description: "Specializes in AI-powered weather analytics and machine learning models."
    },
    {
      name: "Emily Rodriguez",
      role: "Climate Researcher",
      image: "🌱",
      description: "Expert in climate change analysis and environmental impact assessment."
    },
    {
      name: "Alex Thompson",
      role: "Software Engineer",
      image: "⚙️",
      description: "Full-stack developer focused on building intuitive weather applications."
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Accurate Forecasts",
      description: "Our advanced algorithms provide precise weather predictions with 95% accuracy."
    },
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "Access weather data for over 200,000 cities worldwide in real-time."
    },
    {
      icon: "📱",
      title: "User-Friendly",
      description: "Clean, intuitive interface designed for users of all technical levels."
    },
    {
      icon: "⚡",
      title: "Real-Time Updates",
      description: "Weather conditions updated every 15 minutes for the most current information."
    },
    {
      icon: "📊",
      title: "Detailed Analytics",
      description: "Comprehensive weather data including humidity, pressure, wind speed, and more."
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      description: "Customizable notifications for severe weather conditions and daily forecasts."
    }
  ];

  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1>About WeatherApp</h1>
          <p className="hero-subtitle">
            Your trusted companion for accurate weather forecasting and climate insights
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="mission-section">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At WeatherApp, we believe that accurate weather information should be accessible to everyone. 
                Our mission is to provide reliable, up-to-date weather forecasts and climate insights that help 
                people make informed decisions about their daily activities, travel plans, and long-term planning.
              </p>
              <p>
                Founded in 2020, we've grown from a small startup to a trusted weather service used by millions 
                of people worldwide. Our commitment to accuracy, user experience, and innovation drives everything we do.
              </p>
            </div>
            <div className="mission-image">
              <div className="weather-illustration">
                <span className="large-icon">🌤️</span>
                <div className="floating-icons">
                  <span className="float-icon">🌡️</span>
                  <span className="float-icon">💨</span>
                  <span className="float-icon">💧</span>
                  <span className="float-icon">📊</span>
                </div>
              </div>
            </div>
          </div>

          <div className="features-section">
            <h2>Why Choose WeatherApp?</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="team-section">
            <h2>Meet Our Team</h2>
            <p className="team-intro">
              Our dedicated team of meteorologists, data scientists, and engineers work around the clock 
              to ensure you receive the most accurate and timely weather information.
            </p>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="team-avatar">{member.image}</div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stats-section">
            <h2>Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10M+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200K+</div>
                <div className="stat-label">Cities Covered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Accuracy Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Real-time Updates</div>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <div className="contact-card">
              <h2>Get In Touch</h2>
              <p>Have questions or feedback? We'd love to hear from you!</p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>contact@weatherapp.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123 Weather Street, Climate City, CC 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 