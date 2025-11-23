import React, { useState } from 'react';
import BookingTabs from './BookingTabs';
import GuestModal from './GuestModal';

const BookingSection = () => {
  const [activeTab, setActiveTab] = useState('hotels');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCounts, setGuestCounts] = useState({
    adults: 2,
    children: 0,
    infants: 0,
    rooms: 1
  });
  const [flightClass, setFlightClass] = useState('Economy'); // Add flight class state

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleGuestUpdate = (newCounts) => {
    setGuestCounts(newCounts);
  };

  const handleFlightClassChange = (newClass) => {
    setFlightClass(newClass);
  };

  // Enhanced form props with flight class
  const formProps = { 
    guestCounts, 
    onGuestModalOpen: () => setIsModalOpen(true),
    flightClass,
    onFlightClassChange: handleFlightClassChange
  };

  return (
    <section id="booking-section" className="booking-section">
      <div className="container">
        <div className="booking-intro">
          <h2>Book Your Trip Now!</h2>
          <p className="text-white/90">
            Find the perfect travel experience with our comprehensive booking platform
          </p>
        </div>

        <BookingTabs 
          activeTab={activeTab}
          onTabChange={handleTabChange}
          {...formProps} // Spread all form props
        />

        <GuestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          guestCounts={guestCounts}
          onGuestUpdate={handleGuestUpdate}
          activeTab={activeTab}
          flightClass={flightClass}
          onFlightClassChange={handleFlightClassChange}
        />
      </div>
    </section>
  );
};

export default BookingSection;