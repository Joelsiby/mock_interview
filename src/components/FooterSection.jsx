import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-700 text-white py-3 px-10 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="/path-to-your-logo.png" alt="Gru" className="mr-2" /> {/* Add your logo path here */}
      </div>

      {/* Center text */}
      <div className="flex-1 text-center">
      © Machine Mavericks
      </div>

      {/* Text on the right */}
      <div className="flex items-center">
        AI
      </div>
    </footer>
  );
};

export default Footer;
