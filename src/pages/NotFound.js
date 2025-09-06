import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './NotFound.css';
import '../components/CartButtons.css';

const NotFound = () => {
  const { addItem } = useCart();

  const handleAddToCart = (item) => {
    addItem(item);
  };

  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="error-content">
          <div className="error-animation">
            <div className="error-cloud">☁️</div>
            <div className="error-lightning">⚡</div>
            <div className="error-rain">
              <span>💧</span>
              <span>💧</span>
              <span>💧</span>
              <span>💧</span>
              <span>💧</span>
            </div>
          </div>
          
          <div className="error-text">
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Weather Storm Ahead!</h2>
            <p className="error-message">
              Oops! It looks like you've wandered into a weather storm. 
              The page you're looking for seems to have been blown away by strong winds.
            </p>
            <p className="error-submessage">
              Don't worry, our weather team is working to clear the storm and get you back on track!
            </p>
          </div>

          <div className="error-actions">
            <Link to="/" className="btn btn-primary error-btn">
              🏠 Return to Safety (Home)
            </Link>
            <Link to="/weather" className="btn btn-secondary error-btn">
              🌤️ Check Weather Conditions
            </Link>
          </div>

          <div className="cart-buttons-section">
            <h3 className="cart-buttons-title">Emergency Weather Kits</h3>
            <p className="emergency-text">Since you're lost in the storm, maybe you need some emergency supplies?</p>
            <div className="cart-buttons-container">
              <button 
                className="cart-btn-primary" 
                onClick={() => handleAddToCart({
                  id: 'emergency-weather-kit',
                  name: 'Emergency Weather Kit',
                  description: 'Essential tools for navigating weather emergencies',
                  price: 59.99,
                  icon: '🚨'
                })}
              >
                Emergency Kit
              </button>
              <button 
                id="cart-btn-special" 
                onClick={() => handleAddToCart({
                  id: 'storm-tracker-pro',
                  name: 'Storm Tracker Pro',
                  description: 'Professional storm tracking and navigation tools',
                  price: 149.99,
                  icon: '🌪️'
                })}
              >
                Storm Tracker
              </button>
              <button 
                className="cart-btn-hover" 
                onClick={() => handleAddToCart({
                  id: 'weather-compass',
                  name: 'Weather Compass',
                  description: 'Never get lost in weather again',
                  price: 29.99,
                  icon: '🧭'
                })}
              >
                weather compass
              </button>
            </div>
          </div>

          <div className="error-stats">
            <div className="stat-item">
              <div className="stat-icon">🌊</div>
              <div className="stat-text">
                <span className="stat-number">404</span>
                <span className="stat-label">Pages Lost in Storm</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⛈️</div>
              <div className="stat-text">
                <span className="stat-number">∞</span>
                <span className="stat-label">Weather Patterns</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🔍</div>
              <div className="stat-text">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Search & Rescue</span>
              </div>
            </div>
          </div>

          <div className="weather-tips">
            <h3>🌟 Weather Navigation Tips</h3>
            <div className="tips-grid">
              <div className="tip-card">
                <span className="tip-icon">🧭</span>
                <p>Always check your weather compass before navigating</p>
              </div>
              <div className="tip-card">
                <span className="tip-icon">📱</span>
                <p>Keep your weather app updated for accurate forecasts</p>
              </div>
              <div className="tip-card">
                <span className="tip-icon">⚡</span>
                <p>Avoid clicking random links during storm warnings</p>
              </div>
              <div className="tip-card">
                <span className="tip-icon">🏠</span>
                <p>When in doubt, return to the home page</p>
              </div>
            </div>
          </div>

          <div className="additional-cart-options">
            <h3>More Emergency Supplies</h3>
            <div className="button-group">
              <button 
                onClick={() => handleAddToCart({
                  id: 'weather-radio',
                  name: 'Emergency Weather Radio',
                  description: 'Stay informed during severe weather',
                  price: 39.99,
                  icon: '📻'
                })}
              >
                Weather Radio
              </button>
              <button 
                onClick={() => handleAddToCart({
                  id: 'storm-shelter-guide',
                  name: 'Storm Shelter Guide',
                  description: 'Complete guide to weather safety',
                  price: 19.99,
                  icon: '📖'
                })}
              >
                Safety Guide
              </button>
            </div>
            
            <div className="cart-buttons-container" style={{marginTop: '20px'}}>
              <button 
                data-cart="add" 
                onClick={() => handleAddToCart({
                  id: 'lost-page-insurance',
                  name: 'Lost Page Insurance',
                  description: 'Protection against future 404 errors',
                  price: 9.99,
                  icon: '🛡️'
                })}
              >
                Add Page Insurance
              </button>
              <button 
                className="cart-btn-universal" 
                onClick={() => handleAddToCart({
                  id: 'navigation-premium',
                  name: 'Premium Navigation Package',
                  description: 'Never get lost again with premium features',
                  price: 79.99,
                  icon: '🗺️'
                })}
              >
                Premium Navigation
              </button>
              <button 
                className="cart-type-btn" 
                onClick={() => handleAddToCart({
                  id: 'storm-survival-course',
                  name: 'Storm Survival Course',
                  description: 'Learn to navigate through any weather',
                  price: 199.99,
                  icon: '🎓'
                })}
              >
                Survival Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
