// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  // Check if user is logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle bookings section scroll
  const scrollToBookings = () => {
    if (location.pathname === '/') {
      const bookingSection = document.getElementById('booking-section');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setShowDropdown(false);
    window.location.href = "/"; // Reload to update navbar
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowDropdown(false);
    };

    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img src="/assets/images/logo-7.png" alt="Tourfinity" />
          <span>Tourfinity</span>
        </div>
        <nav>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          
          {/* Bookings - Special case: scrolls to section on home page */}
          {location.pathname === '/' ? (
            <a href="#booking-section" className="nav-link">
              Bookings
            </a>
          ) : (
            <Link 
              to="/" 
              onClick={() => {
                setTimeout(() => {
                  const bookingSection = document.getElementById('booking-section');
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="nav-link"
            >
              Bookings
            </Link>
          )}
          
          {/* Destinations - Goes to destinations page */}
          <Link 
            to="/destinations" 
            className={location.pathname === '/destinations' ? 'active' : ''}
          >
            Destinations
          </Link>
          
          {/* Contact - Goes to contact page */}
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
          
          {/* User Account Section - Shows username when logged in, Account when not */}
          {user ? (
            <div className="user-menu" onClick={(e) => e.stopPropagation()}>
              <button 
                className={`user-btn ${location.pathname === '/login' ? 'active' : ''}`}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                👤 {user.username}
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-item user-info">
                    <strong>Welcome, {user.username}!</strong>
                    <small>{user.email}</small>
                  </div>
                  <hr />
                  <button className="dropdown-item logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
              Account
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;