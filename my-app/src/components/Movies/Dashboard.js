import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Allmovies from "./Allmovies";

function Dashboard() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  function handleDeleteMovie(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  }

  useEffect(() => {
    fetch("https://data-j87g.onrender.com/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  function handleSearch(query) {
    fetch(`https://data-j87g.onrender.com/search?query=${query}`)
      .then((response) => response.json())
      .then((results) => {
        setMovies(results);
        navigate("/dashboard");
      });
  }

  useEffect(() => {
    const count = watchlist.length;
    document.title = count > 0 ? `Watchlist (${count})` : "Dashboard";
  }, [watchlist]);

  function handleAddToWatchlist(movie) {
    if (!watchlist.some((item) => item.id === movie.id)) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
      alert(`Added ${movie.title} to Watchlist`);
    }
  }

  return (
    <div>
      <nav className="dashnav">
        <Link to="/addmovie">Add Movie</Link>
        <Search onSearch={handleSearch} />
        <Link to="/watchlist" className="watchlist-icon">
          <span role="img" aria-label="watchlist-icon">
            🎬
          </span>
          {watchlist.length}
        </Link>
      </nav>
      <Allmovies
        movies={movies}
        handleDeleteMovie={handleDeleteMovie}
        handleAddToWatchlist={handleAddToWatchlist}
      />
    </div>
  );
}

export default Dashboard;

