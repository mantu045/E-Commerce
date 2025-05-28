import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
import './index.css'; // or wherever your global styles live

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopContextProvider>
  </React.StrictMode>
);
