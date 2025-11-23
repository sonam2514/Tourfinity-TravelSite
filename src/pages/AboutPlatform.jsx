// src/pages/AboutPlatform.jsx
import React from 'react';

const AboutPlatform = () => {
  return (
    <div className="about-platform-page">
      <main className="main-content">
        <section className="page-hero">
          <div className="hero-background">
            <img src="https://images.squarespace-cdn.com/content/v1/5ab27899cef372f7e5a64015/1521645777123-AUXM4FTED7W9AJWJY6X7/AdobeStock_50819585.jpg?format=2500w" alt="Modern technology and travel" />
          </div>
          <div className="hero-overlay">
            <div className="container">
              <h1 className="page-title">About Us</h1>
              <p className="page-subtitle">Discover, travel, and explore without limits</p>
            </div>
          </div>
        </section>

        <section className="platform-intro">
          <div className="container">
            <div className="intro-content">
              <h2>The Complete Travel Solution</h2>
              <p className="intro-text">Tourfinity is a modern travel booking web application that offers users a seamless experience to explore, search, and book flights, hotels, and holiday packages - all in one place. We combine real-time data handling, secure authentication, and a clean, responsive design to deliver an interactive and user-friendly travel solution.</p>
            </div>
            <div className="platform-image">
              <img src="https://images.unsplash.com/photo-1747276737245-b10e95175577?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8" alt="Platform interface" />
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Platform Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✈️</div>
                <h3>Flight Booking</h3>
                <p>Search and compare flights from hundreds of airlines worldwide. Real-time pricing, seat selection, and instant booking confirmation.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏨</div>
                <h3>Hotel Reservations</h3>
                <p>Find the perfect accommodation from budget-friendly stays to luxury resorts. Detailed reviews, photos, and flexible booking options.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎒</div>
                <h3>Holiday Packages</h3>
                <p>Curated travel packages combining flights, hotels, and experiences. Perfect for those seeking hassle-free vacation planning.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Secure Payments</h3>
                <p>Industry-leading security with encrypted transactions, multiple payment methods, and fraud protection for peace of mind.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Mobile Optimized</h3>
                <p>Fully responsive design that works seamlessly across all devices. Book your next trip from anywhere, anytime.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>Real-time Updates</h3>
                <p>Live flight status, weather updates, and instant notifications to keep you informed throughout your journey.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="technology-section">
          <div className="container">
            <div className="tech-content">
              <div className="tech-text">
                <h2>Built with Modern Technology</h2>
                <p>Our platform leverages cutting-edge technology to ensure reliability, speed, and security. From our robust backend infrastructure to our intuitive user interface, every component is designed for optimal performance.</p>
                
                <div className="tech-features">
                  <div className="tech-feature">
                    <span className="tech-bullet">•</span>
                    <div>
                      <strong>Real-time Data Processing</strong>
                      <p>Instant access to live flight schedules, pricing, and availability</p>
                    </div>
                  </div>
                  <div className="tech-feature">
                    <span className="tech-bullet">•</span>
                    <div>
                      <strong>Advanced Security</strong>
                      <p>Bank-level encryption and secure authentication protocols</p>
                    </div>
                  </div>
                  <div className="tech-feature">
                    <span className="tech-bullet">•</span>
                    <div>
                      <strong>Smart Recommendations</strong>
                      <p>AI-powered suggestions based on your preferences and travel history</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-image">
                <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Modern technology interface" />
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <div className="container">
            <h2 className="section-title">The Tourfinity Experience</h2>
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-number">1</div>
                <div className="timeline-content">
                  <h3>Discover</h3>
                  <p>Explore destinations, compare options, and get inspired by our curated travel recommendations tailored to your interests.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-number">2</div>
                <div className="timeline-content">
                  <h3>Plan</h3>
                  <p>Use our intuitive tools to build your perfect itinerary, from flights and accommodations to local experiences and activities.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-number">3</div>
                <div className="timeline-content">
                  <h3>Book</h3>
                  <p>Secure your reservations with confidence using our protected booking system and flexible cancellation policies.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-number">4</div>
                <div className="timeline-content">
                  <h3>Travel</h3>
                  <p>Enjoy your journey with our mobile app, real-time updates, and 24/7 customer support whenever you need assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="commitment-section">
          <div className="container">
            <div className="commitment-content">
              <div className="commitment-image">
                <img src="https://images.pexels.com/photos/1591382/pexels-photo-1591382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sustainable travel" />
              </div>
              <div className="commitment-text">
                <h2>Our Commitment To You</h2>
                <p>Whether you're planning a weekend getaway or a cross-country adventure, Tourfinity is your gateway to infinite travel possibilities. We're not just a booking platform – we're your travel partner, committed to making every journey memorable.</p>
                
                <div className="commitment-list">
                  <div className="commitment-item">
                    <span className="checkmark">✓</span>
                    <span>Best price guarantee on all bookings</span>
                  </div>
                  <div className="commitment-item">
                    <span className="checkmark">✓</span>
                    <span>24/7 customer support in multiple languages</span>
                  </div>
                  <div className="commitment-item">
                    <span className="checkmark">✓</span>
                    <span>Flexible cancellation and modification policies</span>
                  </div>
                  <div className="commitment-item">
                    <span className="checkmark">✓</span>
                    <span>Sustainable travel options and carbon offset programs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPlatform;