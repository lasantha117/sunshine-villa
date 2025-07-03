import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <div className="logo">
          <div className="logo-placeholder">
            <span>The Sunshine Villa</span>
          </div>
        </div>
        <div className="header-cta">
          <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="book-button">
            Book on Booking.com
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
