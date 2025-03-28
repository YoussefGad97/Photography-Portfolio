import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }}>
      <p>© 2024 Your Photography. All rights reserved.</p>
      <div>
        <a href="https://instagram.com" style={{ color: 'white', margin: '0 10px' }}>Instagram</a>
        <a href="https://facebook.com" style={{ color: 'white', margin: '0 10px' }}>Facebook</a>
        <a href="mailto:your@email.com" style={{ color: 'white', margin: '0 10px' }}>Email</a>
      </div>
    </footer>
  );
};

export default Footer;
