import React, { useState } from 'react';
import SmartLocationInput from '../SmartLocationInput';

const TrainForm = ({ guestCounts, onGuestModalOpen }) => {
  const today = new Date().toISOString().split('T')[0];
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');

  const handleFromSelect = (location) => {
    setFromStation(location.name);
    console.log('Selected train departure:', location);
  };

  const handleToSelect = (location) => {
    setToStation(location.name);
    console.log('Selected train destination:', location);
  };

  const getPassengerSummary = () => {
    const totalPassengers = guestCounts.adults + guestCounts.children;
    return `${totalPassengers} Passenger${totalPassengers !== 1 ? 's' : ''}`;
  };

  return (
    <div className="booking-form active">
      <div className="form-grid">
        <SmartLocationInput
          id="trainFrom"
          label="From Station"
          icon="fas fa-train"
          placeholder="Departure station"
          type="station"
          value={fromStation}
          onSelect={handleFromSelect}
        />
        
        <SmartLocationInput
          id="trainTo"
          label="To Station"
          icon="fas fa-train"
          placeholder="Arrival station"
          type="station"
          value={toStation}
          onSelect={handleToSelect}
        />
        
        <div className="form-group">
          <label htmlFor="trainDeparture">Departure Date</label>
          <div className="input-wrapper">
            <i className="fas fa-calendar"></i>
            <input 
              id="trainDeparture" 
              type="date" 
              className="form-input" 
              required 
              min={today}
              defaultValue={today}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="trainClass">Class</label>
          <div className="input-wrapper">
            <i className="fas fa-ticket-alt"></i>
            <select id="trainClass" className="form-input" required>
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
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
        <h4>Popular Train Routes</h4>
        <div className="trending-tags">
          <button type="button" className="tag-btn">NYC → Washington DC</button>
          <button type="button" className="tag-btn">London → Paris</button>
          <button type="button" className="tag-btn">Tokyo → Osaka</button>
          <button type="button" className="tag-btn">Paris → Brussels</button>
        </div>
      </div>

      <button className="btn btn-search">
        <i className="fas fa-search"></i>
        Search Trains
      </button>
    </div>
  );
};

export default TrainForm;