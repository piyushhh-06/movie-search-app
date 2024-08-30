import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmdbApi';

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
        setLoading(false);
        checkIfFavorite(movieData.id);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const checkIfFavorite = (movieId) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some((movie) => movie.id === movieId));
  };

  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter((movie) => movie.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  if (loading) {
    return <div className="text-center text-white p-8">Loading...</div>;
  }

  if (!movie) {
    return <div className="text-center text-white p-8">Movie not found.</div>;
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450';

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full md:w-80 lg:w-96 xl:w-1/3 rounded shadow-md mb-4 md:mb-0"
        />
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-400 mb-2">
            Release Date: {movie.release_date}
          </p>
          <p className="text-gray-300 mb-4">
            {movie.overview}
          </p>
          <p className="text-sm text-gray-300 mb-2">
            <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
          </p>
          <p className="text-sm text-gray-300 mb-2">
            <strong>Rating:</strong> {movie.vote_average} / 10
          </p>
          <button
            onClick={handleFavoriteToggle}
            className={`py-2 px-4 rounded ${isFavorite ? 'bg-red-500' : 'bg-gray-600'} text-white mt-4`}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
