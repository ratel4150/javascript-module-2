/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
/* Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies" */

function showMovies(movies) {
  let moviesNumber = document.querySelector("#movies-number");
  moviesNumber.innerText = movies.length;

  movies.forEach(function (movie) {
    let allMovies = document.querySelector("#all-movies");
    let p = document.createElement("p");
    allMovies.appendChild(p);
    p.innerText = "Title: " + movie.title + " " + "Director: " + movie.director;
  });
}



/* Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page? */
function addMovie(movies,texts) {
 if (texts[3]==="true") {
  movies.push({
    title: texts[0],
    director: texts[1],
    type: texts[2],

    haveWatched: true,
  });
   
 } else {
  movies.push({
    title: texts[0],
    director: texts[1],
    type: texts[2],

    haveWatched: false,
  });
   
 }

  return Object;
}
function cleanLabel() {
  let ps = document.querySelector("#all-movies").querySelectorAll("p+p");
  console.log(ps);
  ps.forEach((p) => {
    p.remove();
  });
}

/* 3)const timeoutID1 = setTimeout(showMovies(movies));
const timeoutID2 = setTimeout(addMovie, 2000, movies);
const timeoutID3 = setTimeout(cleanLabel, 3000);
const timeoutID4 = setTimeout(showMovies, 3000, movies); */


let button=document.querySelector('#button')
showMovies(movies)

button.addEventListener('click',(e)=>{
  cleanLabel()
  e.preventDefault()
  const texts=Array.from(document.querySelectorAll('input[type=text]'),({value})=>value)
  addMovie(movies,texts)
  console.log(movies);
  showMovies(movies)
  
  




})