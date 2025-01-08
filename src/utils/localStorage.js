export const loadFilmsFromLocalStorage = () => {
    const films = JSON.parse(localStorage.getItem('films'));
    return films ? films : [];
  };
  
  export const saveFilmsToLocalStorage = (films) => {
    localStorage.setItem('films', JSON.stringify(films));
  };
  