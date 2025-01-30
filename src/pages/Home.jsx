import { useEffect, useState } from "react";
import MovieCard from "./../components/MovieCard";
import "../css/Home.css";

import { searchMovies, getPopularMovies } from "../services/api";

const Home = () => {
  const [search, setSearch] = useState();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log("failed to load movies from ALI ", error);
        setError("Failed to load movies.... ");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(search);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for the movies.."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            // movie => movie.
            (movie) => (
              <MovieCard movie={movie} key={movie.id} />
            )
            // )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
