import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './FloatingCart.css';

const FloatingCart = () => {
  const { items, getTotalItems, getTotalPrice, removeItem, updateQuantity, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  if (totalItems === 0) {
    return null;
  }

  return (
    <>
      {/* Floating Cart Button */}
      <div className="floating-cart-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{totalItems}</span>
        <span className="cart-label">Weather Kit</span>
      </div>

      {/* Cart Modal */}
      {isOpen && (
        <div className="cart-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>🌤️ Your Weather Kit</h3>
              <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            </div>
            
            <div className="cart-content">
              {items.length === 0 ? (
                <div className="empty-cart">
                  <span className="empty-icon">📦</span>
                  <p>Your Weather Kit is empty</p>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {items.map((item) => (
                      <div key={item.id} className="cart-item">
                        <div className="item-info">
                          <span className="item-icon">{item.icon}</span>
                          <div className="item-details">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <span className="item-price">${item.price}</span>
                          </div>
                        </div>
                        <div className="item-controls">
                          <div className="quantity-controls">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="qty-btn"
                            >
                              -
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="qty-btn"
                            >
                              +
                            </button>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="remove-btn"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="cart-footer">
                    <div className="cart-summary">
                      <div className="total-items">
                        Total Items: <strong>{totalItems}</strong>
                      </div>
                      <div className="total-price">
                        Total: <strong>${totalPrice.toFixed(2)}</strong>
                      </div>
                    </div>
                    
                    <div className="cart-actions">
                      <button className="clear-btn" onClick={clearCart}>
                        Clear Kit
                      </button>
                      <button className="checkout-btn">
                        Get Weather Kit
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingCart;
