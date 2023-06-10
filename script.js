const apiKey = 'bc4ebe4e41d0e0447f7e7f61341f5914';

let url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'

let fakeMovieAPI = {
    "dates": {
        "maximum": "2023-06-05",
        "minimum": "2023-04-18"
    },
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
            "genre_ids": [
                16,
                10751,
                12,
                14,
                35
            ],
            "id": 502356,
            "original_language": "en",
            "original_title": "The Super Mario Bros. Movie",
            "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
            "popularity": 3392.2,
            "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            "release_date": "2023-04-05",
            "title": "The Super Mario Bros. Movie",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 4327
        },
        {
            "adult": false,
            "backdrop_path": "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
            "genre_ids": [
                28,
                12,
                16,
                878
            ],
            "id": 569094,
            "original_language": "en",
            "original_title": "Spider-Man: Across the Spider-Verse",
            "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
            "popularity": 2921.844,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
            "release_date": "2023-05-31",
            "title": "Spider-Man: Across the Spider-Verse",
            "video": false,
            "vote_average": 8.8,
            "vote_count": 739
        },
        {
            "adult": false,
            "backdrop_path": "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 385687,
            "original_language": "en",
            "original_title": "Fast X",
            "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
            "popularity": 2334.66,
            "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
            "release_date": "2023-05-17",
            "title": "Fast X",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 854
        },
    ],
    "total_pages": 98,
    "total_results": 1951
}

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzRlYmU0ZTQxZDBlMDQ0N2Y3ZTdmNjEzNDFmNTkxNCIsInN1YiI6IjY0MGZmMDk0YzM5MGM1MDA3ZjE3N2FlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suug_jaTghAGjuUp8MrUqPhYCsOIxu2XWzBzfEh02HA'
    }
  };
  
let apiData = {
    data:getMovies(url),
}

function getMovies(url){
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
        for(movie in response.results){
            generateCards(response.results[movie])
        }
    })
}


let firstMovie = fakeMovieAPI.results[0]

getMovies(url);


function generateCards(movieObject) {
    let movieGrid = document.getElementById('card-container');
    let movieCard = document.createElement('div');
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
    
    let image  = document.createElement("img");
    image.src = "https://image.tmdb.org/t/p/w342" + movieObject.poster_path
    // document.body.insertBefore(image, averageContainer)
    movieCard.appendChild(image);

    // create average container
    let averageContainer = document.createElement("div");
    averageContainer.classList.add("average");
    averageContainer.appendChild(star);
    averageContainer.appendChild(rating);
    // document.body.appendChild(averageContainer);
    movieCard.appendChild(averageContainer);


    let name = document.createElement('div');
    name.classList.add("name");
    name.innerText = movieObject.original_title;
    // document.body.insertBefore(name, averageContainer.nextSibling);
    movieCard.appendChild(name);

}

getMovies(url);


// for (movie in apiData.data.results){
//     generateCards(apiData.data.results[movie]);
// };

// fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
// .then(response => response.json())
// .then(response => {
//     for(let i = 0; i<response.results.length; i++){
//         generateCards(response.results)
//     }
// })