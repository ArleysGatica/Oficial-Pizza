import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import Home from './app/Pages/Home';

// .18
createRoot(
  document.getElementById('root')
  ).render(
    <Home />
)

/* .17
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/