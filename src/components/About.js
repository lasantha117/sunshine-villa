import React, { useState, useEffect, useRef } from 'react';

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

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className={`about ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">About Our Hotel</h2>
          <p className="about-text">
            Welcome to our hotel, where comfort meets elegance. Nestled in a serene location, we offer premium accommodations, modern amenities, and personalized service to make your stay unforgettable. Whether you're traveling for business or leisure, our hotel is your perfect home away from home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;