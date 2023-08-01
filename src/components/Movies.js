import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
            <p>Duration: {movie.duration} minutes</p>
            <p>Plot: {movie.plot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
