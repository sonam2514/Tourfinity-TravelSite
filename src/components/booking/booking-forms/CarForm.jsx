import React, { useState } from 'react';
import SmartLocationInput from '../SmartLocationInput';

const CarForm = ({ guestCounts, onGuestModalOpen }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');

  const handlePickupSelect = (location) => {
    setPickupLocation(location.name);
    console.log('Selected pickup location:', location);
  };

  const handleReturnSelect = (location) => {
    setReturnLocation(location.name);
    console.log('Selected return location:', location);
  };

  const getRenterSummary = () => {
    return `${guestCounts.adults} Driver${guestCounts.adults > 1 ? 's' : ''}`;
  };

  return (
    <div className="booking-form active">
      <div className="form-grid">
        <SmartLocationInput
          id="carPickupLocation"
          label="Pick-up Location"
          icon="fas fa-map-marker-alt"
          placeholder="Pick-up location"
          type="city"
          value={pickupLocation}
          onSelect={handlePickupSelect}
        />
        
        <div className="form-group">
          <label htmlFor="carPickupDate">Pick-up Date</label>
          <div className="input-wrapper">
            <i className="fas fa-calendar"></i>
            <input 
              id="carPickupDate" 
              type="date" 
              className="form-input" 
              required 
              min={today}
              defaultValue={today}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="carPickupTime">Pick-up Time</label>
          <div className="input-wrapper">
            <i className="fas fa-clock"></i>
            <input 
              id="carPickupTime" 
              type="time" 
              className="form-input" 
              required 
            />
          </div>
        </div>

        <SmartLocationInput
          id="carReturnLocation"
          label="Return Location"
          icon="fas fa-map-marker-alt"
          placeholder="Return location (same as pickup)"
          type="city"
          value={returnLocation}
          onSelect={handleReturnSelect}
        />
        
        <div className="form-group">
          <label htmlFor="carReturnDate">Return Date</label>
          <div className="input-wrapper">
            <i className="fas fa-calendar"></i>
            <input 
              id="carReturnDate" 
              type="date" 
              className="form-input" 
              required 
              min={tomorrow}
              defaultValue={tomorrow}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="carReturnTime">Return Time</label>
          <div className="input-wrapper">
            <i className="fas fa-clock"></i>
            <input 
              id="carReturnTime" 
              type="time" 
              className="form-input" 
              required 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="carType">Car Type</label>
          <div className="input-wrapper">
            <i className="fas fa-car"></i>
            <select id="carType" className="form-input" required>
              <option>Economy</option>
              <option>Compact</option>
              <option>Mid-size</option>
              <option>Full-size</option>
              <option>Luxury</option>
              <option>SUV</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Drivers</label>
          <div className="input-wrapper passengers-selector" onClick={onGuestModalOpen}>
            <i className="fas fa-user"></i>
            <input 
              type="text" 
              value={getRenterSummary()}
              readOnly 
              className="form-input" 
            />
          </div>
        </div>
      </div>

      {/* Trending Searches */}
      <div className="trending-searches">
        <h4>Popular Rental Locations</h4>
        <div className="trending-tags">
          <button type="button" className="tag-btn">Airport Pickup</button>
          <button type="button" className="tag-btn">City Center</button>
          <button type="button" className="tag-btn">Beach Resorts</button>
          <button type="button" className="tag-btn">SUV Rentals</button>
        </div>
      </div>

      <button className="btn btn-search">
        <i className="fas fa-search"></i>
        Search Cars
      </button>
    </div>
  );
};

export default CarForm;