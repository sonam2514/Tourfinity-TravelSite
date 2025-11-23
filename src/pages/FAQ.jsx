// src/pages/FAQ.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I book a trip on Tourfinity?",
      answer: "Simply search for your destination, select flights, hotels, or packages, and complete your booking through our secure payment gateway."
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, cancellations and modifications are possible depending on airline or hotel policies. Check your booking details for more info."
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely! We use encrypted payment systems and follow the latest security standards to protect your information."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes, we offer special discounts for students at Chitkara University and other partnered institutes. Look out for promotions!"
    }
  ];

  return (
    <section className="faq-page">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <p className="subtitle">Here are some common questions our travelers ask.</p>

        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <button 
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <i className={`fa-solid fa-chevron-down ${activeIndex === index ? 'rotate' : ''}`}></i>
            </button>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}

        {/* Got more questions section */}
        <div className="more-questions">
          <h3>Got any other questions?</h3>
          <p>If you can't find your answer here, feel free to reach out to us directly.</p>
          <Link to="/contact" className="contact-btn">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;