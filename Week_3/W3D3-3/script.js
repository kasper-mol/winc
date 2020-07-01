let genreList = document.getElementById("lijst-div");
let topRated = document.getElementById("toprated");

const getGenreData = async () => {
  const data = await getGenre();
  console.log(data.genres);
  data.genres.forEach((element) => {
    let newList = document.createElement("li");
    newList.innerHTML = `genre naam: ${element.name} id:${element.id}`;
    genreList.appendChild(newList);
  });
};

const getFavoriteData = async () => {
  const data = await getFavorite();
  console.log(data.movie_results);
  let newTitle = document.createElement("H2");
  newTitle.innerHTML = `genre naam: ${data}`;
  genreList.appendChild(newTitle);
};

const getTopRatedData = async () => {
  const data = await getTopRated();
  console.log(data);
  data.results.forEach((element) => {
    let newList = document.createElement("li");
    newList.innerHTML = `${element.title}`;
    genreList.appendChild(newList);
  });
};
