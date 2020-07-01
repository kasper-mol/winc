const API_KEY = xxxx;

const getGenre = async () => {
  const apiUrl = "https://api.themoviedb.org/3/genre/movie/list" + API_KEY;
  const response = await fetch(apiUrl, { method: "GET" });
  const result = await response.json();
  return result;
};

const getFavorite = async () => {
  const apiUrl = `https://api.themoviedb.org/3/find/tt0430105?api_key=${API_KEY}&external_source=imdb_id`;
  const response = await fetch(apiUrl, { method: "GET" });
  const result = await response.json();
  return result.movie_results[0].title;
};

const getTopRated = async () => {
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(apiUrl, { method: "GET" });
  const result = await response.json();
  return result;
};
