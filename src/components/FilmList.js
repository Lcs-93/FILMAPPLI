import React from 'react';
import FilmItem from './FilmItem';

const FilmList = ({ films, deleteFilm, editFilm }) => {
  return (
    <div>
      {films.map((film) => (
        <FilmItem
          key={film.title}
          film={film}
          deleteFilm={deleteFilm}
          editFilm={editFilm}
        />
      ))}
    </div>
  );
};

export default FilmList;
