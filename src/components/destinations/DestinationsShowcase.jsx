// src/components/destinations/DestinationsShowcase.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DestinationsShowcase = () => {
  const popularDestinations = [
    {
      name: "Eiffel Tower Paris",
      image: "/assets/images/paris.jpg",
      alt: "Paris"
    },
    {
      name: "Mount Fuji Japan", 
      image: "/assets/images/japan.jpg",
      alt: "Japan"
    },
    {
      name: "Ladakh India",
      image: "/assets/images/Ladakh.jpg", 
      alt: "India"
    },
    {
      name: "Bali Thailand",
      image: "/assets/images/bali.jpg",
      alt: "Thailand"
    },
    {
      name: "LA USA", 
      image: "/assets/images/la.jpg",
      alt: "USA"
    }
  ];

  return (
    <section id="destinations-showcase" className="destinations-showcase">
      <div className="container">
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-subtitle">Explore our top picks for your next adventure</p>

        <div className="destinations-row">
          {popularDestinations.map((destination, index) => (
            <div key={index} className="destination-item">
              <img src={destination.image} alt={destination.alt} />
              <span className="destination-label">{destination.name}</span>
            </div>
          ))}
        </div>

        <div className="explore-more">
 <Link 
    to="/destinations" 
    className="btn-explore"
    onClick={() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }}
  >
    Explore More
  </Link> 
        </div>
      </div>
    </section>
  );
};

export default DestinationsShowcase;