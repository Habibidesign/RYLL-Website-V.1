import React from 'react';
import ReactDOM from 'react-dom/client';

// Simple test component
const TestApp = () => {
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: 'green', fontSize: '48px' }}>
        ✅ REACT IS WORKING!
      </h1>
      <p style={{ fontSize: '24px' }}>
        If you see this, React is rendering correctly.
      </p>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<TestApp />);
}
