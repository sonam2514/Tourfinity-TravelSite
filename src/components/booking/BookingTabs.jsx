// src/components/booking/BookingTabs.jsx
import React from 'react';
import HotelForm from './booking-forms/HotelForm';
import FlightForm from './booking-forms/FlightForm';
import TrainForm from './booking-forms/TrainForm';
import BusForm from './booking-forms/BusForm';
import CarForm from './booking-forms/CarForm';
import PackageForm from './booking-forms/PackageForm';

const BookingTabs = ({ activeTab, onTabChange, guestCounts, onGuestModalOpen }) => {
  const tabs = [
    { id: 'hotels', icon: 'fas fa-bed', label: 'Hotels' },
    { id: 'flights', icon: 'fas fa-plane', label: 'Flights' },
    { id: 'trains', icon: 'fas fa-train', label: 'Trains' },
    { id: 'buses', icon: 'fas fa-bus', label: 'Buses' },
    { id: 'cars', icon: 'fas fa-car', label: 'Cars' },
    { id: 'packages', icon: 'fas fa-suitcase', label: 'Packages' }
  ];

  const renderForm = () => {
    const formProps = { guestCounts, onGuestModalOpen };
    
    switch (activeTab) {
      case 'hotels':
        return <HotelForm {...formProps} />;
      case 'flights':
        return <FlightForm {...formProps} />;
      case 'trains':
        return <TrainForm {...formProps} />;
      case 'buses':
        return <BusForm {...formProps} />;
      case 'cars':
        return <CarForm {...formProps} />;
      case 'packages':
        return <PackageForm {...formProps} />;
      default:
        return <HotelForm {...formProps} />;
    }
  };

  return (
    <div className="booking-widget">
      <div className="booking-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <i className={tab.icon}></i>
            {tab.label}
          </button>
        ))}
      </div>

      {renderForm()}
    </div>
  );
};

export default BookingTabs;