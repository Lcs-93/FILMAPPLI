import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../utils/api';

const Wishlist = ({ addToWishlist, wishlist }) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const movies = await getUpcomingMovies();
      setUpcomingMovies(movies);
    };
    fetchUpcomingMovies();
  }, []);

  return (
    <div>
      <h2>Films à Venir</h2>
      {upcomingMovies.length > 0 ? (
        upcomingMovies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <button onClick={() => addToWishlist(movie)}>Ajouter à la wishlist</button>
          </div>
        ))
      ) : (
        <p>Chargement des films...</p>
      )}
    </div>
  );
};

export default Wishlist;
