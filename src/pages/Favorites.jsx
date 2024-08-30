import React, { useEffect, useState } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);


  const handleRemoveFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl text-white mb-4">Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 text-white p-4 rounded shadow-md flex flex-col items-center"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold text-center mb-2">{movie.title}</h3>
              <p className="text-sm text-gray-400 text-center mb-1">
                Release Date: {movie.release_date}
              </p>
              <p className="text-sm text-gray-400 text-center mb-4">
                Rating: {movie.vote_average}/10
              </p>
              <button
                onClick={() => handleRemoveFromFavorites(movie.id)}
                className="bg-red-600 text-white p-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-4">You have no favorite movies saved.</p>
      )}
    </div>
  );
};

export default Favorites;
