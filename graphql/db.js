export let movies = [
    {
      id: 0,
      name: "wonder woman",
      score: 2
    },
    {
      id: 1,
      name: "out lander",
      score: 8
    },
    {
      id: 2,
      name: "return to the blue laggon",
      score: 9
    },
    {
      id: 3,
      name: "bonding",
      score: 10
    },
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  
  if (movies.length > cleanedMovies.length) {  
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  }
  movies.push(newMovie);
  return newMovie;
}