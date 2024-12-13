const apiKey = "7dfbc4ab";
const baseUrl = "http://www.omdbapi.com/";

async function fetchMovies(query){
    try{
        const response = await fetch(`${baseUrl}?apikey=${apiKey}&s=${query}`);

        if(!response.ok) {
            throw new Error('Failed to fetch movies');
        }

        const data = await response.json();

        if(data.Response === "False"){
            throw new Error(data.Error);
        }

        return data.Search;

    } catch(error){
        console.error("Error fetching movies:", error);
        alert("Could not fetch movie data. Please try again.");
    }
};

searchButton.addEventListener("click", async ()=>{
    const query = searchInput.value.trim();
    
    if(query){
        const movies = await fetchMovies(query);
        if (movies){
            console.log(movies);
        }
    } else {
        alert("Please enter a search term");
    }
});
