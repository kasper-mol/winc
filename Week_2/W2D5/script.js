// Get movielist from document
const movieList = document.getElementById("movielist");
const nieuweButton = document.getElementById("nieuwe-films");
const avengersButton = document.getElementById("avengers")
const xmenButton = document.getElementById("x-men");
const princessButton = document.getElementById("princess");
const batmanButton = document.getElementById("batman");
const zoekbalk = document.getElementById("zoekbalk");

// Make the movielist
const makeMovieList = moviesDatabase.forEach(Element => {
    let newPoster = document.createElement("img");
    movieList.appendChild(document.createElement("li").appendChild(newPoster))
    newPoster.setAttribute("src", Element.Poster);
})

// Filters
const newOnly = (film) => { return parseInt(film.Year) >= 2014 }
const avengersOnly = (film) => { return film.Title.includes("Avengers"); }
const xmenOnly = (film) => { return film.Title.includes("X-Men"); }
const princessOnly = (film) => { return film.Title.includes("Princess"); }
const batmanOnly = (film) => { return film.Title.includes("Batman"); }

// switch for diffferent filters
const filterMovies = (x) => {
    switch (x) {
        case 0:  // only new movies
            movieList.querySelectorAll("img").forEach(n => n.remove());
            const filterNew = moviesDatabase.filter(newOnly);
            filterNew.forEach(Element => {
                let newPoster = document.createElement("img");
                let link = document.createElement("a");
                movieList.appendChild(document.createElement("li").appendChild(link)).appendChild(newPoster);
                newPoster.setAttribute("src", Element.Poster);
                link.setAttribute("href", "https://www.imdb.com/title/" + Element.imdbID);
            }
            )
            break;

        case 1:  // only avengers movies
            movieList.querySelectorAll("img").forEach(n => n.remove());
            const filterAvengers = moviesDatabase.filter(avengersOnly);
            filterAvengers.forEach(Element => {
                let newPoster = document.createElement("img");
                let link = document.createElement("a");
                movieList.appendChild(document.createElement("li").appendChild(link)).appendChild(newPoster);
                newPoster.setAttribute("src", Element.Poster);
                link.setAttribute("href", "https://www.imdb.com/title/" + Element.imdbID);
            }
            )
            break;
        case 2:  // only x-men movies
            movieList.querySelectorAll("img").forEach(n => n.remove());
            const filterXmen = moviesDatabase.filter(xmenOnly);
            filterXmen.forEach(Element => {
                let newPoster = document.createElement("img");
                let link = document.createElement("a");
                movieList.appendChild(document.createElement("li").appendChild(newPoster))
                newPoster.setAttribute("src", Element.Poster);
            }
            )
            break;
        case 3:  // only princess movies
            movieList.querySelectorAll("img").forEach(n => n.remove());
            const filterPrincess = moviesDatabase.filter(princessOnly);
            filterPrincess.forEach(Element => {
                let newPoster = document.createElement("img");
                let link = document.createElement("a");
                movieList.appendChild(document.createElement("li").appendChild(link)).appendChild(newPoster);
                newPoster.setAttribute("src", Element.Poster);
                link.setAttribute("href", "https://www.imdb.com/title/" + Element.imdbID);
            }
            )
            break;
        case 4:  // only batman movies
            movieList.querySelectorAll("img").forEach(n => n.remove());
            const filterBatman = moviesDatabase.filter(batmanOnly);
            filterBatman.forEach(Element => {
                let newPoster = document.createElement("img");
                let link = document.createElement("a");
                movieList.appendChild(document.createElement("li").appendChild(link)).appendChild(newPoster);
                newPoster.setAttribute("src", Element.Poster);
                link.setAttribute("href", "https://www.imdb.com/title/" + Element.imdbID);
            }
            )
            break;
        case 5:  // only batman movies
            movieList.querySelectorAll("img").forEach(n => n.remove());
            const zoekFilter = (film) => {
                let zoekLijst = film.Title.toLowerCase();
                let zoekCritera = zoekbalk.value.toLowerCase();
                return zoekLijst.includes(zoekCritera);
            }
            const zoeken = moviesDatabase.filter(zoekFilter);
            zoeken.forEach(Element => {
                let newPoster = document.createElement("img");
                let link = document.createElement("a");
                movieList.appendChild(document.createElement("li").appendChild(link)).appendChild(newPoster);
                newPoster.setAttribute("src", Element.Poster);
                link.setAttribute("href", "https://www.imdb.com/title/" + Element.imdbID);
            }
            )
            break;
    }
}

// Eventlistners
nieuweButton.addEventListener("click", filterMovies("new"));
avengersButton.addEventListener("click", filterMovies("avengers"));
xmenButton.addEventListener("click", filterMovies("xmen"));
princessButton.addEventListener("click", filterMovies("princess"));
batmanButton.addEventListener("click", filterMovies("batman"));