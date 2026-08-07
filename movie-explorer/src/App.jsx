import { useState, useEffect } from 'react';
import './index.css';

const API_URL = 'https://www.omdbapi.com/?apikey=a9118a3a'; // Standard public test key

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600?text=No+Poster'}
        alt={movie.Title}
        className="movie-poster"
        loading="lazy"
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <span className="movie-year">{movie.Year}</span>
      </div>
    </div>
  );
};

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Default fetch on load to populate screen
  useEffect(() => {
    searchMovies('Batman');
  }, []);

  const searchMovies = async (title) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}&s=${encodeURIComponent(title)}`);
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Movie Explorer</h1>
        <p className="subtitle">Discover your favorite films instantly.</p>
      </header>

      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies (e.g. Inception)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {isLoading && <div className="loading">Loading movies...</div>}
      {error && <div className="error">{error}</div>}

      {!isLoading && !error && movies.length > 0 && (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}

      {!isLoading && !error && movies.length === 0 && (
        <div className="no-results">No movies found. Try another search.</div>
      )}
    </div>
  );
}
