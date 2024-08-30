import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { searchMovies } from '../api/tmdbApi';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMovies = debounce(async (searchQuery) => {
    if (!searchQuery) {
      setResults([]);
      setError('');
      return;
    }
    setLoading(true);
    try {
      const movies = await searchMovies(searchQuery);
      if (movies.length === 0) {
        setResults([]);
        setError('No results found.');
      } else {
        setResults(movies);
        setError('');
      }
    } catch (err) {
      setResults([]);
      setError('Error fetching movies.');
    }
    setLoading(false);
  }, 300); 

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    fetchMovies(e.target.value);
  };

  const handleSearchClick = () => {
    fetchMovies(query);
  };

  return (
    <div className="relative max-w-md mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for movies..."
          className="px-4 py-2 border border-gray-300 rounded w-full sm:w-64 md:w-80 lg:w-96"
        />
        <button
          onClick={handleSearchClick}
          className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-blue-500 text-white rounded w-full sm:w-auto"
        >
          Search
        </button>
      </div>
      {loading && (
        <div className="absolute right-0 top-full mt-2 w-full bg-white border border-gray-300 rounded shadow px-4 py-2">
          Loading...
        </div>
      )}
      {error && (
        <div className="absolute right-0 top-full mt-2 w-full bg-red-500 text-white border border-red-700 rounded shadow px-4 py-2">
          {error}
        </div>
      )}
      {results.length > 0 && !loading && !error && (
        <div className="absolute right-0 top-full mt-2 w-full bg-white border border-gray-300 rounded shadow max-h-60 overflow-y-auto">
          {results.map(movie => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="block px-4 py-2 hover:bg-gray-200 flex items-center"
            >
              <img
                src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                alt={movie.title}
                className="inline-block w-12 h-18 mr-2"
              />
              <span className="text-sm">{movie.title}</span>
            </Link>
          ))}
        </div>
      )}
      {results.length === 0 && !loading && !error && query && (
        <div className="absolute right-0 top-full mt-2 w-full bg-white border border-gray-300 rounded shadow px-4 py-2">
          No results found.
        </div>
      )}
    </div>
  );
};

export default SearchBar;
