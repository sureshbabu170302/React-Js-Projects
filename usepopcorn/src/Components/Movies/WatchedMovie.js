import React from "react";

export default function WatchedMovie({ watchedMovie, handleDeleteWatched }) {
  return (
    <li>
      <img src={watchedMovie.poster} alt={`${watchedMovie.title} poster`} />
      <h3>{watchedMovie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{watchedMovie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{watchedMovie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{watchedMovie.runtime} min</span>
        </p>
      </div>
      <button
        className="btn-delete"
        onClick={() => {
          handleDeleteWatched(watchedMovie.imdbID);
        }}
      >
        X
      </button>
    </li>
  );
}
