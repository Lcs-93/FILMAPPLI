import React, { useState, useEffect } from 'react';
import FilmForm from './components/FilmForm';
import FilmList from './components/FilmList';
import Wishlist from './components/Wishlist';
import { saveFilmsToLocalStorage, loadFilmsFromLocalStorage } from './utils/localStorage';
import { getUpcomingMovies } from './utils/api';
import './styles.css';

const App = () => {
  const [films, setFilms] = useState(loadFilmsFromLocalStorage());
  const [wishlist, setWishlist] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [activeTab, setActiveTab] = useState('films'); // Onglet actif, films ou wishlist

  useEffect(() => {
    saveFilmsToLocalStorage(films);
  }, [films]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const movies = await getUpcomingMovies();
      setUpcomingMovies(movies);
    };
    fetchUpcomingMovies();
  }, []);

  const addFilm = (film) => {
    setFilms([...films, film]);
  };

  const deleteFilm = (title) => {
    setFilms(films.filter((film) => film.title !== title));
  };

  const editFilm = (filmToEdit) => {
    const newTitle = prompt('Nouveau titre', filmToEdit.title);
    const newComment = prompt('Nouveau commentaire', filmToEdit.comment);
    const newRating = Number(prompt('Nouvelle note (1-5)', filmToEdit.rating));
    setFilms(
      films.map((film) =>
        film.title === filmToEdit.title
          ? { ...film, title: newTitle, comment: newComment, rating: newRating }
          : film
      )
    );
  };

  const addToWishlist = (movie) => {
    setWishlist([...wishlist, movie]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gestion des Films</h1>
      </header>
      <div className="tabs">
        <button onClick={() => setActiveTab('films')}>Films</button>
        <button onClick={() => setActiveTab('wishlist')}>Wishlist</button>
      </div>

      {activeTab === 'films' && (
        <>
          <FilmForm addFilm={addFilm} />
          <FilmList films={films} deleteFilm={deleteFilm} editFilm={editFilm} />
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
        </>
      )}

      {activeTab === 'wishlist' && (
        <div>
          <h2>Ma Wishlist</h2>
          {wishlist.length > 0 ? (
            wishlist.map((movie) => (
              <div key={movie.id}>
                <h3>{movie.title}</h3>
              </div>
            ))
          ) : (
            <p>Aucun film ajouté à la wishlist</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

