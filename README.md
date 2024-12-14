# Movie Search App

Welcome to the **Movie Search App**, a simple web application that allows users to search for movies and view detailed information about their favorite films. The app fetches data from the OMDB API and displays search results in a visually appealing, minimalistic design.

## Features

- **Search Movies**: Search for any movie by title using the input field.
- **Dynamic Results**: View search results with movie posters, titles, and release years.
- **Detailed Movie Information**: Click on a movie card to see details like genre, director, actors, plot, and IMDb rating in a responsive popup.
- **Minimalistic Design**: Features a retro terracotta-inspired color palette and a user-friendly interface.

## Technologies Used

- **HTML5**: For the structure of the application.
- **CSS3**: For styling the app with a sleek, retro design.
- **JavaScript**: For dynamic interactions and fetching data from the OMDB API.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/alfosei/movie-search-app.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd movie-search-app
   ```
3. **Open the Project**:
   - Open the project folder in VS Code or your preferred code editor.

4. **Launch the Application**:
   - Open the `index.html` file in your browser.

## OMDB API

This app utilizes the [OMDB API](http://www.omdbapi.com/) to fetch movie data. To replicate the app functionality:

1. Obtain an API key by signing up on the [OMDB API website](http://www.omdbapi.com/apikey.aspx).
2. Replace the placeholder `apiKey` value in `app.js` with your API key.

```javascript
const apiKey = "your-api-key-here";
```

## File Structure

```
movie-search-app/
├── index.html      # Main HTML file
├── styles.css      # CSS for styling the app
├── app.js          # JavaScript for app functionality
└── placeholder.jpg # Placeholder image for missing posters
```

## How It Works

1. **Search Functionality**:
   - Users enter a movie title in the input field and click the search button.
   - The app fetches matching results from the OMDB API.

2. **Display Results**:
   - Search results are displayed as clickable cards with movie posters, titles, and release years.

3. **Detailed View**:
   - Clicking a movie card fetches detailed information from the OMDB API using the movie's IMDb ID.
   - A popup displays the movie's details in a user-friendly format.

## Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Movie Details Popup
![Movie Details Popup](https://via.placeholder.com/800x400?text=Movie+Details+Popup)

## Contributing

Contributions are welcome! If you'd like to improve the app, please:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

### Live Demo

Try the live version of the app [here](https://alfosei.github.io/movie-search-app/).

Happy coding!
