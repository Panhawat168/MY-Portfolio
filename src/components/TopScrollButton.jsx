import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const TopScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 1500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className=""> {/* Only show on small screens */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-2 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-800 text-white shadow-lg transition-all duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default TopScrollButton;
