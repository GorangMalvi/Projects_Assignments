document.getElementById("searchButton").addEventListener("click", searchMovie);

async function searchMovie() {
    const apiKey = "26687b53"; // Replace "YOUR_API_KEY" with your actual API key from OMDB
    const searchInput = document.getElementById("searchInput").value;
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchInput}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("data",data)
        // Update UI with movie details
        displayMovieDetails(data);
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
}

function displayMovieDetails(movie) {
    const movieDetailsContainer = document.getElementById("movieDetails");
    movieDetailsContainer.innerHTML = `
        <h2>${movie.Title} (${movie.Year})</h2>
        <img src="${movie.Poster}" alt="${movie.Title} Poster">
        <p><strong>Plot:</strong> ${movie.Plot}</p>
    `;
}
