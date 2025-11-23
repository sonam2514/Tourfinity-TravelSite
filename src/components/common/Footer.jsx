// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li>
              <i className="fas fa-users"></i>
              <Link to="/about">Who are we</Link>
            </li>
            <li>
              <i className="fas fa-info-circle"></i>
              <Link to="/about-platform">About the site</Link>
            </li>
            <li>
              <i className="fas fa-shield-alt"></i>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li>
              <i className="fas fa-headset"></i>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <i className="fas fa-question-circle"></i>
              <Link to="/faq">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-info">
        <div className="info-box">
          <h5>Why TourInfinity?</h5>
          <p>Founded with a vision to make travel more accessible, TourInfinity offers unbeatable deals, exclusive discounts, and a seamless booking experience.</p>
        </div>
        <div className="info-box">
          <h5>Booking Made Easy</h5>
          <p>Compare fares, book hotels, and design personalized travel experiences with 24/7 customer support.</p>
        </div>
        <div className="info-box">
          <h5>Domestic & International</h5>
          <p>From India's cultural treasures to the world's exotic destinations — we ensure the best prices and customized packages.</p>
        </div>
        <div className="info-box">
          <h5>Trust & Safety</h5>
          <p>We prioritize secure payments, verified travel partners, and transparent policies for complete peace of mind.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://www.instagram.com/tour.finity/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p>© 2025 TourInfinity Pvt. Ltd. | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;