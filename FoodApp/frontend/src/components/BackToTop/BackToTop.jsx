import React, { useState, useEffect } from 'react';
import './BackToTop.css'; 

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop}>
        <span className="button-text">Back to Top</span>
        <span className="arrow">&#8593;</span>
      </button>
    </div>
  );
};

export default BackToTop;
