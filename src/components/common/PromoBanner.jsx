// src/components/common/PromoBanner.jsx
import React from "react";
import { useCountdown } from "../../hooks/useCountdown";
import "../../styles/components/promo-banner.css";
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  const timeLeft = useCountdown("2025-12-10T23:59:59");


  return (
    <div className="promo-banner">
      {/* LEFT SIDE */}
      <div className="promo-text">
        <h3>⏳ Limited Time: Book Before December 10th</h3>
        <ul>
          <li>✨ Flat 20% off on Domestic Flights*</li>
          <li>🏨 35% off on Hotels</li>
          <li>🚌 15% off on Buses</li>
        </ul>
        <p className="note">*Offer valid only till December 10th</p>
      </div>

      {/* RIGHT SIDE TIMER */}
      <div className="promo-timer">
        <h4>Hurry! Offer Ends In:</h4>

        <div className="countdown">
          <div className="timer-box">
            <div className="time">{timeLeft.days}</div>
            <div className="label">Days</div>
          </div>
          <div className="timer-box">
            <div className="time">{timeLeft.hours}</div>
            <div className="label">Hours</div>
          </div>
          <div className="timer-box">
            <div className="time">{timeLeft.minutes}</div>
            <div className="label">Min</div>
          </div>
          <div className="timer-box">
            <div className="time">{timeLeft.seconds}</div>
            <div className="label">Sec</div>
          </div>
        </div>

<Link 
  to="/" 
  onClick={(e) => {
    if (location.pathname === '/') {
      e.preventDefault(); // Prevent default navigation if already on home
      const bookingSection = document.getElementById('booking-section');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
   
  }}
  className="book-btn"
>
  Book Now
</Link>
      </div>
    </div>
  );
};

export default PromoBanner;
