const apiKey = 'bc4ebe4e41d0e0447f7e7f61341f5914';
const nowPlayingURL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzRlYmU0ZTQxZDBlMDQ0N2Y3ZTdmNjEzNDFmNTkxNCIsInN1YiI6IjY0MGZmMDk0YzM5MGM1MDA3ZjE3N2FlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suug_jaTghAGjuUp8MrUqPhYCsOIxu2XWzBzfEh02HA'
    }
  };
  
function getMovies(url){
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
        for(movie in response.results){
            generateCards(response.results[movie])
        }
    })
}

function generateCards(movieObject) {
    let movieGrid = document.getElementById('movies-grid');
    let movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieGrid.appendChild(movieCard);

    // create star
    let star = document.createElement("span");
    star.classList.add("star")
    let starContent = document.createTextNode("⭐️");
    star.appendChild(starContent);

    // create rating
    let rating = document.createElement("span");
    let ratingContent = document.createTextNode(movieObject.vote_average);
    rating.classList.add("rating");
    rating.appendChild(ratingContent);

    // create image
    let image  = document.createElement("img");
    image.src = "https://image.tmdb.org/t/p/w342" + movieObject.poster_path
    image.classList.add('movie-poster')
    movieCard.appendChild(image);

    // create average container
    let averageContainer = document.createElement("div");
    averageContainer.classList.add("movie-votes");
    averageContainer.appendChild(star);
    averageContainer.appendChild(rating);
    movieCard.appendChild(averageContainer);

    // create card and 
    let name = document.createElement('div');
    name.classList.add('movie-title');
    name.innerText = movieObject.original_title;
    movieCard.appendChild(name);
}

//loading website
getMovies(nowPlayingURL);
