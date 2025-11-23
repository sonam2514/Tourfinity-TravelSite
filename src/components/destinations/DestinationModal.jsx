// src/components/destinations/DestinationModal.jsx
import React from 'react';

const DestinationModal = ({ destination, isOpen, onClose }) => {
  if (!isOpen || !destination) return null;

  return (
    <div id="destination-modal" className="modal-overlay active" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <img id="modal-image" src={destination.image} alt={destination.name} className="modal-image" />
          <button id="close-modal" className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className="modal-content">
          <div className="modal-header">
            <h2 id="modal-title">{destination.name}</h2>
            <div className="modal-rating">
              <span className="star-icon">⭐</span>
              <span id="modal-rating">{destination.rating}</span>
            </div>
          </div>
          
          <div className="modal-location">
            <span className="location-icon">📍</span>
            <span id="modal-country">{destination.country}</span>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="info-header">
                <span className="calendar-icon">📅</span>
                <span className="info-label">Best Time to Visit</span>
              </div>
              <p id="modal-best-time">{destination.bestTime}</p>
            </div>
            
            <div className="info-card">
              <div className="info-header">
                <span className="users-icon">👥</span>
                <span className="info-label">Annual Visitors</span>
              </div>
              <p id="modal-visitors">{destination.visitors}</p>
            </div>
          </div>
          
          <div className="description-section">
            <div className="section-header">
              <span className="info-icon">ℹ️</span>
              <span className="section-title">About</span>
            </div>
            <p id="modal-description">{destination.description}</p>
          </div>
          
          <div className="famous-section">
            <div className="section-header">
              <span className="camera-icon">📸</span>
              <span className="section-title">Famous For</span>
            </div>
            <p id="modal-famous-for">{destination.famousFor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;