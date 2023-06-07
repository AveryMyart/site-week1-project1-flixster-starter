let fakeMovieAPI = {

}

let firstMovie = fakeMovieAPI.results[0]

console.log(firstMovie)

function generateCards(movieObject) {

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

    // create average container
    let averageContainer = document.createElement("div");
    averageContainer.classList.add("average");
    averageContainer.appendChild(star);
    averageContainer.appendChild(rating);
    document.body.appendChild(averageContainer);

    let image  = document.createElement("img");
    image.src = "https://image.tmdb.org/t/p/w342" + movieObject.poster_path
    document.body.insertBefore(image, averageContainer)

    let name = document.createElement('div');
    name.classList.add("name");
    name.innerText = movieObject.original_title;
    document.body.insertBefore(name, averageContainer.nextSibling);

}

generateCards(firstMovie);