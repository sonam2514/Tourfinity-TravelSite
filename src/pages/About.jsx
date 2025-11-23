// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <main className="main-content">
        <section className="page-hero">
          <div className="hero-background">
            <img src="https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team collaboration" />
          </div>
          <div className="hero-overlay">
            <div className="container">
              <h1 className="page-title">Who We Are</h1>
              <p className="page-subtitle">The passionate team behind your next adventure</p>
            </div>
          </div>
        </section>

        <section className="story-section">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2>Our Story</h2>
                <p>Tourfinity was born from a simple yet powerful vision: to make travel accessible, enjoyable, and stress-free for everyone. Founded by a group of travel enthusiasts and technology experts, we understand the frustration of juggling multiple booking platforms, comparing endless options, and worrying about the reliability of your travel arrangements.</p>
                
                <p>Our journey began when our founders, after years of experiencing the complexities of travel planning, decided to create something better. We envisioned a platform that would not only simplify the booking process but also inspire people to explore the world with confidence.</p>
              </div>
              <div className="story-image">
                <img src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Travel planning" />
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Simplicity First</h3>
                <p>We believe travel planning should be intuitive and enjoyable, not overwhelming. Every feature we build prioritizes user experience and clarity.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔒</div>
                <h3>Trust & Security</h3>
                <p>Your safety and privacy are paramount. We implement industry-leading security measures to protect your personal information and transactions.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌍</div>
                <h3>Global Accessibility</h3>
                <p>Travel should be for everyone, everywhere. We're committed to making our platform accessible and inclusive for travelers worldwide.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>We continuously evolve our platform using cutting-edge technology to provide you with the best possible travel booking experience.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="container">
            <h2 className="section-title">Our Team</h2>
            <p className="team-intro">We're a diverse group of travel lovers, tech innovators, and customer experience experts united by our passion for making travel better for everyone.</p>
            
            <div className="team-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15</div>
                <div className="stat-label">Countries Represented</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100M+</div>
                <div className="stat-label">Bookings Processed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Customer Support</div>
              </div>
            </div>

            <div className="team-image">
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Diverse team working together" />
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="container">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p className="mission-statement">To democratize travel by providing a comprehensive, reliable, and user-friendly platform that connects travelers with their dream destinations while supporting local communities and sustainable tourism practices.</p>
              
              <div className="mission-points">
                <div className="mission-point">
                  <span className="point-number">01</span>
                  <div className="point-content">
                    <h4>Empower Travelers</h4>
                    <p>Give every traveler the tools and confidence to explore the world on their own terms.</p>
                  </div>
                </div>
                <div className="mission-point">
                  <span className="point-number">02</span>
                  <div className="point-content">
                    <h4>Support Communities</h4>
                    <p>Partner with local businesses and communities to ensure tourism benefits everyone.</p>
                  </div>
                </div>
                <div className="mission-point">
                  <span className="point-number">03</span>
                  <div className="point-content">
                    <h4>Sustainable Travel</h4>
                    <p>Promote responsible tourism practices that preserve destinations for future generations.</p>
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

export default About;