import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 text-white">
      {/* Title Section */}
      <h1 className="text-xl font-bold mb-2 md:mb-0">Movie Details</h1>
      
      {/* Navigation Section */}
      <nav className="flex space-x-4">
        <Link to="/" className="hover:underline" aria-label="Go to Home">Home</Link>
        <Link to="/favorites" className="hover:underline" aria-label="Go to Favorites">Favorites</Link>
      </nav>
    </header>
  );
};

export default Header;
