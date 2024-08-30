import React from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <header className="mb-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center">
          Movie Search
        </h1>
      </header>
      <div className="flex justify-center mb-8">
        <SearchBar />
      </div>
      {/* Other components like Carousel for popular movies */}
    </div>
  );
};

export default Home;
