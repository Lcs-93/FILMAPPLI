import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const FilmForm = ({ addFilm }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0); // Initialement aucune étoile sélectionnée
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    addFilm({ title, rating, comment });
    setTitle('');
    setRating(0); // Réinitialiser la note
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre du film"
        required
      />
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            className={`star ${rating >= star ? 'filled' : ''}`}
            onClick={() => setRating(star)} // Sélectionner l'étoile
          />
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Commentaire (optionnel)"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default FilmForm;
