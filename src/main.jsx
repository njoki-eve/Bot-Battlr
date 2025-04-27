import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Your global styles
import './App.css';    // Component-specific styles

// Vite uses React 18's new root API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);