// src/components/destinations/DestinationCard.jsx
import React from 'react';

const DestinationCard = ({ destination, onClick }) => {
  return (
    <div className="destination-card group" onClick={() => onClick(destination)}>
      <div className="relative overflow-hidden">
        <img src={destination.image} alt={destination.name} loading="lazy" />
        <div className="rating-badge">
          <span className="star-icon">⭐</span>
          <span className="rating-text">{destination.rating}</span>
        </div>
      </div>
      
      <div className="card-content">
        <h3>{destination.name}</h3>
        <div className="location">
          <span>📍</span>
          <span className="ml-2">{destination.country}</span>
        </div>
        <p className="description">{destination.description}</p>
        <div className="card-footer">
          <div className="visitors">
            <span>👥</span>
            <span className="ml-1">{destination.visitors}</span>
          </div>
          <span className="learn-more">Learn More →</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;