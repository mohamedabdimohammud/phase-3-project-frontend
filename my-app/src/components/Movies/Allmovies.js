import React from "react";
import { Link } from "react-router-dom";

function Allmovies({ movies, handleDeleteMovie, handleAddToWatchlist }) {
  function handleDeleteClick(id) {
    fetch(`https://data-j87g.onrender.com/movies/destroy/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        handleDeleteMovie(id);
      })
      .catch((error) => {
        console.error("Error deleting movie:", error);
      });
  }

  function handleAddToWatchlistClick(movie) {
    handleAddToWatchlist(movie);
  }

  return (
    <div className="cards">
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <img
            className="card-img-top"
            src={movie.movie_url}
            alt={movie.movie_url}
          ></img>
          <h2>{movie.year}</h2>
          {movie.originally_fetched === false && (
            <button onClick={() => handleDeleteClick(movie.id)}>
              <span role="img" aria-label="delete">
                🗑
              </span>
            </button>
          )}
          {movie.originally_fetched === false && (
            <button onClick={() => handleAddToWatchlistClick(movie)}>
              Add to Watchlist
            </button>
          )}
          {movie.originally_fetched === false && (
            <Link to={`/update/${movie.id}`}>Update</Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default Allmovies;

