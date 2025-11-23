import React, { useState } from 'react';
import SmartLocationInput from '../SmartLocationInput';

const FlightForm = ({ guestCounts, onGuestModalOpen, flightClass }) => {
  const [tripType, setTripType] = useState('round');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const handleFromSelect = (location) => {
    setFromLocation(location.name);
    console.log('Selected departure:', location);
  };

  const handleToSelect = (location) => {
    setToLocation(location.name);
    console.log('Selected arrival:', location);
  };

  const getPassengerSummary = () => {
    let summary = `${guestCounts.adults} Adult${guestCounts.adults > 1 ? 's' : ''}`;
    if (guestCounts.children > 0) summary += `, ${guestCounts.children} Child${guestCounts.children > 1 ? 'ren' : ''}`;
    if (guestCounts.infants > 0) summary += `, ${guestCounts.infants} Infant${guestCounts.infants > 1 ? 's' : ''}`;
    summary += `, ${flightClass}`;
    return summary;
  };

  return (
    <div className="booking-form active">
      <div className="trip-type">
        <label className="radio-label">
          <input 
            type="radio" 
            name="trip" 
            value="round" 
            checked={tripType === 'round'}
            onChange={(e) => setTripType(e.target.value)}
          />
          <span>Round Trip</span>
        </label>
        <label className="radio-label">
          <input 
            type="radio" 
            name="trip" 
            value="one" 
            checked={tripType === 'one'}
            onChange={(e) => setTripType(e.target.value)}
          />
          <span>One Way</span>
        </label>
        <label className="radio-label">
          <input 
            type="radio" 
            name="trip" 
            value="multi" 
            checked={tripType === 'multi'}
            onChange={(e) => setTripType(e.target.value)}
          />
          <span>Multi-city</span>
        </label>
      </div>

      <div className="form-grid">
        <SmartLocationInput
          id="flightFrom"
          label="From"
          icon="fas fa-plane-departure"
          placeholder="Departure city or airport"
          type="airport"
          value={fromLocation}
          onSelect={handleFromSelect}
        />
        
        <SmartLocationInput
          id="flightTo"
          label="To"
          icon="fas fa-plane-arrival"
          placeholder="Destination city or airport"
          type="airport"
          value={toLocation}
          onSelect={handleToSelect}
        />
        
        <div className="form-group">
          <label htmlFor="flightDeparture">Departure</label>
          <div className="input-wrapper">
            <i className="fas fa-calendar"></i>
            <input 
              id="flightDeparture" 
              type="date" 
              className="form-input" 
              required 
              min={today}
              defaultValue={today}
            />
          </div>
        </div>
        
        <div className={`form-group return-date ${tripType === 'one' ? 'hidden' : ''}`}>
          <label htmlFor="flightReturn">Return</label>
          <div className="input-wrapper">
            <i className="fas fa-calendar"></i>
            <input 
              id="flightReturn" 
              type="date" 
              className="form-input" 
              min={tomorrow}
              defaultValue={tripType === 'round' ? tomorrow : ''}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Passengers & Class</label>
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

      <button className="btn btn-search">
        <i className="fas fa-search"></i>
        Search Flights
      </button>
    </div>
  );
};

export default FlightForm;