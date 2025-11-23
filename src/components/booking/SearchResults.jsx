import React from 'react';

const SearchResults = ({ results, searchType, onClose }) => {
  if (!results) return null;

  const renderHotelResults = () => (
    <div className="results-grid">
      {results.map(hotel => (
        <div key={hotel.id} className="result-card">
          <h4>{hotel.name}</h4>
          <p>📍 {hotel.city}</p>
          <p>⭐ {hotel.rating}/5</p>
          <p className="price">₹{hotel.price} per night</p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      ))}
    </div>
  );

  const renderFlightResults = () => (
    <div className="results-grid">
      {results.map(flight => (
        <div key={flight.id} className="result-card">
          <h4>{flight.airline}</h4>
          <p>🛫 {flight.from} → 🛬 {flight.to}</p>
          <p>⏰ {flight.time}</p>
          <p className="price">₹{flight.price}</p>
          <button className="btn btn-primary">Select Flight</button>
        </div>
      ))}
    </div>
  );

  const renderResults = () => {
    switch (searchType) {
      case 'hotels': return renderHotelResults();
      case 'flights': return renderFlightResults();
      case 'buses': return renderBusResults();
      default: return renderHotelResults();
    }
  };

  return (
    <div className="search-results-overlay">
      <div className="search-results">
        <div className="results-header">
          <h3>Search Results ({results.length} found)</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        {renderResults()}
      </div>
    </div>
  );
};

export default SearchResults;