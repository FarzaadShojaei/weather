import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import CartNotification from './components/CartNotification';
import FloatingCart from './components/FloatingCart';
import Home from './pages/Home';
import Weather from './pages/Weather';
import CityWeather from './pages/CityWeather';
import Content from './pages/Content';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/weather/:cityName" element={<CityWeather />} />
            <Route path="/content" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/404" element={<Navigate to="/notfound" replace />} />
            <Route path="*" element={<Navigate to="/notfound" replace />} />
          </Routes>
          <CartNotification />
          <FloatingCart />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
