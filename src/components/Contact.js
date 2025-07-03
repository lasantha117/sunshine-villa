import React, { useState, useEffect } from 'react';
import mapImage from '../img/map.PNG'; // Import the image

// Re-usable hook for observing intersection
const useIntersectionObserver = (options) => {
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [setRef, isVisible];
};


const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className={`contact ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">Contact & Location</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Address</h3>
              <p>123 Sunshine Boulevard, Paradise Valley, CA 90210</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p>info@sunshinevillahotel.com</p>
            </div>
          </div>
          <img src={mapImage} alt="Map of The Sunshine Villa location" className="map-image" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
