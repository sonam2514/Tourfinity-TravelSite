import React, { useState } from 'react';
import SmartLocationInput from '../SmartLocationInput';

const HotelForm = ({ guestCounts, onGuestModalOpen }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const [destination, setDestination] = useState('');

  const handleDestinationSelect = (location) => {
    setDestination(location.name);
    console.log('Selected destination:', location);
    // You can store the entire location object for API calls
  };

  const getGuestSummary = () => {
    return `${guestCounts.adults + guestCounts.children} Guest${guestCounts.adults + guestCounts.children !== 1 ? 's' : ''}, ${guestCounts.rooms} Room${guestCounts.rooms > 1 ? 's' : ''}`;
  };

  return (
    <div className="booking-form active">
      <div className="form-grid">
        <SmartLocationInput
          id="hotelDestination"
          label="Destination"
          icon="fas fa-map-marker-alt"
          placeholder="Where are you going?"
          type="city"
          value={destination}
          onSelect={handleDestinationSelect}
        />
        
        <div className="form-group">
          <label htmlFor="hotelCheckin">Check-in</label>
          <div className="input-wrapper">
            <i className="fas fa-calendar"></i>
            <input 
              id="hotelCheckin" 
              type="date" 
              className="form-input" 
              required 
              min={today}
              defaultValue={today}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="hotelCheckout">Check-out</label>
          <div className="input-wrapper">
            <i className="fas fa-calendar"></i>
            <input 
              id="hotelCheckout" 
              type="date" 
              className="form-input" 
              required 
              min={tomorrow}
              defaultValue={tomorrow}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Guests & Rooms</label>
          <div className="input-wrapper guests-selector" onClick={onGuestModalOpen}>
            <i className="fas fa-users"></i>
            <input 
              type="text" 
              value={getGuestSummary()}
              readOnly 
              className="form-input" 
            />
          </div>
        </div>
      </div>

      <button className="btn btn-search">
        <i className="fas fa-search"></i>
        Search Hotels
      </button>
    </div>
  );
};

export default HotelForm;