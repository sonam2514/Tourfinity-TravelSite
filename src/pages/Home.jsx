// src/pages/Home.jsx
import React from 'react';
import BookingSection from '../components/booking/BookingSection';
import DestinationsShowcase from '../components/destinations/DestinationsShowcase';
import PromoBanner from '../components/common/PromoBanner';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Background Video */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="bg-video">
        <source src="/assets/images/shore3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1>Infinite Journeys, One Destination</h1>
            <p>
              Discover amazing destinations and unforgettable experiences with Tourfinity.
              Your next adventure starts here.
            </p>
            <a href="/destinations" className="btnn">
              Explore your Travels
            </a>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />

      {/* Promo Banner */}
      <PromoBanner />

      {/* Destinations Showcase */}
      <DestinationsShowcase />
    </div>
  );
};

export default Home;