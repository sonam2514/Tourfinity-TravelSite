import React, { useState, useEffect, useRef } from 'react';

const SmartLocationInput = ({ 
  id, 
  label, 
  icon, 
  placeholder, 
  type = "city", 
  value = "", 
  onSelect,
  className = "" 
}) => {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const wrapperRef = useRef();

  // Debounce search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.length > 1) {
        searchLocations(query, type);
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, type]);

  // Free OpenStreetMap API - No API key needed
  const searchLocations = async (searchQuery, locationType) => {
    setIsLoading(true);
    try {
      let apiUrl = '';
      
      // Use OpenStreetMap Nominatim for all location types
      apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&addressdetails=1&limit=8&namedetails=1`;
      
      // Add country bias for India
      if (searchQuery.length < 6) { // For shorter queries, bias toward Indian locations
        apiUrl += '&countrycodes=in,us,gb';
      }

      const response = await fetch(apiUrl);
      
      if (!response.ok) throw new Error('API request failed');
      
      const data = await response.json();
      
      const formattedSuggestions = data.map(item => ({
        id: item.place_id,
        name: item.display_name.split(',')[0],
        address: item.display_name,
        city: item.address?.city || item.address?.town || item.address?.village || '',
        country: item.address?.country || '',
        type: item.type || 'place',
        icon: getIconForPlaceType(item.type),
        lat: item.lat,
        lon: item.lon
      }));
      
      setSuggestions(formattedSuggestions);
      
    } catch (error) {
      console.error('Location search error:', error);
      setSuggestions(getEnhancedFallbackSuggestions(searchQuery, locationType));
    } finally {
      setIsLoading(false);
      setIsOpen(true);
    }
  };

  const getIconForPlaceType = (type) => {
    const iconMap = {
      city: '',
      town: '',
      village: '',
      airport: '',
      railway_station: '',
      bus_station: '',
      default: ''
    };
    return iconMap[type] || iconMap.default;
  };

  // Enhanced fallback with Indian cities
  const getEnhancedFallbackSuggestions = (searchQuery, locationType) => {
    const enhancedFallbackData = {
      city: [
        { id: 'delhi', name: 'Delhi', country: 'India', type: 'city', icon: '' },
        { id: 'mumbai', name: 'Mumbai', country: 'India', type: 'city', icon: '' },
        { id: 'bangalore', name: 'Bangalore', country: 'India', type: 'city', icon: '' },
        { id: 'chennai', name: 'Chennai', country: 'India', type: 'city', icon: '' },
        { id: 'kolkata', name: 'Kolkata', country: 'India', type: 'city', icon: '' },
        { id: 'hyderabad', name: 'Hyderabad', country: 'India', type: 'city', icon: '' },
        { id: 'pune', name: 'Pune', country: 'India', type: 'city', icon: '' },
        { id: 'ahmedabad', name: 'Ahmedabad', country: 'India', type: 'city', icon: '' },
        { id: 'jaipur', name: 'Jaipur', country: 'India', type: 'city', icon: '' },
        { id: 'kochi', name: 'Kochi', country: 'India', type: 'city', icon: '' },
        { id: 'goa', name: 'Goa', country: 'India', type: 'city', icon: '' }
      ],
      airport: [
        { id: 'DEL', name: 'Delhi Airport', code: 'DEL', city: 'Delhi', country: 'India', type: 'airport' },
        { id: 'BOM', name: 'Mumbai Airport', code: 'BOM', city: 'Mumbai', country: 'India', type: 'airport' },
        { id: 'BLR', name: 'Bangalore Airport', code: 'BLR', city: 'Bangalore', country: 'India', type: 'airport' },
        { id: 'MAA', name: 'Chennai Airport', code: 'MAA', city: 'Chennai', country: 'India', type: 'airport' },
        { id: 'CCU', name: 'Kolkata Airport', code: 'CCU', city: 'Kolkata', country: 'India', type: 'airport' }
      ],
      station: [
        { id: 'ndls', name: 'New Delhi Station', city: 'Delhi', country: 'India', type: 'station' },
        { id: 'cstm', name: 'Mumbai CST', city: 'Mumbai', country: 'India', type: 'station' },
        { id: 'howrah', name: 'Howrah Junction', city: 'Kolkata', country: 'India', type: 'station' }
      ]
    };

    return enhancedFallbackData[locationType]?.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.code && item.code.toLowerCase().includes(searchQuery.toLowerCase()))
    ).slice(0, 8) || [];
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (location) => {
    setQuery(location.name);
    setIsOpen(false);
    onSelect(location);
  };

  const getPopularLocations = () => {
    const popular = {
      city: [
        { id: 'delhi', name: 'Delhi', country: 'India', type: 'city', icon: '' },
        { id: 'mumbai', name: 'Mumbai', country: 'India', type: 'city', icon: '' },
        { id: 'bangalore', name: 'Bangalore', country: 'India', type: 'city', icon: '' },
        { id: 'goa', name: 'Goa', country: 'India', type: 'city', icon: '' }
      ],
      airport: [
        { id: 'DEL', name: 'Delhi Airport', code: 'DEL', city: 'Delhi', country: 'India', type: 'airport' },
        { id: 'BOM', name: 'Mumbai Airport', code: 'BOM', city: 'Mumbai', country: 'India', type: 'airport' },
        { id: 'BLR', name: 'Bangalore Airport', code: 'BLR', city: 'Bangalore', country: 'India', type: 'airport' }
      ],
      station: [
        { id: 'ndls', name: 'New Delhi Station', city: 'Delhi', country: 'India', type: 'station' },
        { id: 'cstm', name: 'Mumbai CST', city: 'Mumbai', country: 'India', type: 'station' }
      ]
    };
    return popular[type] || [];
  };

  return (
    <div className={`form-group ${className}`} ref={wrapperRef}>
      <label htmlFor={id}>{label}</label>
      <div className="input-wrapper">
        <i className={icon}></i>
        <input
          ref={inputRef}
          id={id}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="form-input"
          required
          autoComplete="off"
        />
        
        {isLoading && (
          <div className="loading-spinner">
            <i className="fas fa-spinner fa-spin"></i>
          </div>
        )}
        
        {isOpen && (
          <div className="suggestions-dropdown">
            {isLoading && (
              <div className="suggestion-item">
                <i className="fas fa-spinner fa-spin"></i>
                <span>Searching...</span>
              </div>
            )}

            {!isLoading && suggestions.length > 0 && (
              suggestions.map((location) => (
                <div
                  key={location.id}
                  className="suggestion-item"
                  onClick={() => handleSelect(location)}
                >
                  <span className="suggestion-icon">{location.icon}</span>
                  <div className="suggestion-details">
                    <div className="suggestion-name">
                      {location.name}
                      {location.code && <span className="suggestion-code">({location.code})</span>}
                    </div>
                    <div className="suggestion-meta">
                      {location.city && `${location.city}, `}{location.country}
                    </div>
                  </div>
                </div>
              ))
            )}

            {!isLoading && query.length > 1 && suggestions.length === 0 && (
              <div className="suggestion-item no-results">
                No results found for "{query}"
              </div>
            )}

            {!isLoading && query.length === 0 && (
              <>
                <div className="suggestion-header">Popular {type}s in India</div>
                {getPopularLocations().map((location) => (
                  <div
                    key={location.id}
                    className="suggestion-item"
                    onClick={() => handleSelect(location)}
                  >
                    <span className="suggestion-icon">{location.icon}</span>
                    <div className="suggestion-details">
                      <div className="suggestion-name">{location.name}</div>
                      <div className="suggestion-meta">{location.country}</div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartLocationInput;