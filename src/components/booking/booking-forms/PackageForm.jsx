import React, { useState } from 'react';
import SmartLocationInput from '../SmartLocationInput';

const PackageForm = ({ guestCounts, onGuestModalOpen }) => {
  const today = new Date().toISOString().split('T')[0];
  const [destination, setDestination] = useState('');

  const handleDestinationSelect = (location) => {
    setDestination(location.name);
    console.log('Selected package destination:', location);
  };

  const getTravelerSummary = () => {
    const totalTravelers = guestCounts.adults + guestCounts.children;
    let summary = `${totalTravelers} Traveler${totalTravelers !== 1 ? 's' : ''}`;
    if (guestCounts.rooms > 0) {
      summary += `, ${guestCounts.rooms} Room${guestCounts.rooms > 1 ? 's' : ''}`;
    }
    return summary;
  };

  return (
    <div className="booking-form active">
      <div className="form-grid">
        <SmartLocationInput
          id="packageDestination"
          label="Destination"
          icon="fas fa-globe"
          placeholder="Where do you want to go?"
          type="city"
          value={destination}
          onSelect={handleDestinationSelect}
        />
        
        <div className="form-group">
          <label htmlFor="packageDeparture">Departure Date</label>
          <div className="input-wrapper">
            <i className="fas fa-calendar"></i>
            <input 
              id="packageDeparture" 
              type="date" 
              className="form-input" 
              required 
              min={today}
              defaultValue={today}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="packageDuration">Duration</label>
          <div className="input-wrapper">
            <i className="fas fa-clock"></i>
            <select id="packageDuration" className="form-input" required>
              <option>3 Days</option>
              <option>5 Days</option>
              <option>7 Days</option>
              <option>10 Days</option>
              <option>14 Days</option>
              <option>Custom</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label>Travelers</label>
          <div className="input-wrapper travelers-selector" onClick={onGuestModalOpen}>
            <i className="fas fa-users"></i>
            <input 
              type="text" 
              value={getTravelerSummary()}
              readOnly 
              className="form-input" 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="packageBudget">Budget Range</label>
          <div className="input-wrapper">
            <i className="fas fa-dollar-sign"></i>
            <select id="packageBudget" className="form-input" required>
              <option>Under $1,000</option>
              <option>$1,000 - $2,500</option>
              <option>$2,500 - $5,000</option>
              <option>$5,000+</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="packageType">Package Type</label>
          <div className="input-wrapper">
            <i className="fas fa-suitcase"></i>
            <select id="packageType" className="form-input" required>
              <option>All-Inclusive Resort</option>
              <option>City Break</option>
              <option>Beach Vacation</option>
              <option>Adventure Tour</option>
              <option>Cruise Package</option>
              <option>Custom Itinerary</option>
            </select>
          </div>
        </div>
      </div>

      {/* Trending Searches */}
      <div className="trending-searches">
        <h4>Popular Packages</h4>
        <div className="trending-tags">
          <button type="button" className="tag-btn">Bali Paradise</button>
          <button type="button" className="tag-btn">European Tour</button>
          <button type="button" className="tag-btn">Caribbean Cruise</button>
          <button type="button" className="tag-btn">Japan Adventure</button>
          <button type="button" className="tag-btn">Family All-Inclusive</button>
        </div>
      </div>

      <button className="btn btn-search">
        <i className="fas fa-search"></i>
        Find Packages
      </button>
    </div>
  );
};

export default PackageForm;