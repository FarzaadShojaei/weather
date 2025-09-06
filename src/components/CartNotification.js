import React from 'react';
import { useCart } from '../context/CartContext';
import './CartNotification.css';

const CartNotification = () => {
  const { notification } = useCart();

  if (!notification.show) {
    return null;
  }

  return (
    <div className={`cart-notification ${notification.type}`}>
      <div className="notification-content">
        <span className="notification-icon">
          {notification.type === 'success' ? '✅' : notification.type === 'error' ? '❌' : 'ℹ️'}
        </span>
        <span className="notification-message">{notification.message}</span>
      </div>
    </div>
  );
};

export default CartNotification;
