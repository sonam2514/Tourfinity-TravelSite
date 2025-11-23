// Free mock APIs for development
const MOCK_HOTELS = [
    { id: 1, name: "Taj Hotel", city: "Delhi", price: 4500, rating: 4.5 },
    { id: 2, name: "Grand Hyatt", city: "Mumbai", price: 6200, rating: 4.8 },
    { id: 3, name: "ITC Gardenia", city: "Bangalore", price: 3800, rating: 4.3 }
  ];
  
  const MOCK_FLIGHTS = [
    { id: 1, airline: "Air India", from: "DEL", to: "BOM", price: 4500, time: "10:00 AM" },
    { id: 2, airline: "IndiGo", from: "DEL", to: "BLR", price: 3800, time: "02:30 PM" }
  ];
  
  // Simulate API calls with delay
  const simulateApiCall = (data, delay = 1000) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data });
      }, delay);
    });
  };
  
  export const bookingApi = {
    searchHotels: (filters) => {
      console.log("Searching hotels with filters:", filters);
      return simulateApiCall(MOCK_HOTELS);
    },
  
    searchFlights: (filters) => {
      console.log("Searching flights with filters:", filters);
      return simulateApiCall(MOCK_FLIGHTS);
    },
  
    searchBuses: (filters) => {
      console.log("Searching buses with filters:", filters);
      return simulateApiCall([
        { id: 1, company: "RedBus", from: "Delhi", to: "Jaipur", price: 800, time: "08:00 AM" }
      ]);
    },
  
    searchTrains: (filters) => {
      console.log("Searching trains with filters:", filters);
      return simulateApiCall([
        { id: 1, name: "Rajdhani Express", from: "Delhi", to: "Mumbai", price: 1500, time: "16:00" }
      ]);
    },
  
    searchCars: (filters) => {
      console.log("Searching cars with filters:", filters);
      return simulateApiCall([
        { id: 1, company: "Zoomcar", type: "SUV", price: 1200, location: "Delhi Airport" }
      ]);
    },
  
    searchPackages: (filters) => {
      console.log("Searching packages with filters:", filters);
      return simulateApiCall([
        { id: 1, name: "Goa Beach Package", duration: "5D/4N", price: 15000, includes: ["Flight", "Hotel", "Meals"] }
      ]);
    }
  };