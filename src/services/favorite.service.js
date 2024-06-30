class LocalStorageService {
  getFavorites() {
    const favorites = window.localStorage.getItem('user_data');

    if (favorites) {
      return JSON.parse(favorites);
    }

    return [];
  }

  addFavorite(movie) {
    const favorites =
      JSON.parse(window.localStorage.getItem('user_data')) || [];

    console.log(movie);

    const newFavorites = [...favorites, movie];

    window.localStorage.setItem('user_data', JSON.stringify(newFavorites));

    return newFavorites;
  }

  removeFavorite(movie) {
    const favorites =
      JSON.parse(window.localStorage.getItem('user_data')) || [];

    const newFavorites = favorites.filter((el) => el.name !== movie.name);

    window.localStorage.setItem('user_data', JSON.stringify(newFavorites));

    return newFavorites;
  }
}

export default new LocalStorageService();
