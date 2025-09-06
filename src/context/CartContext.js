import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Cart Context
const CartContext = createContext();

// Cart Actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
  HIDE_NOTIFICATION: 'HIDE_NOTIFICATION'
};

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          notification: {
            show: true,
            message: `Updated ${action.payload.name} quantity in your Weather Kit!`,
            type: 'success'
          }
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          notification: {
            show: true,
            message: `Added ${action.payload.name} to your Weather Kit!`,
            type: 'success'
          }
        };
      }

    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        notification: {
          show: true,
          message: 'Item removed from Weather Kit!',
          type: 'info'
        }
      };

    case CART_ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: [],
        notification: {
          show: true,
          message: 'Weather Kit cleared!',
          type: 'info'
        }
      };

    case CART_ACTIONS.SHOW_NOTIFICATION:
      return {
        ...state,
        notification: {
          show: true,
          message: action.payload.message,
          type: action.payload.type || 'info'
        }
      };

    case CART_ACTIONS.HIDE_NOTIFICATION:
      return {
        ...state,
        notification: {
          show: false,
          message: '',
          type: 'info'
        }
      };

    default:
      return state;
  }
};

// Initial State
const initialState = {
  items: [],
  notification: {
    show: false,
    message: '',
    type: 'info'
  }
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Auto-hide notifications after 3 seconds
  useEffect(() => {
    if (state.notification.show) {
      const timer = setTimeout(() => {
        dispatch({ type: CART_ACTIONS.HIDE_NOTIFICATION });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.notification.show]);

  // Cart Actions
  const addItem = (item) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: item });
  };

  const removeItem = (itemId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeItem(itemId);
    } else {
      dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id: itemId, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const showNotification = (message, type = 'info') => {
    dispatch({ type: CART_ACTIONS.SHOW_NOTIFICATION, payload: { message, type } });
  };

  // Calculate totals
  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    items: state.items,
    notification: state.notification,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    showNotification,
    getTotalItems,
    getTotalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
