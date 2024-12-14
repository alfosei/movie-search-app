const apiKey = "7dfbc4ab";
const baseUrl = "https://www.omdbapi.com/";

async function fetchMovies(query) {
  try {
    const response = await fetch(`${baseUrl}?apikey=${apiKey}&s=${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    return data.Search;
  } catch (error) {
    console.error("Error fetching movies:", error);
    alert("Could not fetch movie data. Please try again.");
  }
}

const searchButton = document.getElementById("search-button");
const movieInput = document.getElementById("movie-input");

searchButton.addEventListener("click", async () => {
  const movieTitle = movieInput.value.trim();

  if (movieTitle) {
    const movieData = await fetchMovies(movieTitle);

    if (movieData) {
      displayMovies(movieData); // Display the movie results
    } else {
      alert("No movies found. Please try a different search.");
    }
  } else {
    alert("Please enter a movie title.");
  }
});

function displayMovies(movies) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = ""; // Clear previous results

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.setAttribute("data-id", movie.imdbID); // Store IMDb ID for detailed fetch

    const moviePoster = document.createElement("img");
    moviePoster.src = movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg";
    moviePoster.alt = movie.Title;

    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.Title;

    const movieYear = document.createElement("p");
    movieYear.textContent = `Year: ${movie.Year}`;

    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieYear);
    resultsContainer.appendChild(movieCard);
  });

  addMovieCardListeners(); // Add click event listeners after rendering the cards
}

async function fetchMovieDetails(imdbID) {
  try {
    const response = await fetch(`${baseUrl}?apikey=${apiKey}&i=${imdbID}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    alert("Could not fetch movie details. Please try again.");
  }
}

async function showMovieDetails(imdbID) {
  const movieDetails = await fetchMovieDetails(imdbID);
  if (movieDetails) {
    const detailsContent = document.getElementById("details-content");
    detailsContent.innerHTML = `
      <h2>${movieDetails.Title} (${movieDetails.Year})</h2>
      <img src="${movieDetails.Poster}" alt="${movieDetails.Title}" />
      <p><strong>Genre:</strong> ${movieDetails.Genre}</p>
      <p><strong>Director:</strong> ${movieDetails.Director}</p>
      <p><strong>Actors:</strong> ${movieDetails.Actors}</p>
      <p><strong>Plot:</strong> ${movieDetails.Plot}</p>
      <p><strong>IMDB Rating:</strong> ${movieDetails.imdbRating}</p>
    `;
    document.getElementById("movie-details").classList.remove("hidden"); // Show the movie details section
  }
}

function addMovieCardListeners() {
  const movieCards = document.querySelectorAll(".movie-card");
  movieCards.forEach(card => {
    card.addEventListener("click", () => {
      const imdbID = card.getAttribute("data-id");
      showMovieDetails(imdbID);
    });
  });
}

// Close details section
document.getElementById("close-details").addEventListener("click", () => {
  document.getElementById("movie-details").classList.add("hidden");
});
