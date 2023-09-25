const urlGenres = "https://moviesminidatabase.p.rapidapi.com/genres/";
const urlMoviesByGenre =
  "https://moviesminidatabase.p.rapidapi.com/movie/byGen/";

const urlMovieDetail = "https://moviesminidatabase.p.rapidapi.com/movie/id/";

const options = {
  headers: {
    "X-RapidAPI-Key": "ca49858e5dmsh97d0e2c9e04d20cp1d6f7ejsn61ba730b1793",
    "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
  },
};

async function makeRequest(url) {
  const response = await fetch(url, options)
  const data = await response.json()

  return data
}

const getTextGenreByURL = () =>  location.search.split("=")[1];


function renderItemList(genre) {
  const genreFromURL = getTextGenreByURL();
  const classToElement =
    genreFromURL === genre
      ? "text-blue-800 font-semibold"
      : "hover:text-blue-800 hover:font-semibold";

  return `
    <p class="my-2 ${classToElement}">
      <a href="?genre=${genre}" class="cursor-pointer">${genre}</a>
    </p>
  `;
}

export async function getGenres(element) {
  const data = await makeRequest(urlGenres)

  data.results.forEach(({genre}) => element.innerHTML += renderItemList(genre));
}

async function renderMovie(movie) {
  const data = await makeRequest(`${urlMovieDetail}${movie.imdb_id}`, options)
  const movieData = data.results;

  return `<div>
    <img class="w-full md:w-[200px] h-[300px] object-cover" src="${movieData.banner}" />
    <h2 class="font-semibold text-xl mt-2">${movie.title}</h2>
    <p class="truncate">${movieData.plot}</p>
  </div>`;
}

export async function getGenreByURL() {
  const genre = getTextGenreByURL();

  // caso1: si hay un error
  if (!genre) return;

  // caso2: cuando no hay error (hacemos la busqueda)
  // https://moviesminidatabase.p.rapidapi.com/movie/byGen/genre
  const data = await makeRequest(`${urlMoviesByGenre}${genre}`, options)
  const containerMovies = document.querySelector("#grid-movies");

  data.results.slice(0, 6).forEach(async (movie) => {
    const movieData = await renderMovie(movie);
    containerMovies.innerHTML += movieData;
  });
}
