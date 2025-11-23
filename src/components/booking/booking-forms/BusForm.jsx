import React, { useState } from 'react';
import SmartLocationInput from '../SmartLocationInput';

const BusForm = ({ guestCounts, onGuestModalOpen }) => {
  const today = new Date().toISOString().split('T')[0];
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handleFromSelect = (location) => {
    setFromLocation(location.name);
    console.log('Selected bus departure:', location);
  };

  const handleToSelect = (location) => {
    setToLocation(location.name);
    console.log('Selected bus destination:', location);
  };

  const getPassengerSummary = () => {
    const totalPassengers = guestCounts.adults + guestCounts.children;
    return `${totalPassengers} Passenger${totalPassengers !== 1 ? 's' : ''}`;
  };

  return (
    <div className="booking-form active">
      <div className="form-grid">
        <SmartLocationInput
          id="busFrom"
          label="From"
          icon="fas fa-map-marker-alt"
          placeholder="Departure city"
          type="city"
          value={fromLocation}
          onSelect={handleFromSelect}
        />
        
        <SmartLocationInput
          id="busTo"
          label="To"
          icon="fas fa-map-marker-alt"
          placeholder="Destination city"
          type="city"
          value={toLocation}
          onSelect={handleToSelect}
        />
        
        <div className="form-group">
          <label htmlFor="busDeparture">Departure Date</label>
          <div className="input-wrapper">
            <i className="fas fa-calendar"></i>
            <input 
              id="busDeparture" 
              type="date" 
              className="form-input" 
              required 
              min={today}
              defaultValue={today}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Passengers</label>
          <div className="input-wrapper passengers-selector" onClick={onGuestModalOpen}>
            <i className="fas fa-users"></i>
            <input 
              type="text" 
              value={getPassengerSummary()}
              readOnly 
              className="form-input" 
            />
          </div>
        </div>
      </div>

      {/* Trending Searches */}
      <div className="trending-searches">
        <h4>Popular Bus Routes</h4>
        <div className="trending-tags">
          <button type="button" className="tag-btn">New York → Boston</button>
          <button type="button" className="tag-btn">LA → Las Vegas</button>
          <button type="button" className="tag-btn">Chicago → Detroit</button>
          <button type="button" className="tag-btn">Miami → Orlando</button>
        </div>
      </div>

      <button className="btn btn-search">
        <i className="fas fa-search"></i>
        Search Buses
      </button>
    </div>
  );
};

export default BusForm;