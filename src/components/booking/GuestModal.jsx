import React, { useState } from 'react';

const GuestModal = ({ 
  isOpen, 
  onClose, 
  guestCounts, 
  onGuestUpdate, 
  activeTab,
  flightClass,
  onFlightClassChange 
}) => {
  const [localCounts, setLocalCounts] = useState(guestCounts);
  const [localFlightClass, setLocalFlightClass] = useState(flightClass);

  const updateCount = (type, delta) => {
    setLocalCounts(prev => {
      const newCount = prev[type] + delta;
      
      // Validation rules
      if (type === 'adults' && newCount < 1) return prev;
      if (type === 'rooms' && newCount < 1) return prev;
      if (newCount < 0) return prev;
      
      // Ensure at least 1 adult per room for hotels
      if (type === 'rooms' && newCount > prev.adults) {
        return { ...prev, [type]: newCount };
      }
      
      return { ...prev, [type]: newCount };
    });
  };

  const handleApply = () => {
    onGuestUpdate(localCounts);
    if (activeTab === 'flights') {
      onFlightClassChange(localFlightClass);
    }
    onClose();
  };

  const getGuestSummary = () => {
    const totalGuests = localCounts.adults + localCounts.children;
    let summary = `${totalGuests} Traveler${totalGuests !== 1 ? 's' : ''}`;
    
    if (activeTab === 'hotels') {
      summary += `, ${localCounts.rooms} Room${localCounts.rooms > 1 ? 's' : ''}`;
    }
    
    if (activeTab === 'flights') {
      summary += `, ${localFlightClass}`;
    }
    
    return summary;
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>
            {activeTab === 'hotels' ? 'Select Guests & Rooms' : 
             activeTab === 'flights' ? 'Select Passengers & Class' : 
             'Select Travelers'}
          </h3>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="modal-content">
          {/* Adults */}
          <div className="guest-row">
            <div className="guest-info">
              <span className="guest-type">Adults</span>
              <span className="guest-desc">Ages 13+</span>
            </div>
            <div className="guest-controls">
              <button 
                className="guest-btn minus" 
                onClick={() => updateCount('adults', -1)}
                disabled={localCounts.adults <= 1}
              >
                -
              </button>
              <span className="guest-count">{localCounts.adults}</span>
              <button 
                className="guest-btn plus" 
                onClick={() => updateCount('adults', 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="guest-row">
            <div className="guest-info">
              <span className="guest-type">Children</span>
              <span className="guest-desc">Ages 2-12</span>
            </div>
            <div className="guest-controls">
              <button 
                className="guest-btn minus" 
                onClick={() => updateCount('children', -1)}
                disabled={localCounts.children <= 0}
              >
                -
              </button>
              <span className="guest-count">{localCounts.children}</span>
              <button 
                className="guest-btn plus" 
                onClick={() => updateCount('children', 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Infants */}
          <div className="guest-row">
            <div className="guest-info">
              <span className="guest-type">Infants</span>
              <span className="guest-desc">Under 2</span>
            </div>
            <div className="guest-controls">
              <button 
                className="guest-btn minus" 
                onClick={() => updateCount('infants', -1)}
                disabled={localCounts.infants <= 0}
              >
                -
              </button>
              <span className="guest-count">{localCounts.infants}</span>
              <button 
                className="guest-btn plus" 
                onClick={() => updateCount('infants', 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Rooms (Hotels only) */}
          {activeTab === 'hotels' && (
            <div className="guest-row">
              <div className="guest-info">
                <span className="guest-type">Rooms</span>
                <span className="guest-desc">
                  {localCounts.rooms > localCounts.adults && (
                    <span className="warning">⚠️ More rooms than adults</span>
                  )}
                </span>
              </div>
              <div className="guest-controls">
                <button 
                  className="guest-btn minus" 
                  onClick={() => updateCount('rooms', -1)}
                  disabled={localCounts.rooms <= 1}
                >
                  -
                </button>
                <span className="guest-count">{localCounts.rooms}</span>
                <button 
                  className="guest-btn plus" 
                  onClick={() => updateCount('rooms', 1)}
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Flight Class (Flights only) */}
          {activeTab === 'flights' && (
            <div className="guest-row">
              <div className="guest-info">
                <span className="guest-type">Class</span>
                <span className="guest-desc">Travel class</span>
              </div>
              <div className="guest-controls">
                <select 
                  value={localFlightClass} 
                  onChange={(e) => setLocalFlightClass(e.target.value)}
                  aria-label="Select flight class"
                  className="class-select"
                >
                  <option value="Economy">Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business">Business</option>
                  <option value="First">First Class</option>
                </select>
              </div>
            </div>
          )}

          {/* Summary Preview */}
          <div className="guest-summary-preview">
            <strong>Summary:</strong> {getGuestSummary()}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleApply}>
            Apply Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestModal;