import React from 'react';
import './Content.css';
import '../components/CartButtons.css';

const Content = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Climate Change: What You Need to Know",
      excerpt: "Climate change is one of the most pressing issues of our time. Learn about its causes, effects, and what we can do to address it.",
      image: "🌍",
      date: "January 15, 2024",
      readTime: "5 min read",
      category: "Climate"
    },
    {
      id: 2,
      title: "How Weather Patterns Affect Your Health",
      excerpt: "From seasonal allergies to mood changes, discover how different weather conditions can impact your physical and mental well-being.",
      image: "🏥",
      date: "January 12, 2024",
      readTime: "4 min read",
      category: "Health"
    },
    {
      id: 3,
      title: "Extreme Weather Events: Are They Becoming More Common?",
      excerpt: "Analyzing the increasing frequency and intensity of hurricanes, floods, droughts, and other extreme weather phenomena worldwide.",
      image: "🌪️",
      date: "January 10, 2024",
      readTime: "6 min read",
      category: "Science"
    },
    {
      id: 4,
      title: "The Science Behind Weather Forecasting",
      excerpt: "Ever wondered how meteorologists predict the weather? Dive into the fascinating world of weather prediction and the technology behind it.",
      image: "🛰️",
      date: "January 8, 2024",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      id: 5,
      title: "Seasonal Depression: How Weather Affects Mental Health",
      excerpt: "Understanding Seasonal Affective Disorder (SAD) and practical tips for maintaining mental wellness during darker months.",
      image: "🧠",
      date: "January 5, 2024",
      readTime: "5 min read",
      category: "Health"
    },
    {
      id: 6,
      title: "Renewable Energy and Weather: A Perfect Match",
      excerpt: "Exploring how weather conditions affect renewable energy generation and the future of sustainable power sources.",
      image: "⚡",
      date: "January 3, 2024",
      readTime: "6 min read",
      category: "Environment"
    }
  ];

  const categories = ["All", "Climate", "Health", "Science", "Technology", "Environment"];

  return (
    <div className="content">
      <div className="content-header">
        <div className="container">
          <h1>Weather & Climate Articles</h1>
          <p>Stay informed with the latest insights on weather, climate, and environmental science</p>
          
          <div className="cart-buttons-section">
            <h3 className="cart-buttons-title">Article Packages</h3>
            <div className="cart-buttons-container">
              <button data-cart="add" onClick={() => {}}>Add Article Access</button>
              <button className="cart-btn-hover" onClick={() => {}}>premium content</button>
              <button id="cart-btn-special" onClick={() => {}}>Full Library Access</button>
            </div>
          </div>
        </div>
      </div>

      <div className="content-main">
        <div className="container">
          <div className="content-filters">
            <h3>Categories</h3>
            <div className="filter-buttons">
              {categories.map((category, index) => (
                <button key={index} className={`filter-btn ${index === 0 ? 'active' : ''}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="articles-grid">
            {articles.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <span className="article-icon">{article.image}</span>
                  <div className="article-category">{article.category}</div>
                </div>
                <div className="article-content">
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-meta">
                    <span className="article-date">{article.date}</span>
                    <span className="article-read-time">{article.readTime}</span>
                  </div>
                  <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                    <button className="read-more-btn">Read More →</button>
                    <button className="cart-btn-universal" onClick={() => {}} style={{fontSize: '12px', padding: '8px 16px'}}>Add Article</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="newsletter-section">
            <div className="newsletter-card">
              <div className="newsletter-icon">📰</div>
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter for the latest weather insights and climate news delivered to your inbox.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email address" className="newsletter-input" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
              
              <div className="cart-buttons-container" style={{marginTop: '20px'}}>
                <button className="cart-type-btn" onClick={() => {}}>Add Newsletter Premium</button>
                <button className="cart-btn-primary" onClick={() => {}}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content; 