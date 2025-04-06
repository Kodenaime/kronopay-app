import React, { useState } from 'react';
import SectionTop from './SectionTop';
import profile1 from '../assets/avatar3.jpg';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonialsData = [
  {
    image: profile1,
    name: 'David Onyekachukwu',
    role: 'Digital Designer',
    text: 'Since I started using the multi-currency wallet, managing my international freelance payments has been seamless. No more forex headaches!'
  },
  {
    image: profile1,
    name: 'Chioma Emmanuel',
    role: 'Family Account Manager',
    text: 'I love how I can schedule airtime purchases for my whole family. The app remembers all our numbers and carriers - super convenient!'
  },
  {
    image: profile1,
    name: 'Naruto Uzumaki',
    role: 'UI Designer',
    text: 'The app interface is so intuitive. I can manage all my finances in one place without any confusion!'
  },
  {
    image: profile1,
    name: 'Bruce Banner',
    role: 'UI Designer',
    text: 'The app interface is so intuitive. I can manage all my finances in one place without any confusion!'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials-section">
      <div className="container testimonials-container">
        <SectionTop 
          head="TESTIMONIALS" 
          title="From our customers" 
          body="Join 10k+ of our global users experiencing simplified banking." 
        />
        
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src={testimonialsData[currentIndex].image} alt={testimonialsData[currentIndex].name} />
              <div className="testimonial-info">
                <h3>{testimonialsData[currentIndex].name}</h3>
                <p>{testimonialsData[currentIndex].role}</p>
              </div>
            </div>
            <p className="testimonial-text">"{testimonialsData[currentIndex].text}"</p>
          </div>

          <div className="slider-controls">
            <button onClick={prevTestimonial} aria-label="Previous testimonial">
              <FiChevronLeft />
            </button>
            <div className="slider-dots">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={index === currentIndex ? 'active' : ''}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} aria-label="Next testimonial">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;