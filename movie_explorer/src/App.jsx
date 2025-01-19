import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('');

  const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=6db5696bbebef9ca54f50eee295027f2&language=en-US&page=1';

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data.results);
      } catch (err) {
        setError('Failed to fetch movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedGenre ? movie.genre_ids.includes(selectedGenre) : true)
  );

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
    setSearchQuery('');
  };

  const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 18, name: 'Drama' },
    { id: 878, name: 'Science Fiction' },
    { id: 10749, name: 'Romance' },
    { id: 80, name: 'Crime' },
    { id: 14, name: 'Fantasy' },
    { id: 10752, name: 'War' },
    { id: 36, name: 'History' },
    { id: 53, name: 'Thriller' },
    { id: 99, name: 'Documentary' },
    { id: 10751, name: 'Family' },
    { id: 10770, name: 'Tv Movie' },
    { id: 37, name: 'Western' },
  ];

  return (
    <div className="app">
      <header className={`app-header ${!filteredMovies.length && searchQuery ? 'no-results' : ''}`}>
        <h1>DOT Movie Explorer</h1>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>
      
      <div className="main-content">
      <div className="dashboard">
          <h2>Genres</h2>
          <ul>
            {genres.map((genre) => (
             <li
              key={genre.id}
              onClick={() => handleGenreClick(genre.id)}
              className={selectedGenre === genre.id ? 'active' : ''}
              >
            {genre.name}
             </li>
  ))}
    </ul>
        </div>
        <div className="movie-container">
          {loading && <div className="loading">Loading...</div>}
          {!loading && searchQuery && filteredMovies.length === 0 && (
            <div className="error-message">Movie Not found <br /> Try different search</div>
          )}
          {error && <div className="error">{error}</div>}

          <div className="movie-grid">
            {filteredMovies.map((movie) => (
             <div className={`movie-card ${filteredMovies.length === 1 ? 'single-movie-card' : ''}`} key={movie.id}>
                 <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  ))}
</div>
        </div>
      </div>

      <footer className={`app-footer ${!filteredMovies.length && searchQuery ? 'no-results' : ''}`}>
        <p>© 2025 DOT Movie Explorer.</p>
      </footer>
    </div>
  );
};

export default App;
