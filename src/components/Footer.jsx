
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 BookStore. All rights reserved.</p>
      <p>
        Follow us on: 
        <a href="#" className="social-link">Facebook</a> | 
        <a href="#" className="social-link">Twitter</a> | 
        <a href="#" className="social-link">Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;
