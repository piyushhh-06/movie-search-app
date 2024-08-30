import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : 'https://via.placeholder.com/200x300';

  return (
    <div className="border rounded shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <img 
        src={imageUrl} 
        alt={movie.title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
        <p className="text-gray-700 text-sm">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </p>
        <Link
          to={`/movie/${movie.id}`}
          className="text-indigo-500 hover:underline text-sm mt-2 block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
