import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const FilmItem = ({ film, deleteFilm, editFilm }) => {
  const { title, rating, comment } = film;

  return (
    <div className="film-item">
      <h3>{title}</h3>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            className={`star ${rating >= star ? 'filled' : ''}`}
          />
        ))}
      </div>
      {comment && <p>{comment}</p>}
      <button onClick={() => editFilm(film)}>Modifier</button>
      <button onClick={() => deleteFilm(title)}>Supprimer</button>
    </div>
  );
};

export default FilmItem;
