// src/pages/Destinations.jsx
import React, { useState, useEffect } from 'react';
import DestinationCard from '../components/destinations/DestinationCard';
import DestinationModal from '../components/destinations/DestinationModal';
import { destinations } from '../data/destinations';

const Destinations = () => {
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedSeason === 'all') {
      setFilteredDestinations(destinations);
    } else {
      setFilteredDestinations(
        destinations.filter(dest => dest.seasons.includes(selectedSeason))
      );
    }
  }, [selectedSeason]);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  return (
    <div className="destinations-page">
      {/* Header */}
      <div className="destinations-header">
        <div className="container">
          <h1>Discover Amazing Destinations</h1>
          <p>Find your perfect getaway based on the season</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="container">
          <div className="filter-container">
            <label htmlFor="season-select">Choose Your Season</label>
            <select
              id="season-select"
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="season-select"
            >
              <option value="all">All Seasons</option>
              <option value="summer">Summer ☀️</option>
              <option value="winter">Winter ❄️</option>
              <option value="spring">Spring 🌸</option>
              <option value="monsoon">Monsoon 🌧️</option>
            </select>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="destinations-grid-section">
        <div className="container">
          <div className="destinations-grid">
            {filteredDestinations.map(destination => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={handleDestinationClick}
              />
            ))}
          </div>
          
          {filteredDestinations.length === 0 && (
            <div className="no-results">
              <p>No destinations found for the selected season.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <DestinationModal
        destination={selectedDestination}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Destinations;