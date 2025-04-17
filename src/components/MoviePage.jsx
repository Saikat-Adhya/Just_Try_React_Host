import React, { useState } from 'react';

const MoviePage = () => {
  const [box, setBox] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    {
      id: 1,
      title: "Movie 1",
      description: "Description of Movie 1",
    },
    {
      id: 2,
      title: "Movie 2",
      description: "Description of Movie 2",
    },
    {
      id: 3,
      title: "Movie 3",
      description: "Description of Movie 3",
    },
    {
      id: 4,
      title: "Movie 4",
      description: "Description of Movie 4",
    },
  ];

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchTerm(box.trim().toLowerCase());
  };

  const clickHandler = (title) => {
    alert(`You clicked on ${title}`);
  };

  // Filter movies based on searchTerm
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <form onSubmit={changeHandler}>
        <input
          type="text"
          placeholder="Enter Movie Name"
          value={box}
          onChange={(e) => setBox(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <button onClick={() => clickHandler(movie.title)}>
              Watch Now {movie.title}
            </button>
          </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </>
  );
};

export default MoviePage;
