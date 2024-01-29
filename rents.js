class Movie {
    constructor(title, genre, price) {
      this.title = title;
      this.genre = genre;
      this.price = price;
      this.isAvailable = true;
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
      this.rentedMovies = [];
    }
  
    addMovie(title, genre, price) {
      const movie = new Movie(title, genre, price);
      this.movies.push(movie);
    }
  
    rentMovie(title) {
      const movieIndex = this.movies.findIndex(movie => movie.title === title);
  
      if (movieIndex !== -1 && this.movies[movieIndex].isAvailable) {
        this.movies[movieIndex].isAvailable = false;
        this.rentedMovies.push(this.movies[movieIndex]);
        return `${title} rented successfully.`;
      } else {
        return `${title} is not available for rent.`;
      }
    }
  
    returnMovie(title) {
      const rentedMovieIndex = this.rentedMovies.findIndex(movie => movie.title === title);
  
      if (rentedMovieIndex !== -1) {
        this.rentedMovies[rentedMovieIndex].isAvailable = true;
        this.rentedMovies.splice(rentedMovieIndex, 1);
        return `${title} returned successfully.`;
      } else {
        return `${title} is not in the rented movies list.`;
      }
    }
  }
  
  
  const movieStore = new MovieStore();
  
  movieStore.addMovie('Inception', 'Sci-Fi', 5.99);
  movieStore.addMovie('The Shawshank Redemption', 'Drama', 4.99);
  
  console.log(movieStore.rentMovie('Inception'));
  console.log(movieStore.rentMovie('The Shawshank Redemption'));
  console.log(movieStore.rentMovie('Inception')); 
  
  console.log(movieStore.returnMovie('The Shawshank Redemption'));
  console.log(movieStore.returnMovie('Inception')); 
  